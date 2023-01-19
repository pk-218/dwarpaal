import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Switch } from "@mui/material";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import { mockDataContacts } from "../data/mockData";

axios.post("/api/forms/getforms").then((res) => {
  console.log("Res Data :", res.data);
});

const renderDetailsButton = (params) => {
  return (
    <strong>
      <Switch
        variant="contained"
        color={params.hasAccess ? "error" : "success"}
        size="small"
        onClick={() => {
          console.log("Heifja");
        }}
      >
        Revoke Access
      </Switch>
    </strong>
  );
};

const UserInfoGrid = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "registrarId", headerName: "Registration ID", flex: 0.2 },
    { field: "username", headerName: "Username", flex: 0.3 },
    { field: "validity", headerName: "Valid Until", type: "date", flex: 0.2 },
    {
      field: "Accessibility",
      headerName: "Accessibility",
      type: "boolean",
      flex: 0.2,
      renderCell: (params) => (
        <Switch onChange={yourActionFunction(params)} checked={params.value} />
      ), // we can take the row data and pass it on if needed for revoking access of the user
    },
  ];

  const yourActionFunction = (params) => {
    console.log("Button is functioning", params.value);
    // console.log(params.getValue(params.id, 'id') || '', params.value),
    // params.value== true ? params.value =false : params.value=true

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
