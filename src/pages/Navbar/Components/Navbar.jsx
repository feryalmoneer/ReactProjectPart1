import { NavLink } from "react-router-dom";
import './Navbar.css'
import {  useMyContext } from "../../../context/CartQy";

export default function Navbar() {
  const {cart}  = useMyContext();
  console.log({cart});

  return (
    <>
<nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <a className=" lobster-regular navbar-brand me-auto  " href="#">FeryalStore</a>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FeryalStore</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
          <NavLink className="nav-link active mx-lg-2" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link mx-lg-2 " to="/Products">Products </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link mx-lg-2" to="/Categories">Categories</NavLink></li>
        </ul>
        <ul className="navbar-nav justify-content-end ">
       <li className="nav-item">
        <NavLink className="nav-link cart" to="/Cart">
          <div className="right">
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cart" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>   <span className="qty">{cart?.length || "0"}</span>
          </div>
 

 </NavLink>
      </li>  
      <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 Acount

            </a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="dropdown-item" to="/SignIn">
          Sign In
        </NavLink>
          <NavLink className="dropdown-item" to="/Profile">
         Profile
        </NavLink>
<hr className="dropdown-divider" />
              </li>
 
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  </div>
</nav>









    </>
  );
}
