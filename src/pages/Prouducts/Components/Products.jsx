import axios from "axios";
import './Products.css'
import { useEffect, useState } from "react";
import Error from './../../Error/Error';
import Loader from './../../Loader/Lodaer';
import  _ from "lodash";
import { Link } from "react-router-dom";
export default function Products() {
    const [product, setproduct] = useState([]);
    const[loader , setLoader]=useState(true);
    const [error ,setError]=('');
    const Limt =4;
   const[pageinate , setpageinate] =useState();
   const [current , setcurrent]=useState(1);
   const [sorted , setsorted] = useState({sorted: "name" , reversed:false});
   const [search , setsearch]=useState("");
    const getproduct = async()=>{
      try
      {
        const {data} = await axios.get(`https://ecommerce-node4-five.vercel.app/products?page=1&limit=10`);
        //console.log(data);
        setproduct(data.products);
        
        setpageinate(_(data.products).slice(0).take(Limt).value());
        //const numOfPage = data.page;
       // console.log(numOfPage);

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
   
    const Countpage = product? Math.ceil(product.length/Limt) :0;
    if (Countpage === 1) return null;
     const pages = _.range(1 ,Countpage+1);
   const pagination  =(pageNum) =>
   {
     setcurrent(pageNum);
     const start =(pageNum -1) *Limt;
     const pageinate  = _(product).slice(start).take(Limt).value();
     setpageinate(pageinate) ;
   }


   const SortByPrice =()=>
   {
  
   }
   const SortByName =( )=>
   {      setsorted({sorted: "name" , reversed:!sorted.reversed});
          const userCopy =[...product];
          userCopy.sort((i , j) =>
          {
            const Namei=`${i.name}`; 
             const Namej=`${j.name}`;
 
             if (sorted.reversed)
             {
              return Namej.localeCompare(Namei);
          
             }
              return Namei.localeCompare(Namej);
          })

    setproduct(userCopy);
   
   };


  return (
<><p>{error}</p>
<br/> <br/> <br/> <br/> <br/>
<nav className="navbar-expand-lg ">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Sorting By
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={SortByName}>Name</a></li>
            <li><a className="dropdown-item" href="#" onClick={SortByPrice}>Price</a></li>
          </ul>
        </li>

      </ul>
      <form className="d-flex" role="search" >
        <input className="form-control me-2" type="text" 
     onChange={(e)=>setsearch(e.target.value)}
        placeholder="Search" aria-label="Search" />

      </form>
    </div>
  </div>
</nav>

<br/><br/>
  <div className="container text-center">
<div className=" row  row-lg-4 row-md-3 gap-3"  >
{pageinate.filter((val)=>{
if(search === "") return val;
else if (val.name.toLowerCase().includes(search.toLocaleLowerCase()))
{
  return val;
}


}).map( p=>
<div className="card" style={{width: '18rem'}} key={p.id}>
  <img src={p.mainImage.secure_url} className="ratio" alt="p-Img" />
  <div className="card-body" key={p.id}>
    <h5 className="card-title"> {p.name}</h5>
    <Link to ={`/GetProduct/${p._id}`}>
    <button href="#" className="btn ">Details</button> 
    </Link>
  </div>
</div>
)}

<nav aria-label="Page navigation example ">
        <ul className="pagination">
          {
            pages.map((page)=>(
         <li className={
page === current? "page-item active" : "page-item"

         } key={page._id}  
         
         
         >
          <p className="page-link" onClick={()=>pagination(page)}>{page}</p>
          </li>

            )

            )
          }

          
        </ul>
      </nav>
  </div>
  </div>
</>)}