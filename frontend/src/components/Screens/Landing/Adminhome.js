
import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {} from '@mui/material'
import { Button } from 'react-bootstrap';
import Status from './status'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Adminheader from '../../header/Adminheader';




const Adminhome = () => {
  const[company,setCompany]=useState([])
   
  const fetchCompanyDetails=async()=>{
    const companyData = await axios.get('/api/admins/pending')
    setCompany(companyData.data)
    console.log('111');
    console.log(companyData);
  }

  useEffect(()=>{
    fetchCompanyDetails()
  },[])

 
  return (
    <div>
      {company.length > 0 ? (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">Company Details</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {company.map((row) => (
              <TableRow
                
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.product}</TableCell>
                <TableCell align="right">{row.companystatus}</TableCell>
                
                <TableCell align="right">
                  <Button variant="primary">
                    <Link to={`/viewCompanydt/${row._id}`} style={{textDecoration:'none',color:'white'}}>
                    open
                    </Link>
                    </Button>
                </TableCell>
               
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "red" }}>
            No Application Under Pending
          </h3>
        </div>
      )} 
       
      </div>
  )
}

export default Adminhome
