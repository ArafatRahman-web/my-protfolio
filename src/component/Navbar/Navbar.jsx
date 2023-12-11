import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = (
    <>
      <NavLink to="/" className="font-bold text-lg ">
        Home
      </NavLink>

      <NavLink to="skills" className="font-bold text-lg ">
        Skills
      </NavLink>

      <NavLink to="projects" className="font-bold text-lg ">
        Projects
      </NavLink>

      <NavLink className="font-bold text-lg ">Contact Me</NavLink>

      <NavLink className="font-bold text-lg ">About</NavLink>
    </>
  );

  return (
    <div className="px-5  justify-between navbar drop-shadow-lg bg-primaryColor">
      <div className=" ">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <a className=" h-20 w-20 ">
          <img
            className="h-full w-full"
            src="/src/assets/_-removebg-preview.png"
            alt=""
          />
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1 items-center">
          {NavLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
