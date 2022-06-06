import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink
// const Link = <a />;



const Navbar = () => {
  const {isAuth, login}=useContext(AuthContext)
  const navigate =useNavigate();

  const handleLogin=()=>{
   if(isAuth){
      navigate('/');
   }
   else{
     navigate('/login')
   }

}
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-around", background:"blue",alignItems:"center",width:"100%", height:"50px" }}>
      <Link data-cy="navbar-home-link" to="">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>LogIn</button>
    </div>
  );
};

export default Navbar;
