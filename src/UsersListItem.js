import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, List, Checkbox } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 100,
    height: 100
  },
  listItem: {
    cursor: "pointer",
    "&:hover": { color: "blue" }
  },
  textDiv: { flexGrow: 1 },
  checkbox: {
    color: "red"
  }
}));

const UsersListItem = ({ data, toggleCheckedUsers, checkedUsers }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ListItem
        className={classes.listItem}
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
      >
        <ListItemAvatar>
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src={data.picture.large}
          />
        </ListItemAvatar>
        <div className={classes.textDiv}>
          <ListItemText
            primary={`${data.name.first} ${data.name.last}`}
            primaryTypographyProps={{
              variant: "h4",
              align: "center",
              style: { marginLeft: 10 }
            }}
          />
          <Collapse in={open}>
            <List>
              {[
                `phone: ${data.phone}`,
                `email: ${data.email}`,
                `${data.location.city} ${data.location.street.name} ${data.location.street.number}, ${data.location.country}`
              ].map(text => (
                <ListItem key={text}>
                  <ListItemText secondary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
        <Checkbox
          checked={checkedUsers.includes(data.login.uuid)}
          onClick={e => {
            e.stopPropagation();
            toggleCheckedUsers(data.login.uuid);
          }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite className={classes.checkbox} />}
          value="cheskedH"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default UsersListItem;
