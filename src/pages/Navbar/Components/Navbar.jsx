import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container">
          <a className="navbar-brand " href="#">
            <img className="logoIm" src="logo.svg" />
            <span className=" madimi-one-regular">IKEA</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-brands fa-gripfire" style={{ color: "#606e85" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link madimi-one-regular" to="/Products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link madimi-one-regular" to="/Cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link madimi-one-regular"
                  to="/Categories"
                >
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link madimi-one-regular" to="/signup">
                  {" "}
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link madimi-one-regular" to="/SignIn">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

/*
<header>
<nav>
<div className='logo'> <a>BShop</a></div>


<ul className='Linkes'>
  <li> <NavLink to='/Products'>Products</NavLink> </li>
  <li> <NavLink to='/Cart'>Cart</NavLink> </li>
  <li> <NavLink to='/SignIn'>Categories</NavLink> </li>
</ul>

<div className='toggle'>
<li> <NavLink to='/SignIn'>Sign In</NavLink> </li>
<li> <NavLink to='/Signup'>Sign Up</NavLink> </li>
</div>


</nav>

 </header>
  )
}
*/
