import axios from "axios";
import {  useEffect, useState } from "react";
import { PiStarThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./GetProduct.css";
import Loder from "../../Loader/Lodaer";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Zoom, toast } from "react-toastify";
import { useMyContext } from "../../../context/CartQy";
export default function GetProduct() {
  const [data, setData] = useState({});
  const [load, setLoader] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [subImages, setSubImages] = useState([{}]);
  const { id } = useParams();
  const { cart, setCart } = useMyContext();
  const getItem = async () => {
    try {
      const { data } = await axios.get(
        `https://ecommerce-node4-five.vercel.app/products/${id}`
      );
      // console.log(data.product);
      setData(data.product);
      setReviews(data.product.reviews);
      setSubImages(data.product.subImages);
    } catch {
      //console.log("error");
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  if (load) {
    return <Loder />;
  }

  const addToCart = async (productId) => {
    const token = localStorage.getItem("userToken");
    setCart([...cart, data]);

    try {
      const { data } = await axios.post(
        `https://ecommerce-node4-five.vercel.app/cart`,
        { productId },
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
    } catch {
      toast.error("Product Already add to cart", {
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
  };

  return (
    <> 
    <br/> <br/><br/>

  <div className="main-wrapper">
  <div className="container">
    <div className="product-div">
      <div className="product-div-left">
        <div className="img-container im">
        <img src={data.mainImage.secure_url} alt="" />
        </div>
        <div className="hover-container" key={subImages._id}>
      
              {subImages.map((subImages) => (
                  <div className="diuv" key={subImages._id}>
                    <img className="subImg" src={subImages.secure_url} /> <br />
                  </div>
              ))}

        </div>
      </div>
      <div className="product-div-right">
      <h1 className='text-3xl font-bold'>{data.name}</h1>

        <span className="product-price"> Price :${data.price}</span>
        <p className="product-description">
        {data.description}
          </p>
        <div className="btn-groups">
            <button
                      onClick={() => {
                        addToCart(data.id);
                      }}
                      to="/cart"> Add to cart
                    </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="main-wrapper">
        <div className="container">
        <h1 className='text-3xl font-bold'>Reviews</h1>

          <div className="card">
          <Link to={`/Revwie?id=${data._id}`}>
          <button className="btn btn-outline-success">Add Review          </button>


            </Link>

            <div className="cardd">

  <div className="card-body">

            {reviews.length > 0 ? (
              reviews.map((r) => {
                return (
                  <div className="div" key={reviews.id}>
                    <small> Comment:{r.comment} </small>  
                    <br/>
                    <small>Rating:{r.rating}</small>
                    <br /><hr/>
                  </div>
                );
              })
            ) : (
              <p>no data</p>
            )}
  </div>
</div>

</div></div></div> 
    </>
  );
}
