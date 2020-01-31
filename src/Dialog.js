//Dialog odpowiada za okienko ktore wyskakuje po poprwanej walidacji w Greeting

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.close}
        // PaperProps to atrybut Dialogu, dzieki niemu możemy dostac sie do styli komponentu Paper inaczej nie bylo by to mozliwe gdyz komponent Paper jest domyslnie zawarty w Dialog
        PaperProps={{ style: { padding: 60 } }}
      >
        <DialogContent>
          <DialogContentText>{`Witaj ${props.name}`}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
