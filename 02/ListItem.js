import React from 'react';

function ListItem(props) {
  const { userName } = props;

    return <li>{ userName }</li>
}

export default ListItem;