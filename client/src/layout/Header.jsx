import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
export const Header = () => {
  return (
    <>
      <header className="bg-black text-white font-poppins font-semibold ">
        <div className="bg-black  px-3 py-4 contain flex items-center justify-between ">
          <div className="border-white">
            <NavLink to={'/'}>
              <img
                src="/images/logo/JIostarLogo.png"
                alt="jioStar"
                className="h-12"
              />
            </NavLink>
          </div>
          <nav>
            <ul className="hover:cursor-pointer flex gap-5">
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => {
                   return isActive ? "border-b-2 border-white pb-1" : "";
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/newsroom"}
                  className={({ isActive }) => {
                   return isActive ? "border-b-2 border-white pb-1" : "";
                  }}
                >
                  Newsroom
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/portfolio"}
                  className={({ isActive }) => {
                   return isActive ? "border-b-2 border-white pb-1" : "";
                  }}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/distribution"}
                  className={({ isActive }) => {
                   return isActive ? "border-b-2 border-white pb-1" : "";
                  }}
                >
                  Distribution
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/carriers"}
                  className={({ isActive }) => {
                   return isActive ? "border-b-2 border-white pb-1" : "";
                  }}
                >
                  Carriers
                </NavLink>
              </li>
              <li>
                  <IoSearchSharp className="size-5"/>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
