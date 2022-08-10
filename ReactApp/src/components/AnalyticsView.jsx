import * as React from "react";
import {
  Dialog,
  Button,
  Grid,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function AnalyticView({
  open,
  clear_date_from,
  clear_date_to,
  due_in_date_from,
  due_in_date_to,
  baseline_create_date_from,
  baseline_create_date_to,
  invoice_currency_value,
  submitHandler,
  changeHandler,
  handleClose,
}) {
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
        <DialogTitle
          sx={{
            color: "#fff",
          }}
        >
          <Typography variant="h5">Analytics View</Typography>
        </DialogTitle>
        <DialogContent
          component="form"
          sx={{
            "& .MuiTextField-root": {
              color: "#696969",
              marginRight: 1,
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "90%",
            },
            "& .MuiButton-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& .MuiInputLabel-shrink": {
              paddingTop: "10px",
            },
            "& .MuiTypography-root": {
              color: "#fff",
            },
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography>Clear Date</Typography>
              <TextField
                focused
                name="clear_date_from"
                id="clear_date_from"
                label="From"
                type="date"
                margin="dense"
                variant="outlined"
                value={clear_date_from}
                onChange={changeHandler}
              />
              <TextField
                focused
                name="clear_date_to"
                id="clear_date_to"
                label="To"
                type="date"
                margin="dense"
                variant="outlined"
                value={clear_date_to}
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={6}>
              <Typography>Due Date</Typography>
              <TextField
                focused
                name="due_in_date_from"
                id="due_in_date_from"
                label="From"
                type="date"
                margin="dense"
                variant="outlined"
                value={due_in_date_from}
                onChange={changeHandler}
              />
              <TextField
                focused
                name="due_in_date_to"
                id="due_in_date_to"
                label="To"
                type="date"
                margin="dense"
                variant="outlined"
                value={due_in_date_to}
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={6} marginTop={2}>
              <Typography>Baseline Create Date</Typography>
              <TextField
                focused
                name="baseline_create_date_from"
                id="baseline_create_date_from"
                label="From"
                type="date"
                margin="dense"
                variant="outlined"
                value={baseline_create_date_from}
                onChange={changeHandler}
              />
              <TextField
                focused
                name="baseline_create_date_to"
                id="baseline_create_date_to"
                label="To"
                type="date"
                margin="dense"
                variant="outlined"
                value={baseline_create_date_to}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={6} marginTop={2}>
              <Typography>Invoice Currency</Typography>
              <TextField
                name="invoice_currency_value"
                id="invoice_currency_value"
                label="Invoice Currency"
                type="integer"
                margin="dense"
                variant="outlined"
                value={invoice_currency_value}
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            "& .MuiButton-root": {
              color: "white",
              borderColor: "white",
            },
          }}
        >
          <Button fullWidth variant="outlined" onClick={submitHandler}>
            SUBMIT
          </Button>
          <Button fullWidth variant="outlined" onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
