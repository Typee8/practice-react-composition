import React from "react";

class SubmitBtn extends React.Component {
  render() {
    const { isCategory, isCart, onClick } = this.props;

    if (isCart === true && isCategory === true) {
      return (
        <button disabled className="product__btn product__btn--disabled">
          X
        </button>
      );
    } else if (isCategory === true) {
      return <button onClick={onClick} className="product__btn product__btn--add">Add</button>;
    } else if (isCart === true) {
      return (
        <button onClick={onClick} className="product__btn product__btn--remove">Remove</button>
      );
    }
  }
}

export default SubmitBtn;
