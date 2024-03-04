import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Loader from "../../Loader/Lodaer";
import Error from './../../Error/Error';
export default function Categories() {
  const [category, setCategory] = useState([]);
  const [loder, setLoder] = useState(true);
  const [error ,setError]=('');

  const getCategory = async()=>{
    try
    {
      const {data} = await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
      setCategory(data.categories);
      setError('');
    }
      catch {
      //setError('');
      <Error />;
    } finally {
      setLoder(false);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);
  if (loder) {
    return <Loader />;
  }


  return (
    <>
    <p>{error}</p>
    <Swiper className='mt-5'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {category.length > 0 ? category.map(categories =>
        <div className="col-lg-6 col-md-4 col-sm-6 mt-5" key={categories._id}>
          <SwiperSlide className="swiperSlide" key={categories._id}>
              <img className="circular-image" src={categories.image.secure_url}/>
          </SwiperSlide>
        </div>
      ): < Error/>
      } 
</Swiper></>
    
);
 
}
