import { useState ,useEffect} from 'react'
import axios from 'axios'
export default function Order() {
  const [data,setData]=useState([]);

  const getData = async ()=>{
    const token = localStorage.getItem('userToken');
    const {data}= await axios.get(`https://ecommerce-node4-five.vercel.app/order`, {
    headers:{
      Authorization:`Tariq__${token}`
    } 
    });
  console.log(data);
  setData(data.orders);


  };
  useEffect( ()=>{
    getData();
  } , [])
  return (
    <>

<table className="table">
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">OrderDate</th>
      <th scope="col">OrderStatus</th>
      <th scope="col">OrderTotal</th>
    </tr>
  </thead>
  <tbody>
  {data.map( d =>
    <tr key={d._id}>
    <th scope="row">{d._id}</th>
    <td>{d.createdAt}</td>
    <td>  {d.status}</td>
    <td>{d.finalPrice}</td>
  </tr>


)}


      

  </tbody>
</table>


























    
    </>
  )
}
