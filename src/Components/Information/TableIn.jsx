import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Paper, Chip} from '@mui/material';

const getStatusChip = (status) => {
    switch (status) {
        case 'Hoạt động':
            return <Chip label={status} color="success" />;
        case 'Vô hiệu':
            return <Chip label={status} color="error" />;
        case 'Đang in':
            return <Chip label={status} color="info" />;
        default:
            return null;
    }
  };


const columns = [
  { field: 'id', headerName: 'MÃ SỐ', width: 70 },
  { field: 'name', headerName: 'TÊN MÁY IN', width: 130 },
  { field: 'location', headerName: 'ĐỊA ĐIỂM', width: 130 },
  { 
    field: 'date', 
    headerName: 'NGÀY BẮT ĐẦU HOẠT ĐỘNG', 
    width: 250,
  },
  { field: 'type', headerName: 'LOẠI MÁY', width: 130 },
  { field: 'status', headerName: 'TÌNH TRẠNG', width: 90 },
];

const data = [
    { id: '00001', name: 'Samsung', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In trắng đen', status: 'Hoạt động' },
    { id: '00002', name: 'Canon', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Đang in' },
    { id: '00003', name: 'Pantum', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Vô hiệu' },
    { id: '00001', name: 'Samsung', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In trắng đen', status: 'Hoạt động' },
    { id: '00002', name: 'Canon', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Đang in' },
    { id: '00003', name: 'Pantum', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Vô hiệu' }
];

const paginationModel = { page: 0, pageSize: 5 };


export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}