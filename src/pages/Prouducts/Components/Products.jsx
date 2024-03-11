import axios from "axios";
import './Products.css'
import { useEffect, useState } from "react";
import Error from './../../Error/Error';
import Loader from './../../Loader/Lodaer';
//import { useParams } from "react-router-dom";
export default function Products() {
    const [product, setproduct] = useState([]);
    const[loader , setLoader]=useState(true);
    const [error ,setError]=('');
    const getproduct = async()=>{
      try
      {
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/products`);
        setproduct(data.products);
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
    useEffect(() => {getproduct();}, []);
   if(loader){ 
    return<Loader/ >; }
 

  return (
<><p>{error}</p>


{product.map(p=>
  <div className="Hero" key={p._id}>
      <div className="container-Hero">
        <div className="row">
          <div className="col-md-6">
            <div className="copy col-8">
              <div className="Textt  lobster-regular ">
               {p.name}
              </div>
              <div className="teext-hero-bold">
                {p.description}{" "}
              </div>
              <div className="teext-hero-bold">
                <span> price: ${p.price}</span>
                {" "}
              </div>
            
            </div>
          </div>

          <div className="col-md-6">
            <img src={p.mainImage.secure_url} alt="p-Img" />
          </div>
        </div>
      </div>
    </div>


)}



</>)}