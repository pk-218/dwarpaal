import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import StatBox from "../components/StatBox";
import { mockTransactions } from "../data/mockData";
import LineChart from "../components/LineChart";
import { Link } from "react-router-dom";

const Dashboard = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    return (
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
                    <Link to='/user-info' style={{ margin: 0 }}>
                        <StatBox
                            title="15"
                            subtitle="Users in System"
                            icon={
                                <PeopleAltIcon
                                    sx={{ color: 'white', fontSize: "36px" }}
                                />
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
                        title="7"
                        subtitle="Users currently logged in"
                        icon={
                            <PersonIcon
                                sx={{ color: 'white', fontSize: "36px" }}
                            />
                        }
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
                        title="15 GB"
                        subtitle="Memory in Use"
                        icon={
                            <StorageIcon
                                sx={{ color: 'white', fontSize: "36px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor="#353535"
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color="white"
                            >
                                Memory in Use
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                color="#fdde6c"
                            >
                                15 GB
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="240px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor="#353535"
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={'4px solid #000000'}
                        colors="white"
                        p="15px"
                    >
                        <Typography color="white" variant="h5" fontWeight="600">
                            Recent Requests
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={'4px solid #000000'}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color="#fdde6c"
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color="white">
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color="white">{transaction.date}</Box>
                            <Box
                                backgroundColor="#fdde6c"
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;