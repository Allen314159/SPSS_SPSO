import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Chip, TextField, Box } from "@mui/material";

const getStatusChip = (status) => {
  switch (status) {
    case "Hoạt động":
      return <Chip label={status} color="success" />;
    case "Vô hiệu":
      return <Chip label={status} color="error" />;
    case "Đang in":
      return <Chip label={status} color="info" />;
    default:
      return null;
  }
};

const columns = [
  {
    field: "id",
    headerName: "MÃ SỐ",
    width: 70,
    headerClassName: "header-column",
    filterable: true,
  },
  {
    field: "name",
    headerName: "TÊN MÁY IN",
    width: 130,
    headerClassName: "header-column",
    filterable: true,
  },
  {
    field: "location",
    headerName: "ĐỊA ĐIỂM",
    width: 130,
    headerClassName: "header-column",
    filterable: true,
  },
  {
    field: "date",
    headerName: "NGÀY BẮT ĐẦU HOẠT ĐỘNG",
    type: "date",
    width: 250,
    headerClassName: "header-column",
    filterable: true,
  },
  {
    field: "type",
    headerName: "LOẠI MÁY",
    width: 130,
    headerClassName: "header-column",
    filterable: true,
  },
  {
    field: "status",
    headerName: "TÌNH TRẠNG",
    width: 90,
    headerClassName: "header-column",
    renderCell: (params) => getStatusChip(params.value),
    filterable: true,
  },
];

const data = [
  {
    id: "00001",
    name: "Samsung",
    location: "Tầng 2, H6, cơ sở 2",
    date: new Date(2020, 0, 1),
    type: "In trắng đen",
    status: "Hoạt động",
  },
  {
    id: "00002",
    name: "Canon",
    location: "Tầng 2, H6, cơ sở 2",
    date: new Date(2020, 0, 1),
    type: "In màu",
    status: "Đang in",
  },
  {
    id: "00003",
    name: "Pantum",
    location: "Tầng 2, H6, cơ sở 2",
    date: new Date(2020, 0, 1),
    type: "In màu",
    status: "Vô hiệu",
  },
  {
    id: "00001",
    name: "Samsung",
    location: "Tầng 2, H6, cơ sở 2",
    date: new Date(2020, 0, 1),
    type: "In trắng đen",
    status: "Hoạt động",
  },
  {
    id: "00002",
    name: "Canon",
    location: "Tầng 2, H6, cơ sở 2",
    date: new Date(2020, 0, 1),
    type: "In màu",
    status: "Đang in",
  },
  {
    id: "00003",
    name: "Pantum",
    location: "Tầng 2, H6, cơ sở 2",
    date: new Date(2020, 0, 1),
    type: "In màu",
    status: "Vô hiệu",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [filterText, setFilterText] = React.useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <Paper sx={{
        height: 600,
        width: '100%',
        '& .header-column': {
          backgroundColor: "#83CBEF70",
          fontWeight: '800',
        },
        '& .MuiDataGrid-row': {
          backgroundColor: "#C0E8F938",
          '&:hover': {
            backgroundColor: "#e0e0e0",
          },
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <TextField
          label="Tìm kiếm"
          variant="outlined"
          fullWidth
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Box>
      <DataGrid
        rows={filteredData}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
      />
    </Paper>
  );
}