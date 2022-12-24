import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Role, State } from "../../Redux/action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Backgrround from "../Background/Background";
const Location = () => {
    return (
        <>
      {/* <Backgrround>
       
       </Backgrround> */}

      <Form className="login-form">
        <div className="Login-form-div">
         

          <Form.Group className="mb-3" controlId="formBasicEmail">
           
            <Form.Control style={{height:"60px", borderRadius:"0"}}
          
              name="user_email"
              id="Form-input"
              type="text"
              placeholder="Start Point"
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicPassword">
        
            <Form.Control style={{height:"60px", borderRadius:"0"}}
          
              name="user_password"
              id="Form-input"
              type="text"
              placeholder="End Point"
            />
          </Form.Group>
        
      
          <br />
          <Button id="Form-btn" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      <div className="el-left"></div>
      <div className="el-right"></div>
      <div className="el-top"></div>
      <div className="el-bottom"></div>
    </>
    );
};

export default Location;