import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';





export default function BasicTable() {
    const [process, setProcess] = useState([])
    const processStatus = async () => {
        const processstatus = await axios.get('/api/admins/process')
        setProcess(processstatus.data)
        console.log(processstatus);
    }
    useEffect(() => {
        processStatus()
    }, [])

    return (
        <>
        {process?
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Company Name</TableCell>
                        <TableCell align="right">Company Details</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {process.map((process) => (
                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{process.company}</TableCell>
                            <TableCell align="right">{process.product}</TableCell>
                            <TableCell align="right">{process.companystatus}</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
                : (
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ color: "red" }}>No Applications under processing</h3>
                    </div>
                ) }
        </>
    );
}
