import React from "react";
import { IJDData } from "../types/types";
import { Grid } from "@mui/material";
import JobCard from "../components/JobCard";

type IProps = {
  list: IJDData[];
  lastElementRef: (arg: HTMLDivElement | null) => void;
};

const ListRenderer = React.memo(({ list, lastElementRef }: IProps) => {
  return (
    <React.Fragment>
      {list.map((item, index) => {
        if (list.length === index + 1)
          return (
            <Grid item xs={2} sm={4} md={4} key={index} ref={lastElementRef}>
              <JobCard data={item} />
            </Grid>
          );

        return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <JobCard data={item} />
          </Grid>
        );
      })}
    </React.Fragment>
  );
});

export default ListRenderer;
