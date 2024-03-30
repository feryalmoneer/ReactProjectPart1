import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Categories.css'
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import Error from './../../Error/Error';
import Loder from './../../Loader/Lodaer';
//import Loader from "../../../Loader/Loader";
export default function Categories() {
  const [category, setcategory] = useState([]);
  const[load , setLoader]=useState(true);
  const [error ,setError]=('');  
  const getproduct = async()=>{
    try
    {
      const {data} = await axios.get(`https://ecommerce-node4-five.vercel.app/categories/active?page=1&limit=10`);
      setcategory(data.categories);
      setError('');
    }
      catch {
     < Error/>
    } 
    finally
    {
      setLoader(false);
    }
  }

  useEffect(() => {
    getproduct();
  }, []);
  
 if(load)
 {
  return< Loder/ >;
 }

  return (
    <>
    <p>{error}</p>
    <br/>   <br/>  <br/>  <br/>
    <Swiper className='mt-5 bgCat'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={7}
    navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} >


{
  category.map(cat =>
  <div className="col-lg-6 col-md-4 col-sm-6 mt-5 " key={cat._id}>
  <SwiperSlide className="swiperSlide" key={cat._id}>
  <Link to={`/Item/${cat._id}`}>
  <img className="circular-image" src={cat.image.secure_url} alt={cat.name}/>
   </Link>
  </SwiperSlide>
   </div>
    )} 

   </Swiper></>)}
