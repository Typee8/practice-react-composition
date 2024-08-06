import React from "react";

class List extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ul>
        Lista plików
        {children}
      </ul>
    );
  }
}

export default List;
