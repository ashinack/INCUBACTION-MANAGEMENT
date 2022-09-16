import  React,{ useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import { Link } from 'react-router-dom';





export default function BasicTable() {
    const [approve,setApprove]=useState([])
    const approveStatus=async()=>{
        const approvestatus = await axios.get('/api/admins/approved')
        setApprove(approvestatus.data)
        console.log(approvestatus);
    }
    useEffect(()=>{
        approveStatus()
    },[])

    return (
        <>
         {approve.length>0?
    
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
                    {approve.map((approve) => (
                        <TableRow
                           
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           
                            <TableCell align="right">{approve.company}</TableCell>
                            <TableCell align="right">{approve.product}</TableCell>
                            <TableCell align="right">{approve.companystatus}</TableCell>
                            <TableCell align="right">
                                {!approve.bookingstatus?(

                                <Link to='/slots' style={{ textDecoration: 'none' }}>Allocate Slot</Link>
                               ):(<span>slot allocated</span>) }
                            </TableCell>
                        </TableRow>
                     ))} 
                </TableBody>
            </Table>
        </TableContainer>
                : (
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ color: "red" }}>No Approved Applications</h3>
                    </div>
                ) }
        </>
    );
}
