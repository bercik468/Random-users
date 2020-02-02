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
    width: 80,
    height: 80
  },
  listItem: {
    [theme.breakpoints.up("md")]: {
      cursor: "pointer",
      "&:hover": { color: "blue" }
    }
  },
  textDiv: {
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  itemTextDiv: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start"
  },
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
          <div className={classes.itemTextDiv}>
            <ListItemText
              align="center"
              primary={`${data.name.first} ${data.name.last}`}
              primaryTypographyProps={{
                variant: "h5"
              }}
            />
            <Collapse in={open}>
              <List>
                {[
                  `phone: ${data.phone}`,
                  `city: ${data.location.city}`,
                  `country: ${data.location.country}`
                ].map(text => (
                  <ListItem key={text}>
                    <ListItemText secondary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
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
