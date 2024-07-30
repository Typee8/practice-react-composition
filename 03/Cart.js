import React from "react";

function Cart(props) {
  const { children } = props;

  return (
    <section className="cart">
      <h2 className="cart__header">Cart: </h2>
      {children}
    </section>
  );
}

export default Cart;
