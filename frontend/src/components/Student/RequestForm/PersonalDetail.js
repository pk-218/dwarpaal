import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function PersonalDetail({ formData, setFormData }) {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal + Project Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
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
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
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
          <TextField
            required
            id="yearOfStudy"
            name="year"
            label="Year of Study"
            fullWidth
            autoComplete="Year of Study"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                yearOfStudy: e.target.value,
              });
            }}
            value={formData.yearOfStudy}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="projectTitle"
            name="projectTitle"
            label="Project Title"
            fullWidth
            autoComplete="shipping address-line2"
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
        <Grid item xs={6}>
          <TextField
            required
            id="profInCharge"
            name="profInCharge"
            label="Professor In Charge"
            fullWidth
            autoComplete="shipping address-line2"
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
          <TextField
            required
            id="fromdate"
            name="fromdate"
            label="From Date"
            fullWidth
            autoComplete=""
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                fromdate: e.target.value,
              });
            }}
            value={formData.fromdate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="todate"
            name="todate"
            label="To Date"
            fullWidth
            autoComplete=""
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
