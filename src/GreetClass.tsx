import React, { Component } from 'react';
type Gprops={
    name:string
}
type GState={
    count:number;
}
    class GreetingClass extends Component<Gprops,GState>
{
    state={count:0};
    
    test=()=>
    {
        //console.log(this.state.count);
       // this.state.count=this.state.count+1;
     //   console.log(this.state.count);
     this.setState((prevState)=> ({count:prevState.count+1}))
     this.setState((prevState)=> ({count:prevState.count+1}))

    }

    render()
        {
            return (
            <>

            <p>Hello to Class {this.props.name}- {this.state.count}</p>
            <button onClick={this.test}>Click</button>
            </>
            )

        }
    
}
export default GreetingClass;
