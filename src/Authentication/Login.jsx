import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { useAuth } from "../context/Context";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        {
          email,
          password,
        }
      );
      if (response && response.data.success) {
        toast.success(response.data && response.data.message);
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        console.log("data", response.data);
        navigate("/");
        localStorage.setItem("auth", JSON.stringify(response.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something Wrong");
    }
  };

  return (
    <>
        <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>Login Form</h1>
          <form onSubmit={handleSubmit}>
            < FormGroup
              sx={{
                width: "50%",
                margin: "auto",
                padding: 10,
                boxShadow: "0px 0px 30px rgba(0,0,0,1)",
              }}
            >
              <FormControl sx={{ paddingBottom: 2 }} >
                <InputLabel>Email</InputLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControl>
              <Button
                variant="contained"
                color="error"
                sx={{ mt: 5, mb: 2 }}
                type="submit"
              >
                Login
              </Button>
              <div>
              *** Forget Password? <Link to='/forgetpassword'> Forget Password</Link>
              </div>
              <div>
              *** Don't have any account? Create One!! <Link to='/register'> Create Account</Link>
              </div>
            </FormGroup>
          </form>
        </Container>
    </>
  );
};

export default Login;
