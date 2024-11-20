import React, { useState } from 'react';
import { TextField, MenuItem, Button, Box } from '@mui/material';

const locations = [
    'Tầng 2, H6, cơ sở 2',
    'Tầng 1, H6, cơ sở 1',
    'Tầng 3, H6, cơ sở 3',
];

const statuses = [
    'Hoạt động',
    'Đang in',
    'Vô hiệu',
];

const Filter = ({ onFilter }) => {
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilter = () => {
        onFilter({ location, status, searchTerm });
    };

    return (
        <Box display="flex" alignItems="center" mb={2}>
            <TextField
                select
                label="Địa điểm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                variant="outlined"
                size="small"
                style={{ marginRight: '10px' }}
            >
                <MenuItem value="">Tất cả</MenuItem>
                {locations.map((loc) => (
                    <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                ))}
            </TextField>

            <TextField
                select
                label="Trạng thái"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                variant="outlined"
                size="small"
                style={{ marginRight: '10px' }}
            >
                <MenuItem value="">Tất cả</MenuItem>
                {statuses.map((stat) => (
                    <MenuItem key={stat} value={stat}>{stat}</MenuItem>
                ))}
            </TextField>

            <TextField
                label="Tìm kiếm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                size="small"
                style={{ marginRight: '10px' }}
            />

            <Button variant="contained" color="primary" onClick={handleFilter}>
                Lọc
            </Button>
        </Box>
    );
};

export default Filter;