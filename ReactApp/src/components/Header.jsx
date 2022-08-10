import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Grid
      container
      columns={12}
      bgcolor="#283d4a"
      sx={{
        paddingTop: "0.5em",
      }}
    >
      <Grid
        item
        xs={5}
        sx={{
          paddingLeft: "1.2em",
        }}
      >
        <img src={require("../assets/ABC.png")} alt="ABC Products" />
        <Typography
          variant="h5"
          color="white"
          sx={{
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
            fontWeight: "bold",
          }}
        >
          Invoice List
        </Typography>
      </Grid>
      <br></br>
      <Grid item xs={7}>
        <img src={require("../assets/logo.png")} alt="HighRadius" />
      </Grid>
    </Grid>
  );
}
