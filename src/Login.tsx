import React, { useState } from 'react';
type UserType={
    name:string,
    email:string
}
const Login=()=>{


    const [login,setLogin]=useState(false);
const [loginDetails,setDetails]=useState<UserType|null>(null);

const loginHandler=()=>{
setLogin(true);
setDetails({name:"Code",email:"EmailAddress"});

}
const logoutHandler=()=>{
setLogin(false);
setDetails(null);
}

    return (
        <>
        <button onClick={loginHandler}>Login </button>
        <button onClick={logoutHandler}>Logout </button>
        <p>{(login?'Logged in -':'Please Login')} </p>
        <p>{loginDetails?.name}</p>
        </>
    )
}
export default Login;