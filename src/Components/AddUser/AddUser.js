import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router";
import "./AddUser.css";
import axios from "../../axios";

function AddUser({ data, setData }) {
  let history = useHistory();
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    bloodgroup: "",
    symptoms: "",
    haemoglobin: "",
  });
  const { name, age, bloodgroup, symptoms, haemoglobin } = patient;
  const onInputChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, age, bloodgroup, symptoms, haemoglobin } = patient;

    try {
      const res = await fetch("/patientData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          bloodgroup,
          symptoms,
          haemoglobin,
        }),
      });

      console.log(res);
      history.push("/staff");
    } catch (err) {
      console.log(err);
    }
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
            <TextField
              style={{ margin: "15px" }}
              label="Haemoglobin"
              variant="outlined"
              name="haemoglobin"
              value={haemoglobin}
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
