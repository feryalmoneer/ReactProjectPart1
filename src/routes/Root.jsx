import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Components/Navbar";
export default function Root() {
  return (<>
<Navbar />
<Outlet/>
</>
)}
