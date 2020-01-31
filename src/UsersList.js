//UsersList odpowiada za liste uzytkownikow wywoływaną w RandomUsers
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Zoom, Button } from "@material-ui/core";
import UsersListItem from "./UsersListItem";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px auto",
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  button: {
    ...theme.flexCenter,
    marginTop: 20
  }
}));

const UsersList = props => {
  const classes = useStyles();
  const [showFavorites, setShowFavorites] = React.useState(false);
  const dataToShow = showFavorites
    ? props.data.filter(el => props.checkedUsers.includes(el.login.uuid))
    : props.data;

  return (
    <>
      <div className={classes.button}>
        {!showFavorites ? (
          <Button
            onClick={() => setShowFavorites(!showFavorites)}
            color="secondary"
            variant="contained"
          >
            Pokaż ulubionych
          </Button>
        ) : (
          <Button
            onClick={() => setShowFavorites(!showFavorites)}
            color="secondary"
            variant="contained"
          >
            Pokaż wszystkich
          </Button>
        )}
      </div>
      {/* //Zoom to jest "transition" odpowiada jak lista ma sie pojawic, nagle czy z jakiejs strony itp...Atrybut w nim zawarty "in" okresla kiedy ma sie pojawić lista, trzeba podac jakis warunek */}
      <Zoom in={props.data.length > 0}>
        <List className={classes.root}>
          {dataToShow.map(user => (
            <UsersListItem
              key={user.login.uuid}
              data={user}
              toggleCheckedUsers={props.toggleCheckedUsers}
              checkedUsers={props.checkedUsers}
            />
          ))}
        </List>
      </Zoom>
    </>
  );
};

export default UsersList;
