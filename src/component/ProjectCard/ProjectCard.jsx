import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ProjectCard = ({ img, name, htmlFor, liveLink, codeLink }) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="2000"
      className="card cardMain relative rounded-2xl overflow-hidden h-[300px]  glass"
    >
      <img className="h-full object-fit w-full" src={img} alt="car!" />

      <div className="displayOn flex flex-col w-full h-full items-center bg-[#7fe4c19a] justify-center text-center  absolute">
        <h2 className="text-3xl mb-4 font-extrabold">{name}</h2>

        <div className="">
          {/* The button to open modal */}
          {/* <label
            htmlFor={htmlFor}
            className=" font-bold text-lg hover:bg-primaryColor hover:text-textColor btn border-none outline-none bg-BtnColor"
          >
            Details Project
          </label> */}
          <NavLink
            target="_blank"
            to={liveLink}
            className=" font-bold text-lg mr-4 hover:bg-primaryColor hover:text-textColor btn border-none outline-none bg-BtnColor"
          >
            Live Links
          </NavLink>
          <NavLink
            target="_blank"
            to={codeLink}
            className=" font-bold text-lg hover:bg-primaryColor hover:text-textColor btn border-none outline-none bg-BtnColor"
          >
            See Code
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
