import logo from "../../assets/_-removebg-preview.png";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const NavLinks = (
    <>
      <HashLink to="/" className="font-bold text-lg text-textColor">
        Home
      </HashLink>

      <HashLink to="#skills" className="font-bold text-lg text-textColor">
        Skills
      </HashLink>

      <HashLink to="#projects" className="font-bold text-lg text-textColor">
        Projects
      </HashLink>

      <HashLink to="#contactme" className="font-bold text-lg text-textColor">
        Contact Me
      </HashLink>

      {/* <NavLink className="font-bold text-lg text-textColor">About</NavLink> */}
    </>
  );

  return (
    <div className="px-5 z-50 justify-between navbar drop-shadow-lg bg-primaryColor relative">
      <div className=" ">
        <a className=" h-20 w-20 ">
          <img className="h-full w-full" src={logo} alt="" />
        </a>
      </div>
      <div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1 items-center">
            {NavLinks}
          </ul>
        </div>
        <div className=" dropdown  dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  bg-primaryColor drop-shadow-2xl dropdown-content mt-7 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
