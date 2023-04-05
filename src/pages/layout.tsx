import React from 'react';
import { Outlet,Link } from 'react-router-dom';
const Layout=()=>{

    return (
        <>
        <div className="container">
	
    {/* <a href="/home">Home </a> | <a href="/aboutus">About us</a> | <a href="/contactus">Contactus </a> */}
	<Link to="/home">Home </Link> | <Link to="/aboutus">About us</Link> | <Link to="/contactus">Contact us </Link> | <Link to="/Allusers">Users</Link> 
    <br/>Welcome to Master Page
    <Outlet/>

</div>
        </>
    )
}
export default Layout;
