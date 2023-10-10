import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AddData from "../pages/AddData";
import ShowData from "../pages/ShowData";
import Login from "../Authentication/Login";
import EditDeleteData from "../pages/EditDeleteData";
import ForgetPassword from "../Authentication/ForgetPassword";
import Register from "../Authentication/Register";
import EditUser from "../pages/EditUser";
import Profile from "../pages/Profile";

const Routing = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adddata" element={<AddData />} />
          <Route path="showdata" element={<ShowData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editdeletedata" element={<EditDeleteData />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edituser/:_id" element={<EditUser />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
