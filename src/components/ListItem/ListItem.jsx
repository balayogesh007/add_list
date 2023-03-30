import React from "react";
import "./ListItem.css";

export const ListItem = (props) => {
  const deleteListHandler = () => {
    props.onDeleteItem(props.id);
  }
  return (
    <li className="list-goals" onClick={deleteListHandler}>{props.children}</li>
  )
}
