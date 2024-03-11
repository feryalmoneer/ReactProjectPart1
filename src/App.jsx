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
import ProtectedRoutes from "./auth/ProtectedRoutes";
import UnProtectedRoutes from "./auth/UnProtectedRoutes";
import Item from "./Item/Component/Item";
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
        element:
        < ProtectedRoutes>
        <Cart/>
       </ProtectedRoutes> ,
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
    ],
  },
]);
export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />
    </>
  )


}
