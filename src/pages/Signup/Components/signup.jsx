import axios from 'axios';
import './signup.module..css'
import { useState } from "react";
export default function Signup() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
    email:'',
    image:'',
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser(
      { ...user, [name]: value });
  };
  const handelChangeImg = (e) => {
    const { name,files} = e.target;
   
    setUser({ ...user, [name]: files[0]});
  };

  const handelSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append ('userName', user.userName) ;
    formData.append ('email' ,user.email);
    formData.append ('password', user.password) ;
    formData.append ('image', user.image);
    const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formData);      
console.log(data);
} ;
return(
    <>
   
   <div className="containerc">
  <div className="img"> <img src="1 (1).svg"/> </div>

<div className="login-content">
    <form  onSubmit={handelSubmit}>
 <h2 className="title pacifico-regular">SignUp</h2>
 <div className="input-div">
     
<div className="div">
<h5>Username</h5><input type='text' name='name' value={user.userName} onChange={handelChange}/></div>
    </div>
 <div className="input-div">  
   <div className="div">
   <h5>Email</h5> <input type='email' name='email' value={user.email} onChange={handelChange}/>
   </div>
</div>
<div className="input-div pass ">
   <div className="div">
<h5>password</h5><input type="password"  name='password' value={user.password} onChange={handelChange}/>
   </div>
   </div>
<div className="input-div ">
<div className="div">
 <h5>Image</h5><input type='file' name='image' onChange={handelChangeImg }/>
 </div>
</div>
<button  className ="btn" type="submit"><span>Submit</span></button>
</form>
  </div> 
 
</div>
    

    </> );}
