import React, { Component, Fragment } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      address: "",
      showCheckout: false,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createOrder = (e) => {
    e.preventDefault();

    const order = {
      email: this.state.email,
      name: this.state.name,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  render() {
    return (
      <div>
        {this.props.cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {this.props.cartItems.length} item
            {this.props.cartItems.length === 1 ? "" : "s"} in the cart{" "}
          </div>
        )}
        <div className="cart">
          <Fade left cascade>
            <ul className="cart-items">
              {this.props.cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {item.count} x {formatCurrency(item.price)}{" "}
                      <button
                        className="button"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        {this.props.cartItems.length !== 0 && (
          <Fragment>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    this.props.cartItems.reduce(
                      (a, i) => a + i.price * i.count,
                      0
                    )
                  )}
                </div>
                <button
                  className="button primary"
                  onClick={() => {
                    this.setState({ showCheckout: true });
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
            {this.state.showCheckout && (
              <Fade right cascade>
                <div className="cart">
                  <form onSubmit={this.createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          type="text"
                          name="address"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </Fade>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}
