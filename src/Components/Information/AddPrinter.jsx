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
import axios from "axios";

const statusOptions = ["Hoạt động", "Vô hiệu", "Đang in"];

const AddPrinterDialog = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState(statusOptions[0]);

  const handleAdd = async () => {
    if (!name || !location || !date || !type) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    const newPrinter = {
      id: Date.now().toString(), 
      name,
      location,
      date: new Date(date),
      type,
      status,
    };
    try {
      const response = await axios.post("http://localhost:8080/admin/insertNewPrinter",
        {},
        {
          params: {
            building: location,
            model: type,
            importDateString: date,
          },
        }
      );
      if (response.status === 200) {
        alert("Thêm máy in thành công!");
        onAdd(newPrinter);
        onClose();
      } else {
        alert("Thêm máy in thất bại!");
      }
    } catch (error) {
      console.error("Error adding printer:", error);
      alert("Có lỗi xảy ra!");
    }
    
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