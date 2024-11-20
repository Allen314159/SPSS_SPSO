// TableInfoSy.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from '@mui/material';
import './tableHis.css';

const data = [
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Đang đợi'},
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Đang đợi'},
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Đang đợi'},
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Hoàn thành'},
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Hoàn thành'},
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Hoàn thành'},
    {date: '20/10/2021',idp: 'H6200',namep: 'Canon',  ids: '2213456',name: 'Nguyễn Văn A', page: '34'  ,status: 'Hoàn thành'}
];

const getStatusChip = (status) => {
  switch (status) {
      case 'Hoàn thành':
          return <Chip label={status} color="success" />;
      case 'Đang đợi':
          return <Chip label={status} color="info" />;
      default:
          return null;
  }
};

const tableHis = () => (
  <TableContainer component={Paper}>
  <Table className="custom-table">
      <TableHead>
          <TableRow>
              <TableCell>THỜI GIAN</TableCell>
              <TableCell>MÃ SỐ MÁY IN</TableCell>
              <TableCell>TÊN MÁY IN</TableCell>
              <TableCell>MSSV</TableCell>
              <TableCell>TÊN SINH VIÊN</TableCell>
              <TableCell>SỐ TRANG</TableCell>
              <TableCell>TRẠNG THÁI</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
          {data.map((item, index) => (
              <TableRow key={index}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.idp}</TableCell>
                  <TableCell>{item.namep}</TableCell>
                  <TableCell>{item.ids}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.page}</TableCell>
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

export default tableHis;