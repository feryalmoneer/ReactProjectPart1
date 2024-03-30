import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Components/Navbar";
import Footer from "../Footer/Footer";
export default function Root() {
  return (<>
<Navbar />
<Outlet/>
< Footer/>
</>
)}
