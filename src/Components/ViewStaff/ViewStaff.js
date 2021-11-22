import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import "./ViewStaff.css";

function ViewStaff() {
  const [staff, setStaff] = useState({
    name: "",
    age: "",
    role: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadStaff();
  }, []);
  const loadStaff = async () => {
    const result = await axios.get(`http://localhost:8000/Staffs/${id}`);
    setStaff(result.data);
  };
  return (
    <div className="container">
      <Paper
        elevation={3}
        className="staff3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>
          STAFF <br />
          DATA{" "}
        </h1>

        <Link to="/admin" style={{ textDecoration: "none" }}>
          <Button variant="contained">Back To Admin Dashboard</Button>
        </Link>
      </Paper>

      <Paper elevation={3} className="ViewStaff">
        <div className="id">
          <h1 style={{ margin: "10px", color: "rgba( 31, 38, 135, 0.37 )" }}>
            Staff Id:{id}
          </h1>
        </div>
        <hr />
        <ul>
          <li>
            <strong>Name:</strong> {staff.name}
          </li>
          <li>
            <strong>Age:</strong> {staff.age}
          </li>
          <li>
            <strong>Role:</strong> {staff.role}
          </li>
        </ul>
      </Paper>
    </div>
  );
}

export default ViewStaff;
