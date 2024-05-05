import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { formInputData } from "../constants";
import MenuItem from "@mui/material/MenuItem";
import { IFilters } from "../types/types";

type IProps = {
  updateFilters: (arg: Partial<IFilters>) => void;
};

function Filters(props: IProps) {
  const updateFilter = (value: unknown, itemKey: string) => {
    const data = {
      [itemKey]: value,
    };

    props.updateFilters(data);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {formInputData.map((item, index) => (
          <Grid item xs={6} sm={2}>
            <FormControl fullWidth>
              <React.Fragment key={index}>
                <InputLabel id={item.id}>{item.label}</InputLabel>
                <Select
                  id={item.id}
                  label={item.label}
                  onChange={(e) => {
                    updateFilter(e.target.value, item.id);
                  }}
                >
                  <MenuItem value={undefined}>{"Any"}</MenuItem>
                  {item.options.map((item) => {
                    return <MenuItem value={item.value}>{item.label}</MenuItem>;
                  })}
                </Select>
              </React.Fragment>
            </FormControl>
          </Grid>
        ))}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <TextField
              label="Search Company Name"
              onChange={(e) => {
                updateFilter(e.target.value, "searchCompanyName");
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Filters;
