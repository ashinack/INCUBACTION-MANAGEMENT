import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';

export default function BasicSelect() {
    const {companyid}=useParams()
    console.log(88);
    console.log(companyid);
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Approve</MenuItem>
                    <MenuItem value={20}>Rejected</MenuItem>
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}