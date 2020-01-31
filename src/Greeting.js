//Greeting odpowiada za okno z inputem do wpisania imienia i walidacje danych

import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyDialog from "./Dialog";

const useStyles = makeStyles(theme => ({
  root: theme.absCenterDiv,
  paper: { padding: 30, maxWidth: 320 },
  button: { display: "block", margin: "30px auto 0 auto" }
}));

const Greeting = props => {
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [nameError, setNameERror] = React.useState(false);

  const onSubmit = () => {
    if (name.length > 0) {
      setIsDialogOpen(true);
      setNameERror(false);
    } else setNameERror(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setName("");
  };

  const nameValidate = e => {
    if (!name.length === 0) {
      setNameERror(true);
    } else if (name.length === 0) {
      setNameERror(false);
    }
    setName(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TextField
          value={name}
          onChange={e => nameValidate(e)}
          variant="outlined"
          fullWidth
          label="Podaj imię"
          error={nameError}
          helperText={nameError && `Wpisz imę`}
          onKeyPress={e => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
        ></TextField>
        <Button
          onClick={onSubmit}
          className={classes.button}
          color="primary"
          variant="contained"
        >
          zatwierdź
        </Button>
      </Paper>
      <MyDialog open={isDialogOpen} name={name} close={closeDialog} />
    </div>
  );
};

export default Greeting;
