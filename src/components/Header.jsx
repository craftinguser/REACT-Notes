import { useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {

  const[btnLoginName, setBtnLoginName] = useState("Login")
    return (
      <div className="header">
  <div className="logo-container">
  <img className="logo" src ="https://thumbs.dreamstime.com/b/fast-delivery-food-logo-vector-337616132.jpg"/>
  <div className="nav-items">
  <ul>
    <li> <Link to ="/"> Home</Link> </li>
    <li> <Link to ="/about">About Us </Link> </li>
    <li>
      <Link to ="/contact">Contact Us  </Link></li>
    <li>Cart </li>
    <button className="login-btn" onClick ={()=>{
      btnLoginName === "Login"
      ? setBtnLoginName("Logout") : 
      setBtnLoginName("Login") }
      }>{btnLoginName}</button>
  </ul>
  </div>
  </div>
  
      </div>
    );
  };
  

  export default Header;