import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SocialLink from "../SocialLink/SocialLink";

const Layouts = () => {
  return (
    <div className="container mx-auto playfairfonts ">
      <SocialLink></SocialLink>

      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
