import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import { Grid } from "@mui/material";
import useListing from "./hooks/useListing";
import ListRenderer from "./container/ListRenderer";

function App() {
  const { list, lastElementRef, updateFilters } = useListing();

  return (
    <React.Fragment>
      <Filters updateFilters={updateFilters} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: 4,
        }}
      >
        <ListRenderer list={list} lastElementRef={lastElementRef} />
      </Grid>
    </React.Fragment>
  );
}

export default App;
