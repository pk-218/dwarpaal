import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Review({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom className="py-3">
        Permission Letter to access DGX Station Installed in CE & IT Dept, VJTI
      </Typography>

      <Typography>
        I, the undersigned, a student of CE & IT department,{" "}
        {formData.yearOfStudy} year and working under {formData.profInCharge}{" "}
        for the academic project would like to report access of DGX station
        installed in Department of Computer Engineering & IT, VJTI, Mumbai from
        Date {formData.fromdate} till {formData.todate}.
      </Typography>
    </React.Fragment>
  );
}
