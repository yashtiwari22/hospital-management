import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import "./ViewDoctors.css";

function ViewDoctors() {
  const [doctor, setDoctor] = useState({
    name: "",
    age: "",
    specialization: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadDoctor();
  }, []);
  const loadDoctor = async () => {
    try {
      const res = await fetch("/doctorData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      let i = 0;
      while (data[i]._id != id) {
        i++;
      }
      setDoctor(data[i]);
      console.log(doctor);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <Paper
        elevation={3}
        className="doctor3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>
          DOCTOR <br />
          DATA{" "}
        </h1>

        <Link to="/admin" style={{ textDecoration: "none" }}>
          <Button variant="contained">Back To Admin Dashboard</Button>
        </Link>
      </Paper>

      <Paper elevation={3} className="ViewDoctor">
        <div className="id">
          <h1 style={{ margin: "10px", color: "rgba( 31, 38, 135, 0.37 )" }}>
            Doctor Id:{id}
          </h1>
        </div>
        <hr />
        <ul>
          <li>
            <strong>Name:</strong> {doctor.name}
          </li>
          <li>
            <strong>Age:</strong> {doctor.age}
          </li>
          <li>
            <strong>Specialization:</strong> {doctor.specialization}
          </li>
        </ul>
      </Paper>
    </div>
  );
}

export default ViewDoctors;
