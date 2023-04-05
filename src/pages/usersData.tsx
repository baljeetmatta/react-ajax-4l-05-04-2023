import React from 'react';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
type UsersData={
    id:number;
    email:string;
    first_name:string;
    last_name:string;
}
const UsersData=()=>{

    const [data,setData]=useState<UsersData[]>([]);



useEffect(()=>{
    console.log("Called");
fetch("https://reqres.in/api/users?page=2")
.then(response=>response.json())
.then(res=>setData(res.data))


},[])

return (

    <table className="table table-bordered">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item)=>(
                    <tr>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }

        </tbody>
    </table>
)





}
export default UsersData;