import React from "react";
import { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import Menu from "./Menu";

import PredictNotify from "./PredictNotify";
import AnalyticView from "./AnalyticsView";
import AdvanceSearch from "./AdvanceSearch";
import AddData from "./AddData";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import Chart from "./Chart";

import {
  getData,
  addDetails,
  updateDetails,
  deleteDetails,
  predictDetails,
} from "../services/data";
import { barChart } from "../services/graph";

function Grid() {
  // data = getter, setData = setter
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const [openAnalytic, setOpenAnalytic] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openPredict, setOpenPredict] = useState(false);
  const [openAdvanceSearch, setOpenAdvanceSearch] = useState(false);
  const [openChart, setOpenChart] = useState(false);

  const [selectionModel, setSelectionModel] = useState([]);

  const [count, setCount] = useState([]);
  const [sum, setSum] = useState([]);
  const [currency, setCurrency] = useState([]);

  const [disabledEdit, disableEdit] = useState(true);
  const [disabledDelete, disableDelete] = useState(true);
  const [disabledAnalytic, disableAnalytic] = useState(true);

  // Parameters for GridData (Rows/Columns)
  const [columns, setColumns] = useState([
    {
      field: "sl_no",
      headerName: "S No",
      width: 80,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "business_code",
      headerName: "Business Code",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cust_number",
      headerName: "Customer Number",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "clear_date",
      headerName: "Clear Date",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "buisness_year",
      headerName: "Business Year",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "doc_id",
      headerName: "Doc ID",
      width: 110,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "posting_date",
      headerName: "Posting Date",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "document_create_date",
      headerName: "Document Create Date",
      width: 170,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "document_create_date1",
      headerName: "Document Create Date 1",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "due_in_date",
      headerName: "Due in Date",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "invoice_currency",
      headerName: "Invoice Currency",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "document_type",
      headerName: "Document Type",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "posting_id",
      headerName: "Posting Id",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    // {
    //   field: "area_business",
    //   headerName: "Area Business",
    //   width: 130,
    //   align: "center",
    //   headerAlign: "center",
    // },
    {
      field: "total_open_amount",
      headerName: "Total Open Amount",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      width: 160,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cust_payment_terms",
      headerName: "Customer Payment Terms",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "invoice_id",
      headerName: "Invoice Id",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "isOpen",
      headerName: "Is Open",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "aging_bucket",
      headerName: "Aging Bucket",
      width: 110,
      align: "center",
      headerAlign: "center",
    },
    // {
    //   field: "isDeleted",
    //   headerName: "Is Deleted",
    //   width: 100,
    //   align: "center",
    //   headerAlign: "center",
    // },
  ]);

  //Parameters for AddData
  const [addData, setAddData] = useState({
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    document_create_date1: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    area_business: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
    isOpen: "",
    aging_bucket: "",
    isDeleted: "",
  });

  const {
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
    cust_payment_terms,
    invoice_id,
    isOpen,
    aging_bucket,
    isDeleted,
  } = addData;

  // Parameters for AnalyticView
  const [setAnalytic, setAddAnalytic] = React.useState({
    clear_date_from: "",
    clear_date_to: "",
    due_in_date_from: "",
    due_in_date_to: "",
    baseline_create_date_from: "",
    baseline_create_date_to: "",
    invoice_currency_value: "",
  });

  const {
    clear_date_from,
    clear_date_to,
    due_in_date_from,
    due_in_date_to,
    baseline_create_date_from,
    baseline_create_date_to,
    invoice_currency_value,
  } = setAnalytic;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };

  const addDataHandler = async (e) => {
    e.preventDefault();
    let response = await addDetails(addData);
    if (response) {
      setAddData({
        business_code: "",
        cust_number: "",
        clear_date: "",
        buisness_year: "",
        doc_id: "",
        posting_date: "",
        document_create_date: "",
        document_create_date1: "",
        due_in_date: "",
        invoice_currency: "",
        document_type: "",
        posting_id: "",
        area_business: "",
        total_open_amount: "",
        baseline_create_date: "",
        cust_payment_terms: "",
        invoice_id: "",
        isOpen: "",
        aging_bucket: "",
        isDeleted: "",
      });
      setOpenAdd(false);
      setData(
        await getData({
          cust_number: "",
          doc_id: "",
          buisness_year: "",
          invoice_id: "",
        })
      );
    }
  };

  // Parameters for AddData
  const handleAddClose = () => {
    setOpenAdd(false);
  };

  //Parameters for EditData
  const handleEditClose = async (update) => {
    if (update) {
      let response = await updateDetails(addData);
      if (response) {
        setOpenEdit(false);
        setAddData({
          business_code: "",
          cust_number: "",
          clear_date: "",
          buisness_year: "",
          doc_id: "",
          posting_date: "",
          document_create_date: "",
          document_create_date1: "",
          due_in_date: "",
          invoice_currency: "",
          document_type: "",
          posting_id: "",
          area_business: "",
          total_open_amount: "",
          baseline_create_date: "",
          cust_payment_terms: "",
          invoice_id: "",
          isOpen: "",
          aging_bucket: "",
          isDeleted: "",
        });
        setData(
          await getData({
            cust_number: "",
            doc_id: "",
            buisness_year: "",
            invoice_id: "",
          })
        );
      }
    }
    setOpenEdit(false);
  };

  //Parameters for DeleteData
  const handleDeleteClose = async (del) => {
    if (del) {
      const selectedIDs = new Set(selectionModel);
      for (let id of selectedIDs) {
        let response = await deleteDetails(id);
        if (response) {
          setOpenDelete(false);
          setAddData({
            business_code: "",
            cust_number: "",
            clear_date: "",
            buisness_year: "",
            doc_id: "",
            posting_date: "",
            document_create_date: "",
            document_create_date1: "",
            due_in_date: "",
            invoice_currency: "",
            document_type: "",
            posting_id: "",
            area_business: "",
            total_open_amount: "",
            baseline_create_date: "",
            cust_payment_terms: "",
            invoice_id: "",
            isOpen: "",
            aging_bucket: "",
            isDeleted: "",
          });
          setData(
            await getData({
              cust_number: "",
              doc_id: "",
              buisness_year: "",
              invoice_id: "",
            })
          );
        }
      }
    }
    setOpenDelete(false);
  };

  //Parameters for PredictData
  const handlePredictClose = () => {
    setOpenPredict(false);
  };
  const predictHandler = async (e) => {
    if (e) {
      const selectedIDs = new Set(selectionModel);
      for (let id of selectedIDs) {
        let predict = data.filter((addData) => addData.sl_no === id)[0];
        setAddData(predict);
        let response = await predictDetails(predict);
        if (response) {
          setData(
            await getData({
              cust_number: "",
              doc_id: "",
              buisness_year: "",
              invoice_id: "",
            })
          );
        }
      }
      setOpenPredict(true);
    }
  };

  //Parameters for AdvanceSearchData
  const handleAdvanceSearchClose = async (advSearch) => {
    if (advSearch) {
      let response = await getData(addData);
      if (response) {
        setData(await getData(addData));
        setOpenAdvanceSearch(false);
      }
    }
    setOpenAdvanceSearch(false);
  };

  const advanceSearchHandler = () => {
    setOpenAdvanceSearch(true);
  };

  // Chart Components
  const handleChartClose = () => {
    setOpenChart(false);
  };

  const changeHandlerAnalytic = (e) => {
    const { name, value } = e.target;
    setAddAnalytic({ ...setAnalytic, [name]: value });
  };

  //Parameters for Analytics
  const analyticAddHandler = async (e) => {
    e.preventDefault();
    let response = await barChart(setAnalytic);
    if (response) {
      setCount(response.count);
      setSum(response.sum);
      setCurrency(response.currency);

      setOpenChart(true);
      setAddAnalytic({
        clear_date_from: "",
        clear_date_to: "",
        due_in_date_from: "",
        due_in_date_to: "",
        baseline_create_date_from: "",
        baseline_create_date_to: "",
        invoice_currency_value: "",
      });

      setOpenAnalytic(false);
    }
  };

  const handleAnalyticClose = () => {
    setOpenAnalytic(false);
  };

  const analyticHandler = () => {
    setOpenAnalytic(true);
  };

  //Reload Button
  const reloadHandler = async () => {
    setData(
      await getData({
        cust_number: "",
        doc_id: "",
        buisness_year: "",
        invoice_id: "",
      })
    );
  };

  // Add Button
  const addHandler = () => {
    setOpenAdd(true);
  };

  // Edit Button
  const editHandler = () => {
    setOpenEdit(true);
  };

  const checkHandler = (sl_no) => {
    if (sl_no.length == 1) {
      disableEdit(false);
      let updateData = data.filter((addData) => addData.sl_no == sl_no)[0];
      setAddData(updateData);
    } else {
      disableEdit(true);
    }
  };

  // Disable/Enable Buttons
  const deleteHandler = () => {
    setOpenDelete(true);
  };
  const deletecheckHandler = (ids) => {
    if (ids.length > 0) {
      disableDelete(false);
    } else {
      disableDelete(true);
    }
  };

  const analyticcheckHandler = (ids) => {
    if (ids.length > 0) {
      disableAnalytic(false);
    } else {
      disableAnalytic(true);
    }
  };

  useEffect(async () => {
    setData(
      await getData({
        cust_number: "",
        doc_id: "",
        buisness_year: "",
        invoice_id: "",
      })
    );
  }, []);

  return (
    <>
      <Menu
        setData={setData}
        predictHandler={predictHandler}
        advanceSearchHandler={advanceSearchHandler}
        reloadHandler={reloadHandler}
        addHandler={addHandler}
        editHandler={editHandler}
        disabledEdit={disabledEdit}
        deleteHandler={deleteHandler}
        disabledDelete={disabledDelete}
        analyticAddHandler={analyticHandler}
        disabledAnalytic={disabledAnalytic}
      />
      <AnalyticView
        open={openAnalytic}
        clear_date_from={clear_date_from}
        clear_date_to={clear_date_to}
        due_in_date_from={due_in_date_from}
        due_in_date_to={due_in_date_to}
        baseline_create_date_from={baseline_create_date_from}
        baseline_create_date_to={baseline_create_date_to}
        invoice_currency={invoice_currency_value}
        changeHandler={changeHandlerAnalytic}
        submitHandler={analyticAddHandler}
        handleClose={handleAnalyticClose}
      />
      <Chart
        open={openChart}
        count={count}
        sum={sum}
        currency={currency}
        handleClose={handleChartClose}
      />
      <PredictNotify open={openPredict} handleClose={handlePredictClose} />
      <AdvanceSearch
        open={openAdvanceSearch}
        doc_id={doc_id}
        invoice_id={invoice_id}
        cust_number={cust_number}
        buisness_year={buisness_year}
        changeHandler={changeHandler}
        handleClose={handleAdvanceSearchClose}
      />
      <AddData
        open={openAdd}
        business_code={business_code}
        cust_number={cust_number}
        clear_date={clear_date}
        buisness_year={buisness_year}
        doc_id={doc_id}
        posting_date={posting_date}
        document_create_date={document_create_date}
        document_create_date1={document_create_date1}
        due_in_date={due_in_date}
        invoice_currency={invoice_currency}
        document_type={document_type}
        posting_id={posting_id}
        area_business={area_business}
        total_open_amount={total_open_amount}
        baseline_create_date={baseline_create_date}
        cust_payment_terms={cust_payment_terms}
        invoice_id={invoice_id}
        isOpen={isOpen}
        aging_bucket={aging_bucket}
        isDeleted={isDeleted}
        changeHandler={changeHandler}
        submitHandler={addDataHandler}
        handleClose={handleAddClose}
      />
      <EditData
        open={openEdit}
        invoice_currency={invoice_currency}
        cust_payment_terms={cust_payment_terms}
        changeHandler={changeHandler}
        handleClose={handleEditClose}
      />
      <DeleteData
        open={openDelete}
        changeHandler={changeHandler}
        handleClose={handleDeleteClose}
      />
      <br />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          sx={{
            color: "white",
            bgcolor: "#293b48",
            borderTop: "0px",
            borderColor: "black",

            "& .MuiTablePagination-root": {
              color: "white",
            },
            "& .MuiCheckbox-root": {
              color: "white",
            },
          }}
          rows={data}
          columns={columns}
          getRowId={(row) => row.sl_no}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 50]}
          checkboxSelection
          disableColumnMenu
          onSelectionModelChange={(ids) => {
            checkHandler(ids);
            deletecheckHandler(ids);
            analyticcheckHandler(ids);
            setSelectionModel(ids);
          }}
        />
      </div>
    </>
  );
}

export default Grid;
