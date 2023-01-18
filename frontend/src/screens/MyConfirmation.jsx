import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import { Button, Divider, Grid, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useState, useEffect } from "react";
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';



export default function MyConfirmation() {
  
  const [searchParams, _] = useSearchParams();

  const id = searchParams.get('id');
  const token = searchParams.get('token');

  const studentName = "Shivam Pawar"; 
  const projectName = "BMAC";
  const [formdata, setFormData] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(false);
  
  useEffect(()=>{
    axios.post("/faculty/getStudentForm",{id:id})
      .then((result)=>{
        console.log(result.data);
        setFormData(result.data.student);
      }).catch((err)=>{
          console.log("Error in fetching student - ",err);
      });
  },[]);
  function updateForm(acceptanceStatus = false){
    setSubmitted(true);
    axios.post("/faculty/updateFormStatus",{id:id,facultyToken:token,acceptanceStatus})
      .then((result)=>{
        console.log(result.data);
      }).catch((err)=>{
          console.log("Error in Updating student form - ",err);
      });
  }
  function handleAccept() {
    setStatus(true);
    updateForm(true);
  }
  function handleReject() {
    setStatus(false);
    updateForm(false);
  }
  
  return (
    submitted ?
    <>
    <Box
      display="flex"
      justifyContent="center"
      minHeight={500}
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4">
        You have {status?"Accepted":"Rejected"} DGX Application for {formdata.firstName} {formdata.lastName}.
      </Typography>
      <Divider/>
      <Typography variant="subtitle" color="grey" sx={{margin: 5 }}>
        Contact Admin for any change.
      </Typography>

    </Box>
    
    </>

    :
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card alignItems="center" sx={{ maxWidth: 1000, padding: 3}}>
      <CardHeader
        title={`DGX Application by ${formdata.firstName} ${formdata.lastName}`}
        subheader={`${formdata.yearOfStudy}`}
      />
      <Divider />
      <CardContent>
        <Grid container minWidth={400} >
          <Grid item md={6} >
            Project Name: {`${formdata.title}` || "BMAC"}
          </Grid>
          <Grid item md={6}>
            Domain: {`${formdata.domain}` || "Cloud + Blockchain"}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>

        <Box sx={{marginTop:3 }}>
        <Button
              sx={{marginX:5 }}
              aria-label="Decline"
              variant="outlined"
              color="error"
              onClick={handleReject}
              endIcon={<ThumbDownOffAltIcon />}
            >
              Decline
            </Button>
            <Button
            sx={{marginX:5 }}
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
