import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import "./EditStaff.css";

function EditStaff() {
  const { id } = useParams();
  let history = useHistory();
  const [staff, setStaff] = useState({
    name: "",
    age: "",
    role: "",
  });

  const { name, age, role } = staff;
  const onInputChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadStaff();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/Staffs/${id}`, staff);
    history.push("/admin");
    console.log(staff);
  };
  const loadStaff = async () => {
    const result = await axios.get(`http://localhost:8000/Staffs/${id}`);
    setStaff(result.data);
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
        <Paper elevation={3} className="staff2">
          <h1 style={{ color: "white" }}>EDIT STAFF DATA </h1>
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
          <div className="datae">
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
              label="Role"
              variant="outlined"
              name="role"
              value={role}
              onChange={(e) => onInputChange(e)}
            />
            <Button
              style={{ margin: "15px" }}
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

export default EditStaff;
