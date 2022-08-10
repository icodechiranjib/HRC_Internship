import axios from "axios";

export const barChart = async ({
  clear_date_from,
  clear_date_to,
  due_in_date_from,
  due_in_date_to,
  baseline_create_date_from,
  baseline_create_date_to,
  invoice_currency_value,
}) => {
  let query =
    "clear_date_from=" +
    clear_date_from +
    "&clear_date_to=" +
    clear_date_to +
    "&due_in_date_from=" +
    due_in_date_from +
    "&due_in_date_to=" +
    due_in_date_to +
    "&baseline_create_date_from=" +
    baseline_create_date_from +
    "&baseline_create_date_to=" +
    baseline_create_date_to +
    "&invoice_currency_value=" +
    invoice_currency_value;

  // let query =
  //   "clear_date_from=1995-04-07&clear_date_to=2019-04-07&due_in_date_from=1995-04-07&due_in_date_to=2019-04-07&baseline_create_date_from=1995-04-07&baseline_create_date_to=2019-04-07&invoice_currency=CAD";

  let response = await axios.get(
    "http://localhost:8080/backend/BarGraph?" + query
  );

  let sum = response.data.Sum;
  let count = response.data.Count;
  let currency = response.data.Currency;

  console.log(currency);

  return { sum, count, currency };
};
