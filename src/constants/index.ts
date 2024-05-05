import { IFormObject } from "../types/types";

export const roles = [
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "IOS",
    value: "ios",
  },
  {
    label: "Android",
    value: "android",
  },
  {
    label: "Tech Lead",
    value: "tech lead",
  },
  {
    label: "Backend",
    value: "backend",
  },
];

export const remote = [
  {
    label: "True",
    value: true,
  },
  {
    label: "False",
    value: false,
  },
];

export const minimumExperience = [
  {
    label: "<1",
    value: {
      minExp: 0,
      maxExp: 1,
    },
  },
  {
    label: "1-3",
    value: {
      minExp: 1,
      maxExp: 3,
    },
  },
  {
    label: "4-7",
    value: {
      minExp: 4,
      maxExp: 7,
    },
  },
];

export const minBasePay = [
  {
    label: "> 1",
    value: 1,
  },
  {
    label: "> 10",
    value: 10,
  },
  {
    label: "> 50",
    value: 50,
  },
];

export const locations = [
  {
    label: "Delhi NCR",
    value: "delhi ncr",
  },
  {
    label: "Mumbai",
    value: "mumbai",
  },
  {
    label: "Chennai",
    value: "chennai",
  },
  {
    label: "Bangalore",
    value: "bangalore",
  },
];

export const formInputData = [
  {
    label: "Roles",
    id: "role",
    options: roles,
  },
  {
    label: "Minimum Experience",
    id: "experience",
    options: minimumExperience,
  },
  {
    label: "Remote",
    id: "remote",
    options: remote,
  },
  {
    label: "Minimum Base Pay Salary",
    id: "minimumBasePay",
    options: minBasePay,
  },
] as IFormObject[];
