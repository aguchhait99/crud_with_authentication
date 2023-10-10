import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getEditData, updateData } from "../service/API";
import { toast } from "react-toastify";
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from "@mui/material";

const EditUser = () => {
  const { _id } = useParams();
  console.log('id', _id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const Editdata = async () => {
    try {
      const response = await getEditData(_id);
      const result = response.data;

      setValue("name", result.name);
      setValue("email", result.email);
      setValue("phone", result.phone);
      setValue("address", result.address);
      setValue("city", result.class);
      setValue("class", result.class);
      console.log('data1', result);
      if (response.data.success) {
        toast.success(response.data && response.data.msg);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  useEffect(()=>{
    Editdata()
  },[_id], [setValue])

  const onSubmit=async (data)=>{
    try{
        const res = await updateData(data, _id)
        console.log(res);
        navigate('/editdeletedata')
        if(res.data){
            toast.success(res.data && res.data.message)
          }
        
        else{
          toast.error(res.data.msg)
        }
    }catch(error){
       toast.error("Something went wrong")
    }
}

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
                Edit Data
              </Button>
            </FormGroup>
          </form>
        </Container>
    </>
  );
};

export default EditUser;
