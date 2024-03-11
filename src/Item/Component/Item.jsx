import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Zoom, toast } from "react-toastify";
import './Item.css'
export default function Item() {
const[item ,setItem]= useState([]);
  const{id} = useParams();
  const getItem = async()=>
  { try{

    const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products/category/${id}`);   
    setItem(data.products);
    
  }catch
    {
      console.log("r")
      toast.error("There are no products", {
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

  }

  useEffect(() => {
    getItem();
  }, []);
return (
  <>
 <div className="container">
<header>
  <div className=" shrikhand-regular ">Productds</div>
  <div className="icon_cart">
  <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3" />
</svg>
<span>0</span>
</div>
</header>

  <div className="item_product">
  {item.map(it =>

<div className="item" key={it._id}>
<img src ={it.mainImage.secure_url} alt="item-img"/>
<h2> {it.name} </h2>
<div className="price">${it.price}</div>
<button className="addCart">ADD To Cart</button>

</div>

  )}

</div>




 </div>

</>)
}