import './Sign.css'
import { useState } from "react";
import { Zoom, toast } from 'react-toastify';
//import Loder from '../../Loader/Lodaer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
 const Navigate =useNavigate();
  const[loader , setLoader]=useState();
  const [user, setUser] = useState({
    Username: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
   // console.log(name);
   // console.log(value);
    setUser({ ...user, [name]: value });
  };
  const handelSubmit = async (e)=>{
    e.preventDefault();
    setLoader(true);
    try
    {
   const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signin`); 
      setUser(
      {
        Uusername:'' , password:'' ,

      });
      //console.log(data);
      localStorage.setItem('userToken',data.token)
      if(data.message=='success')
      { toast.success('Acoount Created', {
        position:"bottom-right",
        autoClose:3000,
        hideProgressBar: true,
        closeOnClick:true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      })
      Navigate('/')
    }

  } catch(error){   
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick:true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "light",
        transition: Zoom,
        })
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
      <h2 className="title gruppo-regular">Welcome Back..</h2>
      <div className="input-div ">
     
        <div className="div">
          <h5>Username</h5>
          <input type='text' name='Username' value={user.Username} onChange={handelChange}/>
        </div>
      </div>
      <div className="input-div pass ">
     
        <div className="div">
        <h5>password</h5>
          <input type="password" name='password' value={user.password} onChange={handelChange}/>
        </div>
      </div>
      <a href="#">Forgot Password?</a>
      <button type="submit" className="bn" disabled={loader?'disabled':''} >{!loader ?'Login':'wait..'}</button>
    </form>
  </div> 
 
</div>
    

  </>)}


