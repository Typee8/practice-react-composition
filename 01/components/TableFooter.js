import React from "react";

class TableFooter extends React.Component {
  render() {
    const { text, price } = this.props;

    return (
      <tfoot>
        <tr>
          <td colSpan='4'>
            {text}
            {price}
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFooter;
