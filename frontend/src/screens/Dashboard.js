import { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import StatBox from "../components/StatBox";
import { mockTransactions } from "../data/mockData";
import Copyright from '../components/Copyright'
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import PieChart from "../components/PieChart";


const Dashboard = () => {

  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUsers, setLoggedInUsers] = useState([]);
  const [memoryUsage, setMemoryUsage] = useState([]);
  const [diskOccupied, setDiskOccupied] = useState([]);

  var nums = [145.87, 223.8, 111.34, 45, 65.6, 88.0];
  var labels = [
    "pkkhushalani_b19",
    "sdpawar_b19",
    "cmbaghele_b19",
    "psthakare_b19",
    "abcat_b19",
    "dsghosh_b19"
  ];

  async function GAU() {
    var as = await axios
      .get("http://localhost:5000/api/admin/get-all-users")
      .then((res) => {
        setAllUsers(res.data);
      });
    return as;
  }

  async function LIU() {
    return await axios
      .get("http://localhost:5000/api/admin/get-logged-in-users")
      .then((res) => {
        setLoggedInUsers(res.data);
      });
  }

  async function MUPU() {
    return await axios
      .get("http://localhost:5000/api/admin/memory-usage-per-user")
      .then((res) => {
        setMemoryUsage(res.data);
        for (var i = 0; i < res.data.length; i++) {
          nums.push(res.data[i]["total_mem_usage"]);
          labels.push(res.data[i]["username"]);
        }
        console.log(nums, labels);
      });
  }

  async function DO() {
    return await axios
      .get("http://localhost:5000/api/admin/disk-occupied")
      .then((res) => {
        setDiskOccupied(res.data);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      GAU();
    }, 0);
    setTimeout(() => {
      LIU();
    }, 4000);
    setTimeout(() => {
      MUPU();
    }, 8000);
    setTimeout(() => {
      DO();
    }, 12000);
  }, []);


  return (
    <>
      <Box m="20px" className="title py-2">
        VM Usage Statistics
      </Box>
      <Box m="20px">
        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 4"
            backgroundColor="#353535"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/user-info" style={{ margin: 0 }}>
              <StatBox
                title={`${allUsers.length}`}
                subtitle="Created Users"
                icon={
                  <PeopleAltIcon sx={{ color: "white", fontSize: "36px" }} />
                }
              />
            </Link>
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="#353535"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={`${loggedInUsers.length}`}
              subtitle="Active Users"
              icon={<PersonIcon sx={{ color: "white", fontSize: "36px" }} />}
            />
          </Box>
          <Box
            gridColumn="span 4"
            backgroundColor="#353535"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="591.41 MB"
              subtitle="Memory in Use"
              icon={<StorageIcon sx={{ color: "white", fontSize: "36px" }} />}
            />
          </Box>

          {/* ROW 2 */}
          <Box gridColumn="span 8" gridRow="span 3" backgroundColor="#353535">
            <Box
              sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color="white"
                  position="absolute"
                  left="0"
                  marginLeft="30px">
                  Memory in Use
                </Typography>
                <Box sx={{ mt: 8 }}>
                  <PieChart labels={labels} data={nums} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 3"
            backgroundColor="#353535"
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={"4px solid #000000"}
              colors="white"
              p="15px"
            >
              <Typography color="white" variant="h5" fontWeight="600">
                Recent Access Requests
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={"4px solid #000000"}
                p="15px"
              >
                <Box>
                  <Typography color="#fdde6c" variant="h5">
                    {transaction.txId}
                  </Typography>
                  <Typography color="white">{transaction.user}</Typography>
                </Box>
                <Box color="white">{transaction.date}</Box>
                <Box backgroundColor="#fdde6c" p="5px 10px" borderRadius="4px">
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Copyright />
    </>
  );
};

export default Dashboard;
