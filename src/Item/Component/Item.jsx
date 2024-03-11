import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Zoom, toast } from "react-toastify";

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
</>)
}