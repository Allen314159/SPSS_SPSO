import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

function PageSetting() {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <h2 className="header-title">HIỆU CHỈNH TRANG IN</h2>
      <Box component="form" sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
        <TextField required id="outlined-required" label="Học kỳ" />
        <TextField id="standard-number" label="Số trang in mặc định" type="number" InputLabelProps={{ shrink: true }} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select a date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </div>
  );
}

export default PageSetting;
