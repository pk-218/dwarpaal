import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import { Button, Divider, Grid, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useState } from "react";

export default function MyConfirmation() {
  const studentName = "Shivam Pawar";
  const projectName = "BMAC";

  const [submitted, setSubmitted] = useState(false);

  function handleAccept() {
    setSubmitted(true);
  }

  return submitted ? (
    <>
      <Box
        display="flex"
        justifyContent="center"
        minHeight={500}
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4">
          You have successfully Accepted DGX Application for {studentName}.
        </Typography>
        <Divider />
        <Typography variant="subtitle" color="grey" sx={{ margin: 5 }}>
          Contact Admin for any change.
        </Typography>
      </Box>
    </>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card alignItems="center" sx={{ maxWidth: 1000, padding: 3 }}>
        <CardHeader
          title="DGX Application by Shivam Pawar"
          subheader="BTech Final Year"
        />
        <Divider />
        <CardContent>
          <Grid container minWidth={400}>
            <Grid item md={6}>
              Project Name: {projectName}
            </Grid>
            <Grid item md={6}>
              Domain: Cloud + Blockchain
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Box sx={{ marginTop: 3 }}>
            <Button
              sx={{ marginX: 5 }}
              aria-label="Decline"
              variant="outlined"
              color="error"
              endIcon={<ThumbDownOffAltIcon />}
            >
              Decline
            </Button>
            <Button
              sx={{ marginX: 5 }}
              aria-label="Accept"
              variant="contained"
              color="success"
              onClick={handleAccept}
              endIcon={<ThumbUpOffAltIcon />}
            >
              Accept
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
