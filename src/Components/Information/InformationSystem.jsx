import React, { useState } from "react";
import TableIn from "./TableIn";
import AddPrinterDialog from "./AddPrinter";
import { Button } from "@mui/material";

const InformationSystem = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddPrinter = (newPrinter) => {
    console.log(newPrinter);
    setOpenDialog(false);
  };
  return (
    <>
      <h2 className="header-title">THÔNG TIN HỆ THỐNG</h2>
      <br />
      <Button variant="contained" onClick={() => setOpenDialog(true)}>
        Thêm máy in
      </Button>
      <AddPrinterDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onAdd={handleAddPrinter}
      />

      <TableIn />
    </>
  );
};

export default InformationSystem;
