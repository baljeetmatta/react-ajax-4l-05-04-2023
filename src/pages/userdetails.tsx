import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link, useParams} from 'react-router-dom'
type userType={
    id:number;
    first_name:string;
    last_name:string;
    email:string;
}
type params={
    id:number;
}
const UserDetails=()=>{

    useEffect(()=>{
        console.log("CAlled");
        let url:string=`https://reqres.in/api/users/${id}`
        fetch(url)
        .then(response=>response.json())
        .then(res=>setList(res.data));
    },[]);


     const {id}=   useParams<params|any>();

  


const [list,setList]=useState<userType>();



return(

    <>
    {id}
    <table className="table table-bordered">
       
        <tbody>
      <tr>
        <td>First Name</td>
        <td>{list?.first_name}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{list?.last_name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{list?.email}</td>
      </tr>

        </tbody>
    </table>
    </>
)


}
export default UserDetails;