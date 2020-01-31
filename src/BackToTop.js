//BackToTop odpowiada za za ikonke przewijania, automatyczny scrool do poczatku strony

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useScrollTrigger, Zoom, Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const BackToTop = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    //threshold okresla kiedy ma sie przycisk pokazac na jakiej odleglosci
    threshold: 100
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //behavior smooth odpowiada za powolne przewiniecie
      behavior: "smooth"
    });
  };
  return (
    <Zoom in={trigger}>
      <div className={classes.root}>
        <Fab color="secondary" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default BackToTop;