import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addStudentData } from '../service/API'
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@mui/material'

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  class: "",
}

const AddData = () => {

  const [student, setStudent] = useState(initialState)
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const validation = ()=>{
    let error = {}

    if(!student.name){
      error.name("Name is required.")
    }
    if(!student.email){
      error.email("Email is required.")
    }else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      student.email
    )){
      error.email("Please enter a valid email.")
    }
    if(!student.phone){
      error.phone("Phone number is required.")
    }
    if (!student.address){
      error.address("Address is required.")
    }
    if(!student.city){
      error.city("City is required.")
    }
    if(!student.class){
      error.class("Clas is required.")
    }

    return error
  }

  let name, value

  const postData = (e)=>{
    name = e.target.name
    value = e.target.value

    setStudent({...student, [name]: value})

    if (name == "name"){
      if(value.length == 0 ){
        setError({...error, name: "* Name is required. "})
        setStudent({...student, name: ""})
      }else {
        setError({...student, name: ""})
        setStudent({...student, name: value})
      }
    }

      if(name == "email"){
        if(value.length == 0){
        setError({...error, email: "* Email is required. "})
        setStudent({...student, email: ""})
      }else{
        setError({...error, email: ""})
        setStudent({...student, email: value})
      }
    }

    if(name == "phone"){
      if(value.length == 0){
        setError({...error, phone: "* Phone number is required."})
        setStudent({...student, phone: ""})
      }else{
        setError({...error, phone: ""})
        setStudent({...student, phone: value})
      }
    }

    if(name == "address"){
      if(value.length == 0){
        setError({...error, address: "* Address is required."})
        setStudent({... student, address: ""})
      }else{
        setError({...error, address: ""})
        setStudent({...student, address: value})
      }
    }

    if(name == "city"){
      if(value.length == 0 ){
        setError({...error, city: "* City is required."})
        setStudent({...student, city: ""})
      }else{
        setError({...error, city: ""})
        setStudent({...student, city: value})
      }
    }

    if (name == "class"){
      if(value.length == 0){
        setError({...error, class: "* Class is required. "})
        setStudent({...student, class: ""})
      }else{
        setError({...error, class: ""})
        setStudent({...student, class: value})
      }
    }
  }

  const submitData =async (e)=>{
    e.preventDefault()
    let ErrorList = validation()
    setError(validation())

    if(Object.keys(ErrorList).length == 0){
      await addStudentData(student)
      navigate("/showdata")
    }
  }

  return (
    <>
      <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>Add Student Data</h1>
          <form onSubmit={submitData}>
            <FormGroup
            style={{
                width: "60%",
                margin: "auto",
                padding: 30,
                boxShadow: "0px 0px 30px rgba(0,0,0,1)",
              }}>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Name</InputLabel>
                <Input
                  type="text"
                  setValue={student.name}
                  onChange={(e) => postData(e)}
                  required
                />
                {error.name}
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Email</InputLabel>
                <Input
                  type="email"
                  setValue={student.email}
                  onChange={(e) => postData(e)}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Phone</InputLabel>
                <Input
                  type="number"
                  setValue={student.phone}
                  onChange={(e) => postData(e)}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Address</InputLabel>
                <Input
                  type="text"
                  setValue={student.address}
                  onChange={(e) => postData(e)}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 3 }}>
                <InputLabel>City</InputLabel>
                <Input
                  type="text"
                  setValue={student.city}
                  onChange={(e) => postData(e)}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Class</InputLabel>
                <Input
                  type="text"
                  setValue={student.class}
                  onChange={(e) => postData(e)}
                  required
                />
              </FormControl>
              <Button
                variant="contained"
                color="error"
                sx={{ mt: 5 }}
                type="submit"
              >
                Add Data
              </Button>
            </FormGroup>
          </form>
        </Container>
    </>
  )
}

export default AddData
