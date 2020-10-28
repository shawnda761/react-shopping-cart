import React, {Component} from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: data.products,
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [] ,
      size: "",
      sort: "",
    }
  }

  filterProducts = (event) => {
    const sortedProducts = data.products.slice().sort((a, b) => (
      (this.state.sort === "lowest") ? ((a.price > b.price) ? 1 : -1) : (this.state.sort === "highest") ? ((a.price < b.price) ? 1 : -1) : ((a._id > b._id) ? 1 : -1)
    ));

    this.setState({
      size: event.target.value,
      products: (event.target.value === "") ? sortedProducts : sortedProducts.filter(product => product.avaliableSizes.includes(event.target.value))
    });
  }

  sortProducts = (event) => {
    this.setState({
      sort: event.target.value,
      products: this.state.products.slice().sort((a, b) => (
        (event.target.value === "lowest") ? ((a.price > b.price) ? 1 : -1) : (event.target.value === "highest") ? ((a.price < b.price) ? 1 : -1) : ((a._id > b._id) ? 1 : -1)
      ))
    });
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice().filter(item => item._id !== product._id);
    this.setState({ cartItems })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let existFlag = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        existFlag = true;
      }
    });
    if (!existFlag) {
      cartItems.push({...product, count: 1});
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  }

  render() {
    return (
      <div className="grid-container">
        <header><a href="/">React Shopping Cart</a></header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length} 
                size={this.state.size} 
                sort={this.state.sort} 
                filterProducts={this.filterProducts} 
                sortProducts={this.sortProducts} 
              />
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
