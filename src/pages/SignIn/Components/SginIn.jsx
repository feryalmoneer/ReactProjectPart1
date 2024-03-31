import './Sign.css'
import { useState } from "react";
import {Bounce , toast} from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const Navigate = useNavigate();
  const[loader , setLoader]=useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handelSubmit = async (e)=>{
    e.preventDefault();
    setLoader(true);
    try
    {
   const {data} = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signin`,user); 
     // console.log(data);
      setUser( {email:'' , password:''});
      if(data.message ==='success')
      { 
        toast.success('Thank You!  Your data has been successfully submitted'
        , {
          position: "bottom-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      localStorage.setItem('userToken',data.token);
    
      Navigate('/');
    }

  } catch{   
   console.log("error");
     }
    finally
    {
      setLoader(false);
    }
  };
 
  return (<> 
<div className="containerc">
<div className="img"> <img src="form.svg"/> </div>
<div className="login-content">
    <form onSubmit={handelSubmit} >
      <h2 className="pt-serif-regular-italic  t">Welcome Back</h2>
<br/><br/>
<br/>
<br/>

      <div className="input-div">
              <div className="div">
                <h5>Email</h5>{" "}
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handelChange}
                />
              </div>
            </div>
      <div className="input-div pass ">
     
        <div className="div">
        <h5>password</h5>
          <input type="password" name='password' value={user.password} onChange={handelChange}/>
        </div>
      </div>
      <a className='a' href="/SendCode">forgetPassword?</a> 
      <a className='a' href="/signup">If you Dont Have an Account</a>


      <button type="submit" className="bn" disabled={loader?'disabled':''} >
        {!loader ?'Login':'wait..'}</button>

    </form>
  </div> 
 
</div>
    

  </>)}


