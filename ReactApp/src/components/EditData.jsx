import * as React from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function EditData({
  open,
  invoice_currency,
  cust_payment_terms,
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
          <Typography variant="h5">Edit</Typography>
        </DialogTitle>
        <DialogContent
          component="form"
          sx={{
            "& .MuiTextField-root": {
              color: "#696969",
              marginRight: 1,
              backgroundColor: "#fff",
              borderRadius: "10px",
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
          }}
        >
          <TextField
            name="invoice_currency"
            id="invoice_currency"
            value={invoice_currency}
            label="Invoice Currency"
            type="text"
            margin="dense"
            onChange={changeHandler}
            variant="outlined"
          />
          <TextField
            name="cust_payment_terms"
            id="cust_payment_terms"
            value={cust_payment_terms}
            label="Customer Payment Terms"
            type="text"
            margin="dense"
            onChange={changeHandler}
            variant="outlined"
          />
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
            onClick={() => handleClose(true)}
          >
            EDIT
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleClose(false)}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
