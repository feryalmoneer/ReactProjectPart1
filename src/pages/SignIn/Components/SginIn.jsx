import './Sign.css'
import { useState } from "react";
export default function SignIn() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setUser({ ...user, [name]: value });
  };
 
  return (<>
    
<div className="containerc">
  <div className="img"> <img src="form.svg"/> </div>

<div className="login-content">
    <form >
      <h2 className="title gruppo-regular">Welcome Back</h2>
      <div className="input-div ">
     
        <div className="div">
          <h5>Username</h5>
          <input type='text' name='name' value={user.name} onChange={handelChange}/>
        
        </div>
      </div>
      <div className="input-div pass ">
     
        <div className="div">
        <h5>password</h5>
          <input type="password" name='password' value={user.password} onChange={handelChange}/>
        </div>
      </div>
      <a href="#">Forgot Password?</a>
      <input type="submit" className="btn" value="Login" />
    </form>
  </div> 
 
</div>
    

  </>)}


