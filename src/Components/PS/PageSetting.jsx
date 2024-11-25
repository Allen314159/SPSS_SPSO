import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function PageSetting() {
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
            <TextField
              required
              id="outlined-required"
              label="Học kỳ"
            />
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
        </Box>
      </div>
    </>
  );
}

export default PageSetting;
