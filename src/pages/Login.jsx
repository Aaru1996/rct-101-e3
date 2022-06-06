import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



const Login = () => {
  const {isAuth, login} =useContext(AuthContext)
  const navigate= useNavigate();
  const handleLogin = ()=>{
        login();
         navigate('/');
  }
  return (
    <div >
      <input data-cy="login-email" placeholder="enter email"/><br/>
      <input data-cy="login-password" placeholder="enter password"/><br/>
      <button data-cy="login-submit" onClick={ handleLogin} >Login</button>
    </div>
  );
};

export default Login;
