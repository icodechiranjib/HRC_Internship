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

export default function AdvanceSearch({
  open,
  doc_id,
  invoice_id,
  cust_number,
  buisness_year,
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
          <Typography variant="h5">Advance Search</Typography>
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
            name="doc_id"
            id="doc_id"
            label="Document Id"
            type="text"
            margin="dense"
            variant="outlined"
            value={doc_id}
            onChange={changeHandler}
          />
          <TextField
            name="invoice_id"
            id="invoice_id"
            label="Invoice Id"
            type="text"
            margin="dense"
            variant="outlined"
            value={invoice_id}
            onChange={changeHandler}
          />
          <TextField
            name="cust_number"
            id="cust_number"
            label="Customer Number"
            type="text"
            margin="dense"
            variant="outlined"
            value={cust_number}
            onChange={changeHandler}
          />
          <TextField
            name="buisness_year"
            id="buisness_year"
            label="Business Year"
            type="text"
            margin="dense"
            variant="outlined"
            value={buisness_year}
            onChange={changeHandler}
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
            SEARCH
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
