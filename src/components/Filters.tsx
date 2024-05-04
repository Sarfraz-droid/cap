import {
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

const input = [
  {
    label: "Roles",
    id: "role",
  },
  {
    label: "Number of Employees",
    id: "number_of_employees",
  },
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Remote",
    id: "remote",
  },
  {
    label: "Minimum Base Pay Salary",
    id: "basePaySalary",
  },
];

function Filters() {
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1}>
        {input.map((item, index) => (
          <FormControl fullWidth>
            <React.Fragment key={index}>
              <InputLabel id={item.id}>{item.label}</InputLabel>
              <Select id={item.id} label={item.label}></Select>
            </React.Fragment>
          </FormControl>
        ))}
        <FormControl fullWidth>
          <TextField label="Search Company Name" />
        </FormControl>
      </Stack>
    </React.Fragment>
  );
}

export default Filters;
