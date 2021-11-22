import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router";
import "./AddDoctors.css";

function AddDocters({ data, setData }) {
  let history = useHistory();
  const [doctor, setDoctor] = useState({
    name: "",
    age: "",
    specialization: "",
  });

  const { name, age, specialization } = doctor;
  const onInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setData([...data, doctor]);
    console.log(data);
    history.push("/admin");
    console.log(doctor);
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
        <Paper elevation={3} className="doctor">
          <h1 style={{ color: "white" }} className="text6">
            ADD DOCTOR DATA{" "}
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
            height: 400,
          },
        }}
      >
        <Paper elevation={3}>
          <div className="datad1">
            <TextField
              style={{ margin: "20px" }}
              label="Name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              style={{ margin: "20px" }}
              label="Age"
              variant="outlined"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
            <TextField
              style={{ margin: "20px" }}
              label="Specialization"
              variant="outlined"
              name="specialization"
              value={specialization}
              onChange={(e) => onInputChange(e)}
            />
            <Button
              style={{ margin: "20px" }}
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

export default AddDocters;
