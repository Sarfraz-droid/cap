import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import Card from "./components/Card";
import { Grid } from "@mui/material";

const data = {
  jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
  jdLink: "https://weekday.works",
  jobDetailsFromCompany:
    "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  maxJdSalary: 61,
  minJdSalary: null,
  salaryCurrencyCode: "USD",
  location: "delhi ncr",
  minExp: 3,
  maxExp: 6,
  jobRole: "frontend",
  companyName: "Dropbox",
  logoUrl: "https://logo.clearbit.com/dropbox.com",
};

export interface JDData {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: any;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

function App() {
  return (
    <React.Fragment>
      <Filters />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: 4,
        }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card data={data} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default App;
