import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const {isAuth} =useContext(AuthContext)
  const navigate= useNavigate();

  if(isAuth){
      return <div>
        <Products/>
      </div>;
  }else {
    return <Navigate to={'/login'} />
  }
};

export default Home;
