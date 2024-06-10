import { NavLink } from "react-router-dom";
import img1 from "../img/logo.avif";

const Navbar = () => {
  return (
    <div className="shadow-md w-full z-50 left-0 relative">
      <div className="font-semibold text-blue-500 sm:flex items-center justify-between bg-cyan-700 py-4 md:px-10 px-10 border-2 border-b-blue-500 space-y-2">
        <NavLink
          to="/"
          className="flex text-2xl hover:text-blue-800 items-center duration-300 ml-8 w-[5%] h-[2%]"
        >
          <img src={img1} />
        </NavLink>
        <div className="flex justify-end space-x-4">
          <NavLink
            to="/"
            className="w-20 h-11 text-white rounded-xl justify-center items-center inline-flex duration-300 hover:bg-cyan-500"
          >
            <div className="w-20 self-stretch px-2.5 justify-center items-center flex">
              <div className="px-2 justify-start items-start gap-2.5 flex">
                Home
              </div>
            </div>
          </NavLink>
          <NavLink
            to="/car"
            className="w-20 h-11 text-white rounded-xl justify-center items-center inline-flex duration-300 hover:bg-cyan-500"
          >
            <div className="w-20 self-stretch px-2.5 justify-center items-center flex">
              <div className="px-2 justify-start items-start gap-2.5 flex">
                Cars
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/about-us"
            className="w-30 h-11 text-white rounded-xl justify-center items-center inline-flex duration-300 hover:bg-cyan-500"
          >
            <div className="w-30 self-stretch px-2.5 justify-center items-center flex">
              <div className="px-2 justify-start items-start gap-2.5 flex">
                About-us
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
