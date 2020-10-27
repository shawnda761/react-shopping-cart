import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div>
        {cartItems.length === 0 ? <div className="cart cart-header">Cart is empty</div> : <div className="cart cart-header">You have {cartItems.length} item{cartItems.length === 1 ? "" : "s"} in the cart{" "}</div>}
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {item.count} x {formatCurrency(item.price)}{" "}
                    <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && ( 
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrency(cartItems.reduce((a, i) => a + i.price * i.count, 0))}
              </div>
              <button className="button primary">Proceed</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
