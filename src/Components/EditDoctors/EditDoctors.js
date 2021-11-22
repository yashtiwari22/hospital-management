import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import "./EditDoctors.css";

function EditDoctors() {
  const { id } = useParams();
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
  useEffect(() => {
    loadDoctor();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/Doctors/${id}`, doctor);
    history.push("/admin");
    console.log(doctor);
  };
  const loadDoctor = async () => {
    const result = await axios.get(`http://localhost:8000/Doctors/${id}`);
    setDoctor(result.data);
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
        <Paper elevation={3} className="doctor2">
          <h1 style={{ color: "white" }}>EDIT DOCTOR DATA </h1>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          "& > :not(style)": {
            m: 3,
            width: 750,
            height: 375,
          },
        }}
      >
        <Paper elevation={3}>
          <div className="datade">
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
              style={{ margin: "15px" }}
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
              Update
            </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
}

export default EditDoctors;
