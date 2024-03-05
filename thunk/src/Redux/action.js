import {fetchData} from "./actiontype";
import axios from "../../node_modules/axios";


export const dataFetching=()=>(dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{console.log(res),dispatch(fectchDataFucntion(res.data))})
    .catch((err)=>console.log("Not Found",err))
}

export const fectchDataFucntion=(payload)=>{
    return {type:fetchData,payload}
}