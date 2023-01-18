import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Button, Divider, Grid } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ConfirmationCard() {
 

  return (
    <Card alignItems="center" sx={{ maxWidth: 1000, padding: 3}}>
      <CardHeader
        title="DGX Application by Shivam Pawar"
        subheader="BTech Final Year"
      />
      <Divider />
      <CardContent>
        <Grid container minWidth={400} >
          <Grid item md={6} >
            Project Name: BMAC
          </Grid>
          <Grid item md={6}>
            Domain: Cloud + Blockchain
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
              endIcon={<ThumbDownOffAltIcon />}
            >
              Decline
            </Button>
            <Button
            sx={{marginX:5 }}
              aria-label="Accept"
              variant="contained"
              color="success"
              endIcon={<ThumbUpOffAltIcon />}
            >
              Accept
            </Button>
        </Box>
      </CardActions>
      
    </Card>
  );
}

export default function MyConfirmation() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <ConfirmationCard />
    </Box>
  );
}
