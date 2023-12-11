import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layouts = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
