import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const FormTextfield = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#284b63",
      borderWidth: "2px",
    },
  },
});

export default function PaymentForm({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        System Requirements
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            type="number"
            id="reqGPU"
            label="No of GPU Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            type="number"
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqGPU: e.target.value,
              });
            }}
            value={formData.reqGPU}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            type="number"
            id="reqGPUMem"
            label="GPU Memory Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqGPUMem: e.target.value,
              });
            }}
            value={formData.reqGPUMem}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            id="reqCPU"
            type="number"
            label="No of CPUs Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            type="number"
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqCPU: e.target.value,
              });
            }}
            value={formData.reqCPU}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            type="number"
            id="reqCUDACores"
            label="No of  CUDA cores Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            type="number"
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqCudaCores: e.target.value,
              });
            }}
            value={formData.reqCudaCores}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            type="number"
            id="reqTensorCores"
            label="No of Tensor Cores"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            type="number"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqTensorCores: e.target.value,
              });
            }}
            value={formData.reqTensorCores}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            type="number"
            id="reqSysMem"
            label="System Memory Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            type="number"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqSysMem: e.target.value,
              });
            }}
            value={formData.reqSysMem}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            id="reqOS"
            label="Operating System Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqOS: e.target.value,
              });
            }}
            value={formData.reqOS}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            id="OSVersion"
            label="Version No of Operating System"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                OSVersion: e.target.value,
              });
            }}
            value={formData.OSVersion}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            id="ContainerVersions"
            label="Containers Required"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                ContainerVersions: e.target.value,
              });
            }}
            value={formData.ContainerVersions}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormTextfield
            required
            id="reqContainers"
            label="Version No of Container"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqContainers: e.target.value,
              });
            }}
            value={formData.reqContainers}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <FormTextfield
            required
            id="DGXDrivers"
            label="DGX drivers required to install software"
            InputLabelProps={{
              style: { color: "#284b63" },
            }}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                DGXDrivers: e.target.value,
              });
            }}
            value={formData.DGXDrivers}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
