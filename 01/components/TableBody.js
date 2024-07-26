import React from "react";

class TableBody extends React.Component {
  render() {
    const { children } = this.props;

    return <tbody>{children}</tbody>;
  }
}

export default TableBody;
