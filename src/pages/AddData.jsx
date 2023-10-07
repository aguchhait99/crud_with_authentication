import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addStudentData } from '../service/API'
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


const AddData = () => {

  const navigate = useNavigate()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      const apiData = await addStudentData(data)
      if(apiData){
        toast.success("Data has been added successfully!");
        navigate('/showdata')
      }else{
        toast.error("Something went wrong")
      }
      
    // alert(JSON.stringify(data));
  };

  console.log(watch(["name", "email", "phone","address", "city", "class"]));

  return (
    <>
      <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>Add Student Data</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup
            style={{
                width: "60%",
                margin: "auto",
                padding: 30,
                boxShadow: "0px 0px 30px rgba(0,0,0,1)",
              }}
              >
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Name</InputLabel>
                <Input
                  type="text"
                  {...register("name")}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Email</InputLabel>
                <Input
                  type="email"
                  {...register("email")}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Phone</InputLabel>
                <Input
                  type="number"
                  {...register("phone")}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Address</InputLabel>
                <Input
                  type="text"
                  {...register("address")}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 3 }}>
                <InputLabel>City</InputLabel>
                <Input
                  type="text"
                  {...register("city")}
                  required
                />
              </FormControl>
              <FormControl sx={{ paddingBottom: 2 }}>
                <InputLabel>Class</InputLabel>
                <Input
                  type="text"
                  {...register("class")}
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
