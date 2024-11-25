import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function PageSetting() {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <h2 className="header-title">HIỆU CHỈNH TRANG IN</h2>
      <div className="page">
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="outlined-required" label="Học kỳ" />
            <TextField
              id="standard-number"
              label="Số trang in mặc định"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
        </Box>
      </div>
    </>
  );
}

export default PageSetting;
