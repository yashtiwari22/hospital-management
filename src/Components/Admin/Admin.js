import React, { useState, useEffect } from "react";
import "./Admin.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useParams } from 'react-router';

const useStyles = makeStyles({
  tab: {
    color: "#fff",
    textDecoration: "none",
    margin: "5px",
  },
});
function Admin() {
  // const {id} =useParams();
  const classes = useStyles();
  const [staffs, setStaffs] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    console.log("hi staff");
    loadStaffs();
  }, []);
  useEffect(() => {
    console.log("hi doctor");
    loadDoctors();
  }, []);
  const loadStaffs = async () => {
    const result = await axios.get("http://localhost:8000/Staffs");
    setStaffs(result.data);
  };
  const loadDoctors = async () => {
    const result = await axios.get("http://localhost:8000/Doctors");
    setDoctors(result.data);
  };
  const onDeleteD = async (id) => {
    await axios.delete(`http://localhost:8000/Doctors/${id}`);
    loadDoctors();
  };
  const onDeleteS = async (id) => {
    await axios.delete(`http://localhost:8000
    /Staffs/${id}`);
    loadStaffs();
  };

  return (
    <>
      <div className="admin">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",

            "& > :not(style)": {
              width: 1600,
              height: 175,
            },
          }}
        >
          <Paper elevation={4} style={{ margin: "20px" }} className="Admindash">
            <div className="Admin">
              <NavLink className={classes.tab} to="admin" exact>
                <h1 className="text4">
                  ADMIN <br /> DASHBOARD
                </h1>
              </NavLink>
              <div className="Links">
                <NavLink className={classes.tab} to="/admin/add" exact>
                  <Button variant="contained">Add Staff</Button>
                </NavLink>
                <NavLink className={classes.tab} to="/admin/addd" exact>
                  <Button variant="contained" style={{ margin: "2px" }}>
                    Add Docter
                  </Button>
                </NavLink>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Button
                    style={{ marginRight: "15px" }}
                    variant="contained"
                    color="error"
                  >
                    Log Out
                  </Button>
                </NavLink>
              </div>
            </div>
          </Paper>
        </Box>
        <div className="Table">
          <TableContainer component={Paper} style={{ margin: "20px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="Tablerow">
                  <TableCell style={{ color: "white" }}>id</TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Staff Name
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Age
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Role
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="center">
                    Options
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffs.map((staff, index) => (
                  <TableRow
                    key={staff.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{staff.name}</TableCell>
                    <TableCell align="right">{staff.age}</TableCell>
                    <TableCell align="right">{staff.role}</TableCell>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Link
                        to={`/admin/${staff.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={{ marginRight: "15px" }}
                          variant="contained"
                        >
                          View
                        </Button>
                      </Link>
                      <Link
                        to={`/admin/edit/${staff.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={{ marginRight: "15px" }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => onDeleteS(staff.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} style={{ margin: "20px" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="Tablerow">
                  <TableCell style={{ color: "white" }}>id</TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Doctor Name
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Age
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Specialization
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="center">
                    Options
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctors.map((doctor, index) => (
                  <TableRow
                    key={doctor.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{doctor.name}</TableCell>
                    <TableCell align="right">{doctor.age}</TableCell>
                    <TableCell align="right">{doctor.specialization}</TableCell>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Link
                        to={`/admin/d/${doctor.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={{ marginRight: "15px" }}
                          variant="contained"
                        >
                          View
                        </Button>
                      </Link>
                      <Link
                        to={`/admin/editd/${doctor.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={{ marginRight: "15px" }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => onDeleteD(doctor.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Admin;
