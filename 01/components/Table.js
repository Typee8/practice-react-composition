import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  tableStyles = {
    marginInline: "auto",
    marginTop: "20px",
    border: "1px solid black",
  };

  render() {
    const { data } = this.props;
    
    const itemList = data.map((item) => (
      <TableRow key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
    ));

    const totalPrice = data.reduce((acc, curr) => {
      const previousTotalPrice = acc;
      const currentTotalPrice = curr.price * curr.quantity;

      return previousTotalPrice + currentTotalPrice;
    }, 0);

    return (
      <table style={this.tableStyles}>
        <TableHeader />
        <TableBody>{itemList}</TableBody>
        <TableFooter text={"Total Price: "} price={totalPrice} />
      </table>
    );
  }
}

export default Table;
