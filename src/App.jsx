import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import "./index.css";

import Home from "./pages/Home/Components/Home";
import Products from "./pages/Prouducts/Components/Products";
import Cart from "./pages/Cart/Components/Cart";
import Categories from "./pages/Categories/Components/Categories";
import Signup from "./pages/Signup/Components/signup";
import SginIn from "./pages/SignIn/Components/SginIn";
import Hero from "./pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Categories",
        element: <Categories />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/SignIn",
        element: <SginIn />,
      },
      {
        path: "Hero",
        element: <Hero />,
      },
    ],
  },
]);
export default function App() {
  //console.log(import.meta.env.VITE_URL);
  return <RouterProvider router={router} />;
}
