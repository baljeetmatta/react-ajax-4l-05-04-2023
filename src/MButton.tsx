import React from 'react';
type ButtonProps={
    value:string;
    clickHandler?:()=>void;
}
function test()
{
    console.log("Button clicked");

}
function MButton(props:ButtonProps)
{
    return (
        <button onClick={props.clickHandler}>{props.value}</button>
    )
}
export default MButton;
