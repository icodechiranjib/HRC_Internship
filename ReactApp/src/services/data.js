import axios from "axios";

export const getData = async ({
  cust_number,
  doc_id,
  buisness_year,
  invoice_id,
}) => {
  let query =
    "cust_number=" +
    cust_number +
    "&doc_id=" +
    doc_id +
    "&buisness_year=" +
    buisness_year +
    "&invoice_id=" +
    invoice_id;

  let response = await axios.get(
    "http://localhost:8080/backend/DataLoading?" + query
  );

  let data = response.data.ResponsePOJO;
  data.map((responsePOJO, index) => ({ ...responsePOJO, id: index }));
  return data;
};

export const addDetails = async ({
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
}) => {
  let data =
    "business_code=" +
    business_code +
    "&cust_number=" +
    cust_number +
    "&clear_date=" +
    clear_date +
    "&buisness_year=" +
    buisness_year +
    "&doc_id=" +
    doc_id +
    "&posting_date=" +
    posting_date +
    "&document_create_date=" +
    document_create_date +
    "&document_create_date1=" +
    document_create_date1 +
    "&due_in_date=" +
    due_in_date +
    "&invoice_currency=" +
    invoice_currency +
    "&document_type=" +
    document_type +
    "&posting_id=" +
    posting_id +
    "&area_business=" +
    area_business +
    "&total_open_amount=" +
    total_open_amount +
    "&baseline_create_date=" +
    baseline_create_date +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&invoice_id=" +
    invoice_id +
    "&isOpen=" +
    isOpen +
    "&aging_bucket=" +
    aging_bucket +
    "&isDeleted=" +
    isDeleted;

  let response = await axios.get(
    "http://localhost:8080/backend/AddData?" + data
  );

  return response.data;
};

export const updateDetails = async ({
  sl_no,
  invoice_currency,
  cust_payment_terms,
}) => {
  let data =
    "sl_no=" +
    sl_no +
    "&invoice_currency=" +
    invoice_currency +
    "&cust_payment_terms=" +
    cust_payment_terms;
  let response = await axios.get(
    "http://localhost:8080/backend/EditData?" + data
  );
  console.log(response);
  return response.data;
};

export const deleteDetails = async (sl_no) => {
  let data = "sl_no=" + sl_no;
  let response = await axios.get(
    "http://localhost:8080/backend/DeleteData?" + data
  );
  return response.data;
};

export const predictDetails = async ({
  sl_no,
  business_code,
  cust_number,
  clear_date,
  buisness_year,
  doc_id,
  posting_date,
  due_in_date,
  baseline_create_date,
  cust_payment_terms,
  total_open_amount,
}) => {
  var data = {
    business_code: business_code,
    cust_number: cust_number,
    name_customer: "highradius",
    clear_date: clear_date,
    buisness_year: buisness_year.slice(0, 4),
    doc_id: doc_id,
    posting_date: posting_date,
    due_in_date: due_in_date,
    baseline_create_date: baseline_create_date,
    cust_payment_terms: cust_payment_terms,
    converted_usd: total_open_amount,
  };
  let response = await axios.post("http://127.0.0.1:5000/", data);
  let aging_bucket = response.data[0].aging_bucket;

  let data2 = "sl_no=" + sl_no + "&aging_bucket=" + aging_bucket;
  let response2 = await axios.get(
    "http://localhost:8080/backend/EditPredict?" + data2
  );

  return response2.data;
};
