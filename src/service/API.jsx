import axios from "axios"

const BaseUrl = "https://restapinodejs.onrender.com"

export const getStudentData = async()=>{
    try{
        return await axios.get(`${BaseUrl}/api/allstudent`)
    }catch(error){
        console.log("Error while fetching the api", error.message);
    }
}

export const addStudentData = async (data)=>{
    try {
        return await axios.post(`${BaseUrl}/api/student`, data)
    }catch(error){
        console.log("Error while fecthing the api data", error.message);
    }
}

export const getEditData = async (id) =>{
    try {
        return await axios.get (`${BaseUrl}/api/edit/${id}`)
    }
    catch(error){
        console.log('Error while calling get api', error.message);
    }
}

export const updateData = async (data, id) => {
    try {
        return await axios.post (`${BaseUrl}/api/update/${id}`, data)
    }
    catch (error){
        console.log('Error while calling update api', error.message);
    }
}

export const deleteData = async (id)=>{
    try {
        return axios.delete(`${BaseUrl}/api/delete/${id}`)
    }
    catch(error){
        console.log('Error', error.message);
    }
}
