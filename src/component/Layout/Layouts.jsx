import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import SocialLink from "../SocialLink/SocialLink";

const Layouts = () => {
  return (
    <div className="container mx-auto playfairfonts ">
      <div className="container mx-auto">{/* <SocialLink></SocialLink> */}</div>

      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
