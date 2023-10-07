import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' style={{flexGrow: 1}}>Crud Authentication</Typography>
                <Button color='inherit' component={Link} to="/">Home</Button>
                <Button color='inherit' component={Link} to="/adddata">Add Data</Button>
                <Button color='inherit' component={Link} to="/showdata">Show Student Data</Button>
            </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
