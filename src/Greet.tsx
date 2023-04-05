import React from 'react'
type GreetingPros={
    name:string;
    color?:string

}
function Greeting(props:GreetingPros)
{
    return (
        <p>Hello to {props.name}</p>
    )
}
export default Greeting;