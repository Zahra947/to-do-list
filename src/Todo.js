import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary="todo" secondary={props.text} />
      </ListItem>
    </List>
  );
}
