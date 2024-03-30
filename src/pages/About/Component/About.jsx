import axios from "axios";
import { useState , useEffect } from "react";
import "./About.css"
export default function About() {
  const [DataProfile, setDataProfile] = useState([]);
  const [Data, setData] = useState({});
  const getCart=async ()=>{
    const token = localStorage.getItem('userToken');
      const {data} = await axios.get(`https://ecommerce-node4-five.vercel.app/user/profile`,
      {
        headers: {
          Authorization:`Tariq__${token}`
        }
      })
    console.log(data.user);
    setDataProfile(data.user);
    setData(data.user.image);
      
    }
  useEffect(() => {
    getCart();
  }, []);


  return (
 <>

<section id="team" className="team section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Perosnal Information</h2>
      <div className="underline" />
    </div>   
    <br/>
      </div>
<div className="card ca" style={{width: '30rem'}}>
  <img  src={Data.secure_url
} className="card-img-top mgCardA" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> <span>UserName: </span>{DataProfile.userName}</h5>
    <p className="card-text"> <span>Email: </span>{DataProfile.email}</p>
  </div>
</div>


</section>





 
 </>
  )
}
