import axios from 'axios';
import { useState ,  useEffect } from 'react';
import './CreateOrder.css'
export default function CreateOrder() {
  const [cart, setCart] = useState([]);

    const [orderData, setOrderData] = useState({
        couponName: '',
        address: '',
        phone : '',
      });
  
  const handelChange = (e) => {
        const { name, value } = e.target;
        setOrderData({ ...orderData, [name]: value });
      };
      const handelSubmit = async (e)=>{
        const token = localStorage.getItem('userToken');
        try{
          e.preventDefault();
         const {data} = await axios.post(`https://ecommerce-node4-five.vercel.app/order`,orderData,
          {
           headers: {
             Authorization : `Tariq__${token}`
           }
         })
        // console.log(data);
         setOrderData({
          couponName: '',
          address: '',
          phone : '',
         })
        }catch
        {
          console.log("E");
        }
       
      };
      const getCart=async ()=>{
        const token = localStorage.getItem('userToken');
    const {data} = await axios.get(`
    https://ecommerce-node4-five.vercel.app/cart`,
          {
            headers: {
              Authorization:`Tariq__${token}`
            }
          })
         console.log(data);
          setCart(data.products);
        }
      useEffect(() => {
        getCart();
      }, []);
    
  return (
    <>
    <div className="order  container ">
    <div className="d-flex  oo">
                          {
                          cart.map(item =>
                              <div className="cartItem " key={item._id}>
                                  <div >
                                      <img className='MainImage' src={item.details.mainImage.secure_url} />
                                  </div>
                              </div>
                          )}
                      </div>
<div  className='bodyss'>
<div className="l-formm">
  <form  className="form" onSubmit={handelSubmit}>
    <div className="form__div">
      <input type="text" className="form__input" placeholder=" " name=" couponName" value={orderData.couponName}  onChange={handelChange} />
      <label htmlFor="Boolean" className="form__label" > couponName</label>
    </div>
    <div className="form__div">
      <input type="text" className="form__input" placeholder=" " name='address' value={orderData.address} onChange={handelChange}  required/>
      <label htmlFor="Boolean" className="form__label">address</label>
    </div>
    <div className="form__div">
      <input type="text" className="form__input" placeholder=" "  name="phone" value={orderData.phone}  onChange={handelChange}  required/>
      <label htmlFor="Boolean" className="form__label">phone</label>
    </div>
    <input type="submit" className="formbutton"  value="Order"/>
  </form>
</div>
</div>
   </div>

    </>

  )
}
