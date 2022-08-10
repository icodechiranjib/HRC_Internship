import * as React from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function PredictNotify({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#283d4a",
          },
        }}
      >
        <DialogTitle>
          <Typography
            variant="h5"
            sx={{
              color: "white",
            }}
          >
            Prediction
          </Typography>
        </DialogTitle>
        <DialogContent
          component="form"
          sx={{
            "& .MuiButton-root": {
              color: "white",
            },
          }}
        >
          <Typography
            variant="body"
            sx={{
              color: "white",
            }}
          >
            Prediction data updated successfully
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            "& .MuiButton-root": {
              color: "white",
              borderColor: "white",
            },
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleClose(false)}
          >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
