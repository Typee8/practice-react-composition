import React from "react";
import SubmitBtn from "./SubmitBtn";

class Product extends React.Component {
  render() {
    const { id, name, price } = this.props.data;
    const { isCategory, isCart, onClick} = this.props;

    return (
      <ul key={id} id={id} className="product">
        <li className="product__name">{name}</li>
        <li className="product__price">{price} zł</li>
        <div className="product__container-btn">
          <SubmitBtn onClick={onClick} isCategory={isCategory} isCart={isCart} />
        </div>
      </ul>
    );
  }
}

export default Product;
