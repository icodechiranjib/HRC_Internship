import {
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

import { getData } from "../services/data";

export default function Menu({
  setData,
  predictHandler,
  advanceSearchHandler,
  reloadHandler,
  addHandler,
  editHandler,
  disabledEdit,
  deleteHandler,
  disabledDelete,
  analyticAddHandler,
  disabledAnalytic,
}) {
  return (
    <>
      <Grid
        container
        columns={12}
        style={{
          paddingLeft: "1.2em",
          paddingTop: "0.5em",
          paddingRight: "1.5em",
        }}
      >
        <Grid item xs={5} margin="auto">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{
              "& .MuiButton-root": {
                color: "white",
              },
            }}
          >
            <Button
              variant="contained"
              onClick={predictHandler}
              disabled={disabledAnalytic}
            >
              <Typography>PREDICT</Typography>
            </Button>
            <Button onClick={analyticAddHandler}>
              <Typography>ANALYTICS VIEW</Typography>
            </Button>
            <Button onClick={advanceSearchHandler}>
              <Typography>ADVANCE SEARCH</Typography>
            </Button>
          </ButtonGroup>
          &nbsp; &nbsp;
          <Button onClick={reloadHandler} variant="outlined">
            <ReplayIcon
              sx={{
                transform: "scaleX(-1)",
                rotate: "45deg",
              }}
            />
          </Button>
        </Grid>

        <Grid item xs={3} align="left">
          <TextField
            sx={{
              "& .MuiInputBase-root": {
                height: "3em",
                maxHeight: "3em",
                color: "#000",
                backgroundColor: "#fff",
              },
            }}
            name="search"
            label="Search Customer ID"
            type="search"
            margin="dense"
            variant="outlined"
            onChange={async (e) => {
              setData(
                await getData({
                  cust_number: e.target.value,
                  doc_id: "",
                  buisness_year: "",
                  invoice_id: "",
                })
              );
            }}
          />
        </Grid>

        <Grid item xs={4} margin="auto">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{
              "& .MuiButton-root": {
                width: "33.3%",
                minWidth: "70%",
                color: "white",
              },
            }}
          >
            <Button onClick={addHandler}>
              <Typography>ADD</Typography>
            </Button>
            <Button onClick={editHandler} disabled={disabledEdit}>
              <Typography>EDIT</Typography>
            </Button>
            <Button onClick={deleteHandler} disabled={disabledDelete}>
              <Typography>DELETE</Typography>
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}
