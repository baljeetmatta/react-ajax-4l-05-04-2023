import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greet';
import MButton from './MButton';
import GreetingClass from './GreetClass';
import Counter from './Counter';
import Login from './Login';
import UI from './UI';
import TodoApp from './Todo';
import {Routes,Route} from 'react-router-dom';
import Layout from './pages/layout';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import Home from './pages/home';
import UsersData from './pages/usersData';
import Users from './pages/users';
import UserDetails from './pages/userdetails';

/*
<Greeting name="Code" color="red"/>
     <Greeting name="Quotient"/>
<MButton clickHandler={test1}  value="Click me"></MButton>
<MButton  value="Send"></MButton>

npm install react-router-dom @types/react-router-dom
*/

function App() {
  return (
    <div className="App">
{/* <Routes>

  <Route path="/todo" element={<TodoApp/>}/>
  <Route path="/ui" element={<UI/>}/>

  <Route path="/greeting" element={ <GreetingClass name="Code"/>}/>
  <Route path="/counter" element={ <Counter/>}/>
  <Route path="/login" element={ <Login/>}/>
</Routes> */}

   
    
     
<Routes>

<Route path="/" element={<Layout/>}>
  <Route path="aboutus" element={<Aboutus/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="contactus" element={<Contactus/>}/>
  <Route path="users" element={<UsersData/>}/>
<Route path="Allusers" element={<Users/>}/>
<Route path="userdetails/:id" element={<UserDetails/>}/>


</Route>

</Routes>


    </div>
  );
}
function test1()
{
  console.log("Button 1 Clicked");
}
function test2()
{
  console.log("Button 2 clicked");
}

export default App;
