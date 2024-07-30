import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";
import Product from "./Product/Product";

import data from "./data.json";

import "./reset.css";
import "./main.css";

class App extends React.Component {
  state = {
    cart: [],
  };

  addToCart = evt => {
    const product = evt.target.closest('.product');
    const productID = parseInt(product.id);
    const selectedProduct = data.find(item => item.id === productID);

    const cartCopy = JSON.parse(JSON.stringify(this.state.cart));
    cartCopy.push(selectedProduct);

    this.setState({cart: cartCopy});
  }

  removeFromCart = evt => {
        const product = evt.target.closest(".product");
        const productID = parseInt(product.id);
        const cartCopy = JSON.parse(JSON.stringify(this.state.cart));

        const selectedProduct = cartCopy.filter(
          (item) => item.id === productID
        )[0];
        const selectedProductIndex = cartCopy.indexOf(selectedProduct);
        cartCopy.splice(selectedProductIndex, 1);

        this.setState({cart: cartCopy});
  }

  render() {
    const { cart } = this.state;

    const productList = data.map((item) => {
      const isItemInCart = cart.some((ele) => ele.id === item.id);

      if (isItemInCart) {
        return <Product isCategory={true} isCart={true} data={item} />;
      }

      return <Product onClick={this.addToCart} isCategory={true} data={item} />;
    });

    const productInCartList = cart.map((item) => (
      <Product onClick={this.removeFromCart} isCart={true} data={item} />
    ));

    return (
      <section>
        <Category>
          {productList}
        </Category>
        <Cart>
          {productInCartList}
        </Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
