import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router";
import "./AddUser.css";

function AddUser() {
  let history = useHistory();
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    bloodgroup: "",
    symptoms: "",
  });

  const { name, age, bloodgroup, symptoms } = patient;
  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/Patients", patient);
    history.push("/staff");
    console.log(patient);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          "& > :not(style)": {
            m: 3,
            width: 1600,
            height: 125,
          },
        }}
      >
        <Paper elevation={3} className="patient">
          <h1 style={{ color: "white" }} className="text3">
            ADD PATIENT DATA{" "}
          </h1>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          "& > :not(style)": {
            m: 3,
            width: 800,
            height: 425,
          },
        }}
      >
        <Paper elevation={3}>
          <div className="data">
            <TextField
              style={{ margin: "15px" }}
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              style={{ margin: "15px" }}
              label="Age"
              variant="outlined"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              style={{ margin: "15px" }}
              label="Blood_group"
              variant="outlined"
              name="bloodgroup"
              value={bloodgroup}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              style={{ margin: "15px" }}
              label="Symptoms"
              variant="outlined"
              name="symptoms"
              value={symptoms}
              onChange={(e) => onInputChange(e)}
            />
            <Button
              style={{ margin: "15px" }}
              variant="contained"
              onClick={(e) => onSubmit(e)}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
}

export default AddUser;
