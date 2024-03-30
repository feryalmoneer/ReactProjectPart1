import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/Components/Home";
import Signup from "./pages/Signup/Components/signup";
import SginIn from "./pages/SignIn/Components/SginIn";
import Hero from "./pages/Hero";
import Categories from "./pages/Categories/Components/Categories";
import Cart from "./pages/Cart/Components/Cart";
import Products from "./pages/Prouducts/Components/Products";
//import ProtectedRoutes from "./auth/ProtectedRoutes";
import Item from "./Item/Component/Item";
import ForgetPassword from "./pages/ForgetPassword/Components/ForgetPassword";
import SendCode from "./pages/SendCode/Components/SendCode";
import GetProduct from "./pages/GetProduct/Component/GetProduct";
import CreateOrder from "./CreateOrder/Component/CreateOrder";
import { MyContextProvider } from "./context/CartQy";
import About from "./pages/About/Component/About";
import Profile from "./Profile/Profile";
import Order from './Order/Component/Order';
import Address from './Address/Components/Address';
import Reviwe from "./Reviwe/Component/Review";
import Footer from "./Footer/Footer";
import UserInfoProvider from "./context/Lo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",element: <Home />,
      },
      {
        path:"/Products", element: < Products /> ,
      },
      {
        path:"/Item/:id" , element:< Item />
      },
      {
        path: "/Cart",
        element:<Cart/>
      },
      {
        path: "/Categories", element: <Categories/>,
      },
      {
        path: "/signup",
        element:
        <Signup/>
      },
      {
        path: "/SignIn", element:
         <SginIn/> ,
      },
      {
        path: "Hero",element: <Hero/>,
      },
      
      {
        path: "/ForgetPassword",element: <ForgetPassword/>,
      },
      
      {
        path: "/SendCode",element: < SendCode/>,
      },
      {
        path: "/GetProduct/:id",element: 

  <  GetProduct />
      ,
      },
      {
        path: "/CreateOrder",element: < CreateOrder /> ,
      },
      {
        path: "/Revwie",element: <Reviwe /> ,
      },
      {
        path: "/Footer",element: <Footer/> ,
      },
      {
        path:"/Profile",
         element :<Profile/>,
        children:[
      {
     path :'/Profile/' ,
     element:<About/> } ,
        {

          path :'/Profile/Order' , element:<Order/>     
        
        } ,
  
        {

          path :'/Profile/Address' , element:< Address/>     
        
        } ,

        ],
      },
    ],
  },
]);
export default function App() {
  return (
<UserInfoProvider>
<MyContextProvider>
<RouterProvider router={router} />
<ToastContainer />
</MyContextProvider>
</UserInfoProvider>

     )


}
{/**  element:
        < ProtectedRoutes>
        <Cart/>
       </ProtectedRoutes> ,
      } */}