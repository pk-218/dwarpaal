import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomFormTextfield = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#284b63",
      borderWidth: "2px",
    },
  },
});

const years = [
  {
    value: "b1",
    label: "BTech First Year",
  },
  {
    value: "b2",
    label: "BTech Second Year",
  },
  {
    value: "b3",
    label: "BTech Third Year",
  },
  {
    value: "b4",
    label: "BTech Final Year",
  },
  {
    value: "m1",
    label: "MTech First Year",
  },
  {
    value: "m1",
    label: "MTech Second Year",
  },
  {
    value: "mca1",
    label: "MCA First Year",
  },
  {
    value: "mca2",
    label: "MCA Second Year",
  },
  {
    value: "phd",
    label: "PHD",
  },
];

export default function PersonalDetail({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal + Project Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomFormTextfield
            required
            id="firstName"
            name="firstName"
            label="First name"
            placeholder="for e.g. John"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                firstName: e.target.value,
              });
            }}
            value={formData.firstName}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomFormTextfield
            required
            id="lastName"
            name="lastName"
            label="Last name"
            placeholder="for e.g. Doe"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                lastName: e.target.value,
              });
            }}
            value={formData.lastName}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomFormTextfield
            id="yearOfStudy"
            select
            required
            labelId="yearOfStudyLabel"
            label="Year of Study"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="Year of Study"
            value={formData.yearOfStudy}
            onChange={(e) => {
              setFormData({
                ...formData,
                yearOfStudy: e.target.value,
              });
            }}
          >
            {years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomFormTextfield>
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomFormTextfield
            required
            id="projectTitle"
            name="projectTitle"
            label="Project Title"
            placeholder="for e.g. dgx-project, project-dgx-1"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="Project Title"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                projectTitle: e.target.value,
              });
            }}
            value={formData.projectTitle}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomFormTextfield
            required
            id="profInCharge"
            name="profInCharge"
            label="Professor In Charge"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="Prof Incharge"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                profInCharge: e.target.value,
              });
            }}
            value={formData.profInCharge}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomFormTextfield
            required
            id="fromdate"
            name="fromdate"
            label="From Date"
            placeholder="yyyy-mm-dd"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="From Date"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                fromdate: e.target.value,
              });
            }}
            value={formData.fromdate}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              required
              id="fromdate"
              name="fromdate"
              label="From date"
              // placeholder="mm/dd/yyyy"
              fullWidth
              onChange={(e) => {
                setFormData({
                  ...formData,
                  fromdate: e.target.value
                });
              }}
              value={formData.fromdate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormTextfield
            required
            id="todate"
            name="todate"
            label="To Date"
            placeholder="yyyy-mm-dd"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="To Date"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                todate: e.target.value,
              });
            }}
            value={formData.todate}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
