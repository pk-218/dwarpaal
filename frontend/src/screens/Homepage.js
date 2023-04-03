import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import axios from "axios";

const FormButtonContained = styled(Button)(() => ({
  backgroundColor: "#284b63",
  "&:hover": {
    backgroundColor: "#192f3e",
  },
}));

const Homepage = () => {
  const [accessRequestData, setAccessRequestData] = useState({});
  const hasSubmitted = JSON.parse(localStorage.getItem("hasSubmitted"));
  console.log("hasSubmitted", hasSubmitted);

  const getAccessRequestStatus = async (req, res) => {
    if (hasSubmitted) {
      const data = await axios.get("/home/access-request-data");
      console.log(data.data);
      setAccessRequestData(data.data);
    }
  };

  useEffect(() => getAccessRequestStatus, []);

  return (
    <>
      <Header />

      {hasSubmitted ? (
        <Container sx={{ marginTop: "15px" }}>
          <Card sx={{ minWidth: 275 }} elevation={3}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#2e7d32" gutterBottom>
                Access granted
              </Typography>
              <Typography variant="h5">
                {`You requested access for the DGX server on ${accessRequestData.createdAt}`}
              </Typography>
              <Typography
                sx={{ fontSize: 16, margin: "8px 0" }}
                color="text.secondary"
              >
                {`Project name: ${accessRequestData.title}`}
              </Typography>
              <Typography
                sx={{ fontSize: 16, margin: "8px 0" }}
                color="text.secondary"
              >
                {`Working under: ${accessRequestData.profInCharge}`}
              </Typography>
              <Typography
                sx={{ fontSize: 16, margin: "8px 0" }}
                color="text.secondary"
              >
                {`Period: ${accessRequestData.period}`}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      ) : (
        <Container sx={{ marginTop: "15px" }}>
          <Card sx={{ minWidth: 275 }} elevation={3}>
            <CardContent>
              <Typography
                variant="h5"
                color="text.secondary"
                textAlign="center"
                margin="8px 0"
              >
                No requests to show
              </Typography>
              <Typography
                sx={{ fontSize: 18, marginTop: 4 }}
                textAlign="center"
              >
                Start reaping the benefits of our high-performance DGX engine by
                connecting to the server. Request access now!
              </Typography>
            </CardContent>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to="/request-form">
                <FormButtonContained variant="contained" sx={{ my: 3 }}>
                  Request Access
                </FormButtonContained>
              </Link>
            </Box>
          </Card>
        </Container>
      )}
      <Copyright />
    </>
  );
};

export default Homepage;
