/* eslint-disable react/jsx-no-comment-textnodes */
import { ListItem } from "../ListItem/ListItem";
import "./ListView.css";

export const ListView = (props: any) => {
  console.log("From List View", props);

  return (
      <ul>
        {props.items.map((value: any) => {
          return (
            <ListItem
            key={value.id}
            id={value.id}
            onDeleteItem={props.onDeleteItem}
            >
              {value.text}
            </ListItem>
          )
        })}
      </ul>
  )
}
