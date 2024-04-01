import './ForgetPassword.css';
import axios from 'axios';
import { useState } from 'react';
import Loder from '../../Loader/Lodaer';
//import { Zoom, toast } from 'react-toastify';
export default function ForgetPassword() {
  const [user, setUser] = useState({
    code: "",
    password: "",
    email : ""
  });
  const[load , setLoader]=useState(true);
  const handelChange = (e) => {
    const { name, value } = e.target;
     //console.log(name);
    //console.log(value);
    setUser({ ...user, [name]: value });
  };
  const handelSubmit = async (e)=>{
    try{
      e.preventDefault();

      const {data} = await axios.patch(`https://ecommerce-node4-five.vercel.app/auth/forgotPassword `,
      {
       code:user.code , password:user.password , email:user.email,
      }); 
   
       //console.log(data);
       setError('');
     
    }catch
    {
      console.log("e");
    }
    finally
    {
      setLoader(false);
    }
  };
 
  return (
    <>
    <div  className='bodys'>
<div className="l-form">
  <form  className="form" onSubmit={handelSubmit}>
    <div className="form__div">
      <input type="email" className="form__input" placeholder=" " name="email" value={user.email}  onChange={handelChange} />
      <label htmlFor="Boolean" className="form__label" >Email</label>
    </div>
    <div className="form__div">
      <input type="password" className="form__input" placeholder=" " name='password' value={user.password} onChange={handelChange} />
      <label htmlFor="Boolean" className="form__label">Password</label>
    </div>
    <div className="form__div">
      <input type="text" className="form__input" placeholder=" "  name="code" value={user.code}  onChange={handelChange} />
      <label htmlFor="Boolean" className="form__label">Code</label>
    </div>
    <input type="submit" className="formbutton" defaultValue="submit"    />

  </form>

</div>
</div>
    </>
  

  )
}
