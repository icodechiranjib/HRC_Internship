import React from "react";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        margin: "0",
        backgroundColor: "#243743",
      }}
    >
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
