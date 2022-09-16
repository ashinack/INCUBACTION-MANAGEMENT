import React,{ useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Header from '../../header/Header';
import axios from 'axios'
import { ProgressBar } from 'react-bootstrap'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function CustomizedTables() {
      const [state,setState]=useState([])
      let userid=localStorage.getItem('userInfo')
      console.log(userid);

      const getUserRegCom=async(userid)=>{
        const getinfo=await axios.get(`/api/users/usercompany/${userid}`)
        setState(getinfo.data)
        console.log(getinfo);
      }

      useEffect(()=>{
         getUserRegCom(userid)  
      },[])


    return (
        <>
        <Header/>
        <Container>
        <TableContainer component={Paper} className='mt-5'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>SL NO</StyledTableCell>
                        <StyledTableCell align="right">COMPANY NAME</StyledTableCell>
                        <StyledTableCell align="center"><span>PENDING <a style={{ marginLeft: '3rem' }}></a>PROCESSING <a style={{ marginLeft: '4rem' }}>APPROVED</a></span></StyledTableCell>
    
                        <StyledTableCell align="left">SLOT STATUS</StyledTableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.map((state,index) => (
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row">
                               {index+1} 
                            </StyledTableCell>
                            <StyledTableCell align="right">{state.company}</StyledTableCell>
                            <StyledTableCell align="center">
                                {state.companystatus !=='rejected'?(
                                
                               
                            
                             <ProgressBar variant="success" now={
                                        state.companystatus === "pending"
                                          ? 20
                                          :state.companystatus === "processing"
                                          ? 50
                                          : 100
                                      }
                             />
                             ):(<span>Rejected</span>)}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                            {!state.bookingstatus?(
                                <span>slot not allocated</span>
                            )
                            :(<span>slot allocated</span>)}
                            </StyledTableCell>
                        </StyledTableRow>
                      ))} 
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
        </>
    );
}
