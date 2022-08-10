import React from "react";
import { Bar, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ open, sum, count, currency, handleClose }) {
  const dataBar = {
    labels: [],
    datasets: [
      {
        label: "No. of Customers",
        data: count,
        borderColor: ["rgba(255, 192 , 203, 0.8)"],
        backgroundColor: ["rgba(255, 192 , 203, 0.8)"],
        pointBackgroundColor: "rgba(255, 192 , 203, 0.8)",
      },
      {
        label: "Total Open Amount",
        data: sum,
        borderColor: ["rgba(54, 162, 235, 0.8)"],
        backgroundColor: ["rgba(54, 162, 235, 0.8)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.8)",
      },
    ],
  };

  const optionsBar = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,
        text: "Company wise Total Open Amount and No. of Customers",
        font: {
          size: 20,
        },
      },
    },
  };

  const dataPie = {
    labels: ["USD", "CAD"],
    datasets: [
      {
        label: "PieChart",
        data: [currency.USD, currency.CAD],
        backgroundColor: [
          "rgba(255, 192 , 203, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const optionsPie = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,
        text: "Payment in terms of USD and CAD",
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiAppBar-root": {
          backgroundColor: "#243743",
        },
      }}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Analytics View
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        item
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "rgba(255, 206, 86, 0.2)",
        }}
      >
        <Grid
          sx={{
            width: "90%",
          }}
        >
          <Bar data={dataBar} options={optionsBar} />
        </Grid>
        <br />
        <br />

        <Grid
          sx={{
            width: "50%",
          }}
        >
          <Pie data={dataPie} options={optionsPie} />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default Chart;
