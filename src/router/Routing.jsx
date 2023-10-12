import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
  function ProtectedRoute({ children }) {
    const token =localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  // Public Route
  const Public_Route = [
    {
      path: "/",
      component: <Home/>
    },
    {
      path: "/adddata",
      component: <AddData/>
    },
    {
      path: "/showdata",
      component: <ShowData/>
    },
    {
      path: "/login",
      component: <Login/>
    },
    {
      path: "/register",
      component: <Register/>
    },
    {
      path: "/forgetpassword",
      component: <ForgetPassword/>
    }
  ]


  // Private Route
  const PrivateRoute = [
      {
        path: "/profile",
        component: <Profile/>
      },
      {
        path: "/editdeletedata",
        component: <EditDeleteData/>
      },
      {
        path: "/edituser/:id",
        component: <EditUser/>
      }
  ]


  return (
    <>
      <Navbar />
      <Routes>
        {
          Public_Route?.map((route, key)=>{
            return (
              <>
                <Route
                key={key+1}
                path={route.path}
                element={route.component}
                />
              </>
            )
          })
        } 
        {
          PrivateRoute?.map((route, key)=>{
            return (
              <>
                <Route
                key={key+1}
                path={route.path}
                element={<ProtectedRoute>{route.component}</ProtectedRoute>}
                />
              </>
            )
          })
        }     
      </Routes>
    </>
  );

};

export default Routing;
