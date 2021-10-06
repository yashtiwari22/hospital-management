import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import "./View.css";

function View() {
    const [patient,setPatient]=useState({
        name:"",
        age:"",
        bloodgroup:"",
        symptoms:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8000/Patients/${id}`);
        setPatient(result.data);
    }
    return (
        <div className="container">
            
        
            <Paper elevation={3} className="patient3" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h1 style={{color:"white"}} className="text1">PATIENT <br/>DATA </h1>
            
            <Link to="/staff" style={{textDecoration:"none"}}>
            <Button variant="contained" className="button1">
                Back To Staff Dashboard
            </Button>
            </Link>
            </Paper>
        
        <Paper elevation={3} className="View">
            <div className="id">
            <h1
            style={{margin:"10px",color:"rgba( 31, 38, 135, 0.37 )"}}>Patient Id:{id}</h1>
            </div>
            <hr/>
            <ul>
                <li><strong>Name:</strong> {patient.name}</li>
                <li><strong>Age:</strong> {patient.age}</li>
                <li><strong>Blood Group:</strong> {patient.bloodgroup}</li>
                <li><strong>Symptoms:</strong> {patient.symptoms}</li>
            </ul>
          </Paper>
        </div>
    )
}

export default View
