import axios from 'axios';
import { useState } from 'react'
import './Review.css'
export default  function Riv() {
const [user, setUser] = useState({
    comment:'',
    rating:''
 })
 const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handelSubmit = async (e) => {
   
    e.preventDefault();
    const urlParams= new URLSearchParams(window.location.search);
    const id=urlParams.get('id');   
    console.log(id)
    try{
    const token = localStorage.getItem(`userToken`)
  const{data} = await axios.post(`  https://ecommerce-node4-five.vercel.app/products/${id}/review`,{
    comment:user.comment,
    rating:user.rating
  },{
    headers:{
        Authorization:`Tariq__${token}`
      }  
  });
  console.log(data);
  
    }
    catch(err)
    {
        console.log(err)
    }
  

};
  return (
    <>

 <div  className="bodySend">
  
     <input className="c-checkbox" type="checkbox" id="checkbox" />
  <div className="c-formContainer">
  <span className='spsnre'>Add Reviwes</span>

    <form  onSubmit={handelSubmit} className="c-form"  >
   

      <input  value={user.comment}  onChange={handelChange } name="comment"   type="text"   className="c-form__input"placeholder='comment' />
 

      <input  value={user.rating}  onChange={handelChange }  name="rating"   type="number"   className="c-form__input" placeholder='rating' />


        <button  className="c-form__button" type="submit">Submit</button>

      <label className="c-form__toggle" htmlFor="checkbox" data-title="Click"/>
   </form>
  </div>
</div>


    </>
  )
}

