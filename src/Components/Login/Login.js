import React,{useState} from 'react';
import "./Login.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Particle from '../Particle/Particle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink } from 'react-router-dom';

function Login({LoginInf,error,portal,setPortal}) {
    const [details,setDetails]=useState({name:"",email:""});
    

    const handleChange = (event) => {
        setPortal(event.target.value);
      }; 

    return (<div className="App">
        <div style={{position:"absolute",maxHeight:'100vh',overflow:'hidden'}}>
          <Particle />
        </div>
        <div className="Login">
        <form >
            <div className="form-inner">
                <h2 style={{textAlign:"center"}}>Login</h2>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e=>setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                <Box sx={{ minWidth: 120 }}
                style={{marginTop:"20px" ,marginBottom:"15px" ,backgroundColor:"white",borderRadius:"8px"}}>
      <FormControl fullWidth  >
        <InputLabel id="demo-simple-select-label" >Portal</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={portal}
          label="Portal"
          onChange={handleChange}
          style={{borderRadius:"8px"}}
        >
          <MenuItem value="staff">Staff</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="doctor">Doctor</MenuItem>
        </Select>
      </FormControl>
    </Box>
                <NavLink to={"/"+portal}><button className="button" >Login</button></NavLink>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Login;
