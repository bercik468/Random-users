//Loading odpowiada za ikonke ladnowania strony podczas pobieraniadanych, przetwarzanai

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    //trzeba rozbic theme operatorem rest aby moc dodac nowe wlasciwosci
    ...theme.absCenterDiv,
    position: "fixed",
    backgroundColor: "rgba(102,102,102,0.8)",
    zIndex: 2000
  }
}));

const Loading = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <CircularProgress size={120} />
    </div>
  );
};

export default Loading;
