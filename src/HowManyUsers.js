import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.flexCenter,
    position: "relative",
    marginTop: 30,
    marginBottom: 30
  },
  button: { display: "block", marginLeft: 5, padding: 16 }
}));
const HowManyUsers = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        value={props.HowManyUsers}
        onChange={props.setHowManyUsers}
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.onSubmit();
          }
        }}
        variant="outlined"
        label="Podaj ilość użytkowników"
        error={props.errorNumber}
        helperText={props.errorText}
        FormHelperTextProps={{ style: { position: "absolute", top: 55 } }}
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
