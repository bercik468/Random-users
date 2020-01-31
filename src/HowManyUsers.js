//HowManyUSers odpowiada za komponent funkcyjny ze stylami dla RandomUsers
import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: { ...theme.flexCenter, position: "relative", marginTop: 30 },
  button: { display: "block", marginLeft: 5, padding: 16 }
}));
const HowManyUsers = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        value={props.HowManyUsers}
        onChange={props.setHowManyUsers}
        variant="outlined"
        label="ilość użytkowników"
      />
      <Button
        onClick={props.onSubmit}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        pobierz
      </Button>
    </div>
  );
};

export default HowManyUsers;
