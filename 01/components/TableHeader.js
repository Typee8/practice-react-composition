import React from "react";

class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
