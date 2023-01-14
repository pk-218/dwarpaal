import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        System Requirements
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="reqGPU"
            label="No of GPU Required"
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
          <TextField

            required
            id="reqGPUMem"
            label="GPU Memory Required"
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
          <TextField
            required
            id="reqCPU"
            label="No of CPUs Required"
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
          <TextField
            required
            id="reqCUDACores"
            label="No of  CUDA cores Required"
            fullWidth
            type="number"
            autoComplete="cc-name"
            variant="outlined"
            onChange={(e) => {
              setFormData({
                ...formData,
                reqCUDACores: e.target.value,
              });
            }}
            value={formData.reqCUDACores}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="reqTensorCores"
            label="No of Tensor Cores"
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
          <TextField
            required
            id="reqSysMem"
            label="System Memory Required"
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
          <TextField
            required
            id="reqOS"
            label="Operating System Required"
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
          <TextField
            required
            id="OSVersion"
            label="Version No of Operating System"
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
          <TextField
            required
            id="ContainerVersions"
            label="Containers Required"
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
          <TextField
            required
            id="reqContainers"
            label="Version No of Container"
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
          <TextField
            required
            id="DGXDrivers"
            label="DGX drivers required to install software"
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
