import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStudentData } from "../service/API";
import {
    Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ClipLoader } from "react-spinners";

const ShowData = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    const response = await getStudentData();
    setStudent(response?.data?.data);
    setLoading(false);
    // console.log('data', response);
  };

  console.log("student", student);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <ClipLoader
          color="#36d7b7"
          size={100}
          cssOverride={{ marginLeft: "700px", marginTop: "200px" }}
        />
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            width: "90%",
            margin: "auto",
            marginTop: "45px",
            boxShadow: "0px 0px 30px rgba(0,0,0,0.5)",
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#E3E3E3" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "Bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "Bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "Bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "Bold" }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: "Bold" }}>Address</TableCell>
                <TableCell sx={{ fontWeight: "Bold" }}>City</TableCell>
                <TableCell sx={{ fontWeight: "Bold" }}>Class</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.map((element, key) => {
                return (
                  <>
                    <TableRow>
                      <TableCell>{key + 1}</TableCell>
                      <TableCell>{element.name}</TableCell>
                      <TableCell>{element.email}</TableCell>
                      <TableCell>{element.phone}</TableCell>
                      <TableCell>{element.address}</TableCell>
                      <TableCell>{element.city}</TableCell>
                      <TableCell>{element.class}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
          <Button sx={{padding: 2}} onClick={()=>navigate("/")}>Go to Home Page</Button>
        </TableContainer>
      )}
    </>
  );
};

export default ShowData;
