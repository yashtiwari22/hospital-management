import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import "./ViewPatient.css";
import { Bar } from "react-chartjs-2";

function ViewPatient() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    bloodgroup: "",
    symptoms: "",
    haemoglobin: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/Patients/${id}`);
    setPatient(result.data);
  };
  return (
    <div className="container">
      <Paper
        elevation={3}
        className="patientd3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="text" style={{ color: "white" }}>
          PATIENT <br />
          DATA{" "}
        </h1>

        <Link to="/doctor" style={{ textDecoration: "none" }}>
          <Button variant="contained" className="button">
            Back To Doctor Dashboard
          </Button>
        </Link>
      </Paper>
      <div className="viewchart">
        <Paper elevation={3} className="Viewd">
          <div className="id">
            <h1 style={{ margin: "10px", color: "rgba( 31, 38, 135, 0.37 )" }}>
              Patient Id:{id}
            </h1>
          </div>
          <hr />
          <ul>
            <li>
              <strong>Name:</strong> {patient.name}
            </li>
            <li>
              <strong>Age:</strong> {patient.age}
            </li>
            <li>
              <strong>Blood Group:</strong> {patient.bloodgroup}
            </li>
            <li>
              <strong>Symptoms:</strong> {patient.symptoms}
            </li>
          </ul>
        </Paper>

        <Paper elevation={3} className="Viewd">
          <div>
            <Bar
              data={{
                labels: ["Haemoglobin"],
                datasets: [
                  {
                    label: "Patient Data",
                    barThickness: 100,
                    data: [patient.haemoglobin],
                    backgroundColor: ["rgba(255, 99, 132)"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 2,
                  },
                  {
                    label: "Healthy Patient Data",
                    data: [14],
                    barThickness: 100,
                    backgroundColor: ["rgb(66, 245, 155)"],
                    borderColor: ["rgba(66, 245, 155, 1)"],
                    borderWidth: 2,
                  },
                ],
              }}
              width={400}
              height={400}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default ViewPatient;
