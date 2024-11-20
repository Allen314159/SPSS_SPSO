// TableInfoSy.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from '@mui/material';
import './tableInforSy.css';

const data = [
    { id: '00001', name: 'Samsung', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In trắng đen', status: 'Hoạt động' },
    { id: '00002', name: 'Canon', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Đang in' },
    { id: '00003', name: 'Pantum', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Vô hiệu' },
    { id: '00001', name: 'Samsung', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In trắng đen', status: 'Hoạt động' },
    { id: '00002', name: 'Canon', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Đang in' },
    { id: '00003', name: 'Pantum', location: 'Tầng 2, H6, cơ sở 2', date: '14 Feb 2019', type: 'In màu', status: 'Vô hiệu' }
];

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

const TableInforSy = () => (
  <TableContainer component={Paper}>
  <Table className="custom-table">
      <TableHead>
          <TableRow>
              <TableCell>MÃ SỐ</TableCell>
              <TableCell>TÊN MÁY</TableCell>
              <TableCell>ĐỊA ĐIỂM</TableCell>
              <TableCell>NGÀY NHẬP</TableCell>
              <TableCell>LOẠI MÁY</TableCell>
              <TableCell>TÌNH TRẠNG</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
          {data.map((item, index) => (
              <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                      {getStatusChip(item.status)}
                      <Button variant="text" color="error" onClick={() => console.log('Delete', item.id)}>
                          <i className="fas fa-times"></i>
                      </Button>
                  </TableCell>
              </TableRow>
          ))}
      </TableBody>
  </Table>
</TableContainer>
);

export default TableInforSy;