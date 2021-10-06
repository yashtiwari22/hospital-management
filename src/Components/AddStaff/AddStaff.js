import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router';
import "./AddStaff.css";


function AddStaff() {
    let history=useHistory();
const [staff,setStaff]=useState({
    name:"",
    age:"",
    role:""
});

const {name,age,role}=staff;
const onInputChange=e=>{
    setStaff({...staff,[e.target.name]:e.target.value});
}

const onSubmit= async e=>{
    e.preventDefault();
    await axios.post("http://localhost:9000/Staffs",staff);
    history.push("/admin");
    console.log(staff);
}
    return (<>
        <Box
            sx={{
                
                display: 'flex',
                justifyContent:"center",
                
                '& > :not(style)': {
                    m: 3,
                    width: 1600,
                    height: 125,
                },
            }}
        >
        <Paper elevation={3} className="staff">
            <h1 style={{color:"white"} } className="text5">ADD STAFF DATA </h1>
            </Paper>
        </Box>
        
        <Box
            sx={{
                display: 'flex',
                justifyContent:"center",
                
                '& > :not(style)': {
                    m: 3,
                    width: 800,
                    height: 400,
                },
            }}
        >
            <Paper elevation={3} >
                <div className="data1">
                <TextField  style={{margin:"20px"}} label="Name" variant="outlined" name="name" value={name} onChange={e=>onInputChange(e)}/>
                <TextField  style={{margin:"20px"}} label="Age" variant="outlined" name="age" value={age} onChange={e=>onInputChange(e)}/>
                <TextField  style={{margin:"20px"}} label="Role" variant="outlined"name="role" value={role} onChange={e=>onInputChange(e)}/>
                <Button style={{margin:"20px"}}  variant="contained"  onClick={e=>onSubmit(e)}>Submit</Button>
                </div>
            </Paper>
        </Box>
        </>
    )
}

export default AddStaff;
