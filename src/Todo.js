import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText } from "@material-ui/core";

export function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.text} />
      </ListItem>
    </List>
  );
}
