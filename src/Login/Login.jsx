import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { Role,State } from '../../Redux/action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import Backgrround from '../Background/Background';

const Login = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const store=useSelector((store)=>
    store.data)
    
 
    const [formData,setformData]=useState([])
   

    const Handle=(e)=>{
       
console.log(e.target.value)
        const {name, value}=e.target
            setformData({
                ...formData,[name]:value,
            })
        }
        
  const handleSubmit=(e)=>{
    e.preventDefault()
    
 
    const create={
      "user_email": formData.user_email,
      "user_password": formData.user_password,
    }
    console.log(create)
    fetch("https://api.earthsfresh.in/api/users/userLogin",{
      method:"POST",
     headers: {
"content_type": "application/json",
"session_id ": 45
},
      body:JSON.stringify(create),
    
    }).then(data => data.json())
    .then(data =>  { 
       

       console.log(data)
//         if(data.status=="ok"){

// dispatch(Role(data.user.role))
// dispatch(State(true))

// if (data.user.role=="admin"){
//     navigate("/admin")
// }else{
 
//     console.log(data)

//     navigate("/product")
// }
// alert("Successfully login"); 
//         } else{
//             alert("Login Failed"); 
//         }
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })
    
    }
    return (
       <>
       {/* <Backgrround>
       
       </Backgrround> */}
       
         <Form onSubmit={handleSubmit} className='login-form'>
       
<div className='Login-form-div'>
<Form.Group className="mb-3" controlId="formBasicEmail">

<h1 className='Form-heading'>Login</h1>
</Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='Form-lable' >E-Mail id</Form.Label>
        <Form.Control onChange={Handle} name="user_email" id='Form-input' type="email" placeholder="Enter email" />
      
      </Form.Group>
<br />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='Form-lable'>Password</Form.Label>
        <Form.Control  onChange={Handle} name="user_password"  id='Form-input' type="password" placeholder="Password" />
      </Form.Group>
          <p id="text-muted">
          Forgot your password?
        </p>
      <br />
      <br />
      <Button id='Form-btn' variant="primary" type="submit">
        Submit
      </Button>
</div>
    </Form>

    <div className='el-left'></div>
    <div className='el-right'></div>
    <div className='el-top'></div>
    <div className='el-bottom'></div>


    
       </>



    );
};

export default Login;