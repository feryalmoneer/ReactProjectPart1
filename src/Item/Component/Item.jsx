import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './Item.css'
import Loder from "../../pages/Loader/Lodaer";
export default function Item() {
const[item ,setItem]= useState([]);
const[loader , setLoader]=useState(true);
 const{id} = useParams();
  const getItem = async()=>
  { try{

    const { data } = await axios.get(`https://ecommerce-node4-five.vercel.app/products/category/${id}`);   
    setItem(data.products);
  
 console.log(data.products)
  } catch (error)
  { 
console.log(error);
  }
    
    finally
    {
      setLoader(false);
    }

  }

  useEffect(() => {
    getItem();
  }, []);

  if(loader)
  {
   return<Loder/ >;
  }
return (
  <>
  <br/> <br/> <br/> <br/><br/><br/>
  
  <div className="container text-center">
<div className=" row  row-lg-4 row-md-3 gap-5  "  >
 {
  item.map( p=>
    
    <div className="card cd" style={{width: '18rem'}} 
    key={p._id}>
  <img src={p.mainImage.secure_url }  className="ratio pp" alt="p-Img" />
      <div className="card-body">
        <h5 className="card-title ti"> {p.name}</h5>
        <h3 className="h3h">{p.status}</h3>
      </div>
    </div>
    )}
 
 </div></div>














</>)
}



{/**
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

*/}