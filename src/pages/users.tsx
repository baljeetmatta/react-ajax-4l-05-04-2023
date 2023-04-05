import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
type userType={
    id:number;
    first_name:string;
    last_name:string;
    email:string;
}
const Users=()=>{

    useEffect(()=>{
        console.log("CAlled");

        fetch("https://reqres.in/api/users?page=2")
        .then(response=>response.json())
        .then(res=>setList(res.data));
    },[]);


const [list,setList]=useState<userType[]>([]);



return(

    <>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th></th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {
           
            list.map((item)=>(
                <tr>
                    <td><Link to={`/userdetails/${item.id}`}> View</Link></td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))

            
        }
        </tbody>
    </table>
    </>
)


}
export default Users;