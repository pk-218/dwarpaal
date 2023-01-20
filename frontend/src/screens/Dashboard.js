import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import StatBox from "../components/StatBox";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUsers, setLoggedInUsers] = useState([]);
  const [memoryUsage, setMemoryUsage] = useState([]);
  const [diskOccupied, setDiskOccupied] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  var nums = [145.87, 223.8, 111.34, 45, 65.6];
  var labels = [
    "pkkhushalani_b19",
    "sdpawar_b19",
    "cmbaghele_b19",
    "psthakare_b19",
    "abcat_b19",
    "dsghosh_b19",
  ];

  useEffect(() => {
    getPendingAccessRequests();
  }, []);

  async function getPendingAccessRequests() {
    const res = await axios.get("/admin/pending-requests");
    const unapprovedUsersNew = [];
    console.log(unapprovedUsersNew);
    unapprovedUsersNew.push({
      id: "191080040",
      email: "pkkhushalani_b19",
      to_date: "2023-02-20",
      is_approved: false,
    });
    // const unapprovedUsersNew = unapprovedUsers.map((user, _) => {
    //   return {
    //     ...user,
    //     to_date: getDate(user.to_date),
    //     email: getUsername(user.email),
    //   };
    // });
    setPendingRequests(unapprovedUsersNew);
    console.log(unapprovedUsersNew);
  }

  const getDate = (utcDateString) => {
    const [date, _] = utcDateString.split("T");
    console.log(date);
    return date;
  };

  const getUsername = (email) => {
    const [username, _] = email.split("@");
    console.log(username);
    return username;
  };

  async function getAllUsers() {
    const users = await axios.get("/admin/get-all-users");
    setAllUsers(users.data);
  }

  async function getLoggedInUsers() {
    const users = await axios.get("/admin/get-logged-in-users");
    setLoggedInUsers(users.data);
  }

  // async function getMemoryUsagePerUser() {
  //   const memoryUsage = await axios.get("/admin/memory-usage-per-user");
  //   for (var i = 0; i < memoryUsage.data.length; i++) {
  //     nums.push(res.data[i]["total_mem_usage"]);
  //     labels.push(res.data[i]["username"]);
  //   }
  //   console.log(nums, labels);
  //   setMemoryUsage(memoryUsage.data);
  // }

  async function getDiskOccupied() {
    await axios.get("/admin/disk-occupied").then((res) => {
      setDiskOccupied(res.data);
    });
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     getAllUsers();
  //   }, 0);
  //   setTimeout(() => {
  //     getLoggedInUsers();
  //   }, 4000);
  //   setTimeout(() => {
  //     getMemoryUsagePerUser();
  //   }, 8000);
  //   setTimeout(() => {
  //     getDiskOccupied();
  //   }, 12000);
  // }, []);
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color="white"
                  position="absolute"
                  left="0"
                  marginLeft="30px"
                >
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
            {pendingRequests.map((request, i) => (
              <Box
                key={`${request.id}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={"4px solid #000000"}
                p="15px"
              >
                <Box>
                  <Typography color="#fdde6c" variant="h5" fontWeight="600">
                    {request.id}
                  </Typography>
                  <Typography color="white">{request.email}</Typography>
                </Box>
                <Box color="white">{request.to_date}</Box>
                <Button
                  className="py-2 px-4"
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#fdde6c",
                    color: "black",
                  }}
                >
                  Grant
                </Button>
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
