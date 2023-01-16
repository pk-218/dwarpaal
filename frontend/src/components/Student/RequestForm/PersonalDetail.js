import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const FormTextfield = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: "#284b63",
      borderWidth: "2px",
    },
  },
});

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
          <FormTextfield
            required
            id="firstName"
            name="firstName"
            label="First name"
            InputLabelProps={{
              style: { color: '#284b63' },
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
          <FormTextfield
            required
            id="lastName"
            name="lastName"
            label="Last name"
            InputLabelProps={{
              style: { color: '#284b63' },
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
        <FormControl fullWidth>
        <InputLabel id="yearOfStudylabel">Year of Study</InputLabel>
        <Select
          labelId="yearOfStudylabel"
          id="yearOfStudy"
          value={formData.yearOfStudy}
          autoComplete="Year of Study"
          label="yearOfStudy"
          onChange={(e) => {
            setFormData({
              ...formData,
              yearOfStudy: e.target.value,
            });
          }}
        >
          <MenuItem value={"BTech First Year"} >BTech First Year</MenuItem>
          <MenuItem value={"BTech Second Year"} >BTech Second Year</MenuItem>
          <MenuItem value={"BTech Third Year"} >BTech Third Year</MenuItem>
          <MenuItem value={"BTech Final Year"} >BTech Final Year</MenuItem>
          <MenuItem value={"MTech First Year"} >MTech First Year</MenuItem>
          <MenuItem value={"MTech Second Year"} >MTech Second Year</MenuItem>
          <MenuItem value={"MCA First Year"} >MCA First Year</MenuItem>
          <MenuItem value={"MCA Second Year"} >MCA Second Year</MenuItem>
          <MenuItem value={"PHD"} >PHD</MenuItem>
          
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormTextfield
            required
            id="projectTitle"
            name="projectTitle"
            label="Project Title"
            InputLabelProps={{
              style: { color: '#284b63' },
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
        <Grid item xs={6}>
          <FormTextfield
            required
            id="profInCharge"
            name="profInCharge"
            label="Professor In Charge"
            InputLabelProps={{
              style: { color: '#284b63' },
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
          <FormTextfield
            required
            id="fromdate"
            name="fromdate"
            label="From Date"
            InputLabelProps={{
              style: { color: '#284b63' },
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
          

        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextfield
            required
            id="todate"
            name="todate"
            label="To Date"
            InputLabelProps={{
              style: { color: '#284b63' },
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
