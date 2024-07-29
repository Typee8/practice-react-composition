import React from "react";

import ListItem from "./ListItem";

function List (props) {
  const { items } = props;
  console.log(props.items);

  let id = 0;

  const ListItemList = items.map((item) => {
    id++;
    return(<ListItem key={id} userName={item} />);
  });

  return <ul>{ListItemList}</ul>;
}

export default List;
