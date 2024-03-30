import './Send.css'
import axios from 'axios';
import { useState } from 'react';
import { Zoom, toast } from 'react-toastify';
import {useNavigate}  from 'react-router-dom';
export default function SendCode() {
  const [email , setEmail] = useState ("");
  const Navigate=useNavigate();
  //console.log(email);
  const sendEmail = async (e)=>{
    e.preventDefault();
    const {data} = await axios.patch(`https://ecommerce-node4-five.vercel.app/auth/sendcode` , {email}); 
    // console.log(data);
    if(data.message==='success')
      { toast.success(' Code Sent Successflly In Your Email', {
        position:"bottom-right",
        autoClose:3000,
        hideProgressBar: true,
        closeOnClick:true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      Navigate('/ForgetPassword');
    }
  }
  return (
  <div  className="bodySend">
  <input className="c-checkbox" type="checkbox" id="checkbox" />
  <div className="c-formContainer">
    <form className="c-form" >
      <input  onChange={(e)=>setEmail(e.target.value) } name='email'  type="email"   className="c-form__input" placeholder="E-mail" />
      <label className="c-form__buttonLabel" htmlFor="checkbox">
        <button onClick={sendEmail} className="c-form__button" type="button">Send</button>
      </label>
      <label className="c-form__toggle" htmlFor="checkbox" data-title="Click here" />
   </form>
  </div>
</div>
  )
}
