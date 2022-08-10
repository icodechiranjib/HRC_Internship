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

export default function AddData({
  open,
  business_code,
  cust_number,
  clear_date,
  buisness_year,
  doc_id,
  posting_date,
  document_create_date,
  document_create_date1,
  due_in_date,
  invoice_currency,
  document_type,
  posting_id,
  area_business,
  total_open_amount,
  baseline_create_date,
  invoice_id,
  cust_payment_terms,
  isOpen,
  aging_bucket,
  is_deleted,
  changeHandler,
  submitHandler,
  handleClose,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xl"}
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
          <Typography variant="h5">Add</Typography>
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
            focused
            name="business_code"
            id="business_code"
            label="Business Code"
            type="text"
            margin="normal"
            variant="outlined"
            value={business_code}
            onChange={changeHandler}
            error={business_code === ""}
          />
          <TextField
            focused
            name="cust_number"
            id="cust_number"
            label="Customer Number"
            type="text"
            margin="normal"
            variant="outlined"
            value={cust_number}
            onChange={changeHandler}
            error={cust_number === ""}
          />
          <TextField
            focused
            name="clear_date"
            id="clear_date"
            label="Clear Date"
            type="date"
            margin="normal"
            variant="outlined"
            value={clear_date}
            onChange={changeHandler}
            error={clear_date === ""}
          />
          <TextField
            focused
            name="buisness_year"
            id="buisness_year"
            label="Business Year"
            type="text"
            margin="normal"
            variant="outlined"
            value={buisness_year}
            onChange={changeHandler}
            error={buisness_year === ""}
          />
          <TextField
            focused
            name="doc_id"
            id="doc_id"
            label="Document ID"
            type="text"
            margin="normal"
            variant="outlined"
            value={doc_id}
            onChange={changeHandler}
            error={doc_id === ""}
          />
          <TextField
            focused
            name="posting_date"
            id="posting_date"
            label="Posting Date"
            type="date"
            margin="normal"
            variant="outlined"
            value={posting_date}
            onChange={changeHandler}
            error={posting_date === ""}
          />
          <TextField
            focused
            name="document_create_date"
            id="document_create_date"
            label="Document Create Date"
            type="date"
            margin="normal"
            variant="outlined"
            value={document_create_date}
            onChange={changeHandler}
            error={document_create_date === ""}
          />
          <TextField
            focused
            name="document_create_date1"
            id="document_create_date1"
            label="Document Create Date 1"
            type="date"
            margin="normal"
            variant="outlined"
            value={document_create_date1}
            onChange={changeHandler}
            error={document_create_date1 === ""}
          />
          <TextField
            focused
            name="due_in_date"
            id="due_in_date"
            label="Due Date"
            type="date"
            margin="normal"
            variant="outlined"
            value={due_in_date}
            onChange={changeHandler}
            error={due_in_date === ""}
          />
          <TextField
            focused
            name="invoice_currency"
            id="invoice_currency"
            label="Invoice Currency"
            type="text"
            margin="normal"
            variant="outlined"
            value={invoice_currency}
            onChange={changeHandler}
            error={invoice_currency === ""}
          />
          <TextField
            focused
            name="document_type"
            id="document_type"
            label="Document Type"
            type="text"
            margin="normal"
            variant="outlined"
            value={document_type}
            onChange={changeHandler}
            error={document_type === ""}
          />
          <TextField
            focused
            name="posting_id"
            id="posting_id"
            label="Posting Id"
            type="text"
            margin="normal"
            variant="outlined"
            value={posting_id}
            onChange={changeHandler}
            error={posting_id === ""}
          />
          {/* <TextField
            focused
            name="area_business"
            id="area_business"
            label="Area Business"
            type="text"
            margin="normal"
            variant="outlined"
            value={area_business}
            onChange={changeHandler}
            error={area_business === ""}
          /> */}
          <TextField
            focused
            name="total_open_amount"
            id="total_open_amount"
            label="Total Open Amount"
            type="text"
            margin="normal"
            variant="outlined"
            value={total_open_amount}
            onChange={changeHandler}
            error={total_open_amount === ""}
          />
          <TextField
            focused
            name="baseline_create_date"
            id="baseline_create_date"
            label="Baseline Create Date"
            type="date"
            margin="normal"
            variant="outlined"
            value={baseline_create_date}
            onChange={changeHandler}
            error={baseline_create_date === ""}
          />
          <TextField
            focused
            name="cust_payment_terms"
            id="cust_payment_terms"
            label="Customer Payment Terms"
            type="text"
            margin="normal"
            variant="outlined"
            value={cust_payment_terms}
            onChange={changeHandler}
            error={cust_payment_terms === ""}
          />
          <TextField
            focused
            name="invoice_id"
            id="invoice_id"
            label="Invoice Id"
            type="text"
            margin="normal"
            variant="outlined"
            value={invoice_id}
            onChange={changeHandler}
            error={invoice_id === ""}
          />
          <TextField
            focused
            name="isOpen"
            id="isOpen"
            label="isOpen"
            type="text"
            margin="normal"
            variant="outlined"
            value={isOpen}
            onChange={changeHandler}
            error={isOpen === ""}
          />
          {/* <TextField
            focused
            name="aging_bucket"
            id="aging_bucket"
            label="Aging Bucket"
            type="text"
            margin="normal"
            variant="outlined"
            value={aging_bucket}
            onChange={changeHandler}
            error={aging_bucket === ""}
          /> */}
          {/* <TextField
            focused
            name="is_deleted"
            id="is_deleted"
            label="isDeleted"
            type="text"
            margin="normal"
            variant="outlined"
            value={is_deleted}
            onChange={changeHandler}
            error={is_deleted === ""}
          /> */}
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
            ADD
          </Button>
          <Button fullWidth variant="outlined" onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
