import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const statusOptions = ["Hoạt động", "Vô hiệu", "Đang in"];

const AddPrinterDialog = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState(statusOptions[0]);

  const handleAdd = () => {
    const newPrinter = {
      id: Date.now().toString(), // Sử dụng timestamp làm ID duy nhất
      name,
      location,
      date: new Date(date),
      type,
      status,
    };
    onAdd(newPrinter);
    onClose(); // Đóng cửa sổ sau khi thêm
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Thêm máy in</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Tên máy"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Địa điểm"
          fullWidth
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Ngày hoạt động"
          type="date"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Loại máy"
          fullWidth
          variant="outlined"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          select
          label="Trạng thái"
          margin="dense"
          fullWidth
          variant="outlined"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Hủy</Button>
        <Button onClick={handleAdd}>Xác nhận</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPrinterDialog;