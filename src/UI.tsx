import React, { ChangeEvent, useState } from 'react';
const UI=()=>{
let textData:string;
const [data,setData]=useState("");

const changeHandler=(event:ChangeEvent)=>{

textData=(event.target as HTMLInputElement).value;
//console.log(textData);


}
const changeHandler1=(event:ChangeEvent)=>{

    setData((event.target as HTMLInputElement).value);
    //console.log(textData);
    
    
    }
const clickHandler=()=>{
    alert(textData);

}
const copyHandler=()=>{

    setData(textData);
}
    return (
        <>
        <input type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>Show</button>
        <input type="text" value={data} onChange={changeHandler1} />
        <button onClick={copyHandler}>Copy</button>
        </>
    )
}
export default UI;