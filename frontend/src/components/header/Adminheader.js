import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import "./Adminheader.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Adminheader = () => {
  return (
    <div>
          

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Incubation(Admin-panel)
            </Typography>
            <Button color="primary"><Link to='/admin' style={{ textDecoration: 'none',color:'white' }}>Logout</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Adminheader
