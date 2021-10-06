import React, { useState, useEffect } from 'react';
import './Doctor.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { gradient } from 'tsparticles';


const useStyles = makeStyles({
  tab: {
    color: '#fff',
    textDecoration: 'none'
  }
})
function Doctor() {
  const classes = useStyles();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    console.log("hi patient");
    loadPatients();
  }, []);
  const loadPatients = async ()=>{
      const result= await axios.get("http://localhost:8000/Patients");
      setPatients(result.data);
  }
  
  
  return (
    <>
    <div className="ddoctor" >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',

          '& > :not(style)': {
            
            width: 1600,
            height: 125,

          },

        }}
      >
        <Paper elevation={4} style={{margin:"20px"}} className="ddoctordash">
          <div className="Ddoctor">
            <NavLink className={classes.tab} to="doctor" exact>
              <h1>DOCTOR <br/> DASHBOARD</h1>
            </NavLink>
            <NavLink to="/" style={{textDecoration:"none"}}><Button style={{marginRight:"15px"}} variant="contained" color="error">Log Out</Button></NavLink>
          </div>
          
        </Paper>
      </Box>
    <div className="tabled">
    <TableContainer component={Paper} style={{margin:"20px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tabledrow">
            
            <TableCell style={{color:"white"}}>id</TableCell>
            <TableCell style={{color:"white"}} align="right">Name</TableCell>
            <TableCell style={{color:"white"}} align="right">Age</TableCell>
            <TableCell style={{color:"white"}} align="right">Blood-group</TableCell>
            <TableCell style={{color:"white"}} align="right">Symptoms</TableCell>
            <TableCell style={{color:"white"}} align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient,index) => (
            
            <TableRow
              key={patient.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{patient.name}</TableCell>
              <TableCell align="right">{patient.age}</TableCell>
              <TableCell align="right">{patient.bloodgroup}</TableCell>
              <TableCell align="right">{patient.symptoms}</TableCell>
              <div style={{display:"flex",justifyContent:"center"}}>
              <Link to={`/doctor/${patient.id}`} style={{textDecoration:"none"}}><Button style={{marginRight:"15px"}} variant="contained">View</Button></Link>
              {/* <Link to={`/staff/edit/${patient.id}`} style={{textDecoration:"none"}}><Button style={{marginRight:"15px"}} variant="contained" >Edit</Button></Link> */}
              
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </>

  )
}

export default Doctor
