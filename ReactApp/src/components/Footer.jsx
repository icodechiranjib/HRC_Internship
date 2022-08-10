import { Container, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#3e505c",
        color: "white",
        padding: "1%",
        paddingBottom: "3%",
      }}
    >
      <Container style={{ textAlign: "center" }}>
        <Typography variant="body">
          <Link>Privacy Policy</Link> | &copy; {new Date().getFullYear()}{" "}
          HighRadius Corporation. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
}
