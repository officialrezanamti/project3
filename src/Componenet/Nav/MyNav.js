import { NavLink } from "react-router-dom";
import "./MyNav.css";
import { useState } from "react";
import { isLogin } from "../../utils";
export default function MyNav() {
  const [loginCheck , setLoginCheck] = useState(isLogin() ? 'Exit' : 'Enter');
  const logoutHandler = () =>{
    document.cookie = "username=admin; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
    setLoginCheck('Enter');
  }
  return (
    <>
      <header>
        <div className="right">
          <h1>Nerd Studio</h1>
        </div>
        <div className="left">
          <NavLink to="/" className="nav">
            Home
          </NavLink>
          <NavLink to="/about" className="nav">
            About
          </NavLink>
          <NavLink to="/article" className="nav">
            Article
          </NavLink>
          <NavLink to="/panel" className="nav">
            Panel
          </NavLink>
          {isLogin() ? 
            <NavLink to="/login" onClick={logoutHandler} className="nav" id="loginnn">{loginCheck}</NavLink>
            :
            <NavLink to="/login" className="nav" id="loginnn">{loginCheck}</NavLink>
        
        }
       
        </div>
      </header>
    </>
  );
}
