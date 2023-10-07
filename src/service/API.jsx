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