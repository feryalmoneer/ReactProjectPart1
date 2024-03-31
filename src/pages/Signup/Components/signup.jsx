import axios from "axios";
import "./signup.module.css";
import { useState } from "react";
import { Zoom, toast } from "react-toastify";
//import{object , string} from 'yap';
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const Navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handelChangeImg = (e) => {
    const { name, files } = e.target;
    setUser({ ...user, [name]: files[0] });
  };

  /* const validateData=async()=>{
   const RSchema= object({
      userName:string().required(),
      password:string().min(8).required("Is Required"),
      email:string().email().required("Is Required"),
      image:string() ,
    });
    try{
      await RSchema.validate(user);
      return true;
    } catch(error){
    console.log(error.errors);
     return false;
    }


  };*/

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    //if(await validateData()) {//
    const formData = new FormData();
    formData.append("userName", user.userName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("image", user.image);
    /* Display the valuesfor (const value of formData.values()) {console.log(value);}*/
    try {
      const { data } = await axios.post( `https://ecommerce-node4-five.vercel.app/auth/signup`,
        formData
      );
      setUser({
        userName: "",
        email: "",
        password: "",
        image: "",
      });
      if (data.message == "success") {
        toast.success("Acoount Created", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        Navigate("/SignIn");
      }
    } catch (error) {
      // console.log(error.response);
      if (error.response.status === 409) {
        toast.error("Email Already Exists", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "light",
          transition: Zoom,
        });
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="containerc">
        <div className="img">
          {" "}
          <img src="1 (1).svg" />{" "}
        </div>
        <div className="login-content">
          <form onSubmit={handelSubmit}>
            <h2 className="pt-serif-regular-italic ">SignUp</h2>
     <div className="input-div">
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handelChange}
                />
              </div>
            </div>
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
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="input-div ">
              <div className="div">
                <h5>Image</h5>
                <input type="file" name="image" onChange={handelChangeImg} />
              </div>
            </div>
            <button
              type="submit"
              className="bn"
              disabled={loader ? "disabled" : ""}
            >
              {!loader ? "Submit" : "plz wait.."}
            </button>
          </form>
        </div>
    
      </div>
    
    </>
  );
}
