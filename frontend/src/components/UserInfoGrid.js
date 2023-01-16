import { Box, Button, Switch } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { mockDataContacts } from "../data/mockData";

const UserInfoGrid = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "registrarId", headerName: "Registration ID", flex: 0.2 },
    { field: "username", headerName: "Username", flex: 0.3 },
    { field: "validity", headerName: "Valid Until", type: "date", flex: 0.2 },
    {
      field: "revoke",
      headerName: "Revoke?",
      type: "text",
      flex: 0.2,
      sortable: false,
      renderCell: ({ row }) => <Switch onChange={yourActionFunction(row)} />, // we can take the row data and pass it on if needed for revoking access of the user
    },
  ];

  const yourActionFunction = (row) => {
    console.log("Button is functioning");
    // console.log(row)
    // revoke function to be called
  };

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#353535",
            borderBottom: "none",
            color: "white",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "284b63",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "aliceblue",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "red !important",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default UserInfoGrid;
