import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./GetProduct.css";
import Loder from "../../Loader/Lodaer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Zoom, toast } from "react-toastify";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useMyContext } from "../../../context/CartQy";
import { UserInfo } from "../../../context/Lo";
export default function GetProduct() {
  const [data, setData] = useState({});
  const [load, setLoader] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [subImages, setSubImages] = useState([{}]);
  const { id } = useParams();
  const { cart, setCart } = useMyContext();
  const {isLogin}=useContext(UserInfo);
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
    <> <div className="gitPro">
        <div className="details" key={data._id}>
          <div className="box">
            <div className="row d-flex justify-content-around">
              <h2>
                {data.name}{" "}
              </h2>
              <span className="Dis ">
                <small>Price:$</small>
                {data.price}
              </span>
            </div>
            <p>
              <span>
                Discription:
                <br />
                <p className="cutoff\"> {data.description}</p>
              </span>
            </p>
            <br /> <br />
          </div>

          <div className="big-img" key={data._id}>
          <div className="addCart">

                  {isLogin&& 
                    <button
                      onClick={() => {
                        addToCart(data.id);
                      }}
                      className="btn btn-outline-dark"
                      to="/cart"
                    >
                      Add to cart{" "}
                    </button>
                 
                  
                  }
                </div>
           <img src={data.mainImage.secure_url} alt="" />
          </div>
    
        </div>
        <hr/>
        <Swiper
              className="mt-5"
              key={data._id}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {subImages.map((subImages) => (
                <SwiperSlide className="swiperSlide" key={subImages._id}>
                  <div className="div">
                    <img className="subImg" src={subImages.secure_url} /> <br />
                  </div>
                </SwiperSlide>
              ))}{" "}
            </Swiper>
      </div>
      <div className="gitPro">
        <div className="row">
          <div className="card">
          <h3 className="card__title">Reviews</h3>

            <Link to={`/Revwie?id=${data._id}`}>
              <button className="btn btn-outline-success">Add Review</button>
            </Link>
            <div className="cardd">

  <div className="card-body">

            {reviews.length > 0 ? (
              reviews.map((r) => {
                return (
                  <div className="div" key={reviews.id}>
                    <small> Comment:{r.comment} </small>  
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

          </div>
        </div>
      </div>
    </>
  );
}
