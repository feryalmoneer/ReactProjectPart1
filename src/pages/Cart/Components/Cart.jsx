import axios from "axios";
import { useEffect, useState } from "react";
import './Cart.css'
import { NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
export default function Cart() {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem('userToken');
const[price , setPrice]=useState(0);

  const getCart=async ()=>{
    try{
      const {data} = await axios.get(`https://ecommerce-node4-five.vercel.app/cart`,
      {
        headers: {
          Authorization:`Tariq__${token}`
        }
      })
    console.log(data.products);
      setCart(data.products);
    }
     catch
    {
      console.log("error");
    }

  }
  useEffect(() => {
    getCart();
  }, []);
const handlePice =()=>{
  let p =0;
  cart.map (c =>{
    p += c.details.price * c.quantity
  })
   setPrice(p);
}
useEffect( ()=>{ handlePice ();})

const increaseQty = async (productId)=>
{
  const token = localStorage.getItem('userToken');
  try{
    const updatedCartItems = cart.map(item =>
      item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCartItems);
  const{data}= await axios.patch(`https://ecommerce-node4-five.vercel.app/cart/incraseQuantity`,{productId},{
    headers: {
      Authorization:`Tariq__${token}`
    }
  });
}

catch(err){
  console.log(err);
}
}
const decreaseQty = async (productId)=>
{
  const token = localStorage.getItem('userToken');
  try{
    const updatedCartItems = cart.map(item =>
      item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCartItems);
  const{data}= await axios.patch(`https://ecommerce-node4-five.vercel.app/cart/incraseQuantity`,{productId},{
    headers: {
      Authorization:`Tariq__${token}`
    }
  });
}
   catch(err){
    console.log(err);
  }
}
const removeitem = async (productId)=>
{
  try
  {  const token = localStorage.getItem('userToken');
    const {data} = await axios.patch(`https://ecommerce-node4-five.vercel.app/cart/removeItem`,{productId},
  {
    headers: {
    Authorization:`Tariq__${token}`
    }
  })
  //console.log(data);
  }catch
  {
    console.log("e");
  }
}
const clear = async ()=>{
  const token = localStorage.getItem('userToken')
  const {data}= await axios.patch(`https://ecommerce-node4.vercel.app/cart/clear`,null, {
   headers:{
     Authorization:`Tariq__${token}`
   }
   });
   
  setCart(null);
  setCart([]);
};
  

  return (
  <> 
  <br/> <br/> <br/>   <br/> <br/> <br/>
<div className="container ">

    <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">ProductName</th>
      <th scope="col"><p></p></th>
      <th scope="col">Quantity</th>
      <th scope="col"><p></p></th>
      <th scope="col">Price</th> 
      <th scope="col">Remove Product</th>
    </tr>
  </thead>
  <tbody>
  {cart.map( r =>
    <tr key={r.productId}>
    <th scope="row"><img src={r.details.mainImage.secure_url} /></th>
    <td>{r.details.name}</td>
    <td><button onClick={()=> increaseQty(r.productId)} >+</button></td>
    <td>{r.quantity}</td>
    <td><button onClick={()=> decreaseQty(r.productId)} >-</button></td>
    <td>{r.details.price}</td>
    <td>
     <svg onClick={()=>  removeitem(r.productId)} className="delet " xmlns="http://www.w3.org/2000/svg" height={20} width="13.5" viewBox="0 0 576 512">{/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path fill="#36383a" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>  </td>
  </tr>


)}

</tbody>
</table>
    <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title"> Shoping Cart <BsCartCheck /></h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">TotalPrice:   <b>{price}$</b>
    
    </h6>
    <hr/>
    <div className="flex">
    <NavLink to ='/CreateOrder'>  
<button className="check">CheckOut</button>
</NavLink>
    </div>

  </div>
  <button onClick={()=>clear()} className="check">Clear</button>

</div>



  </div>





  </>
  )
}
