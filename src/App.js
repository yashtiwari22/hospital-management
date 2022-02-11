import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router-dom";
import Staff from "./Components/Staff/Staff";
import Admin from "./Components/Admin/Admin";
import Doctor from "./Components/Doctor/Doctor";
import AddUser from "./Components/AddUser/AddUser";
import EditUser from "./Components/EditUser/EditUser";
import View from "./Components/View/View";
import AddStaff from "./Components/AddStaff/AddStaff";
import ViewStaff from "./Components/ViewStaff/ViewStaff";
import EditStaff from "./Components/EditStaff/EditStaff";
import AddDoctors from "./Components/AddDoctors/AddDoctors";
import EditDoctors from "./Components/EditDoctors/EditDoctors";
import ViewDoctors from "./Components/ViewDoctors/ViewDoctors";
import ViewPatient from "./Components/ViewPatient/ViewPatient";
import Data from "./data";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [portal, setPortal] = React.useState("");
  const [patientData, setPatientData] = useState(Data.Patients);
  const [doctorData, setDoctorData] = useState(Data.Doctors);
  const [staffData, setStaffData] = useState(Data.Staffs);

  const LoginInf = (details) => {
    console.log(details);
    setUser({
      name: details.name,
      email: details.email,
    });
    if (user.name === "" && user.email === "") {
      setError("Details not match");
      console.log(error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login
            LoginInf={LoginInf}
            portal={portal}
            error={error}
            setPortal={setPortal}
          />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="/staff/add">
          <AddUser />
        </Route>
        <Route exact path="/staff/edit/:id">
          <EditUser />
        </Route>
        <Route exact path="/staff/:id">
          <View />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/admin/add">
          <AddStaff />
        </Route>
        <Route exact path="/admin/addd">
          <AddDoctors />
        </Route>
        <Route exact path="/admin/edit/:id">
          <EditStaff />
        </Route>
        <Route exact path="/admin/:id">
          <ViewStaff />
        </Route>
        <Route exact path="/admin/editd/:id">
          <EditDoctors />
        </Route>
        <Route exact path="/admin/d/:id">
          <ViewDoctors />
        </Route>
        <Route exact path="/doctor">
          <Doctor />
        </Route>
        <Route exact path="/doctor/:id">
          <ViewPatient />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
