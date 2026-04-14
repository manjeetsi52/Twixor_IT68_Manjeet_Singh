import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { NavbarDropdown } from "../components/NavDropDown";
import { useEffect, useState } from "react";
export const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-black font-poppins font-semibold text-white transition-transform duration-300 z-50 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-black  px-3 py-4 contain flex items-center justify-between ">
          <div className="border-white">
            <NavLink to={"/"}>
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
              <li className="relative group">
                <NavbarDropdown
                  label="Newsroom"
                  to="/newsroom"
                  items={[
                    { name: "Press", path: "/newsroom/#press" },
                    { name: "Media", path: "/newsroom/#media" },
                  ]}
                />
              </li>
              <li>
                <NavbarDropdown
                  label="Portfolio"
                  to="/portfolio"
                  items={[
                    { name: "Entertainment", path: "/portfolio/entertainment" },
                    { name: "Sports", path: "/portfolio/sports" },
                    {
                      name: "Consumer Products",
                      path: "/portfolio/consumer-products",
                    },
                  ]}
                />
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
                <a
                  href="https://jobs.lever.co/jiostar"
                  target="_blank"
                  className={({ isActive }) => {
                    return isActive ? "border-b-2 border-white pb-1" : "";
                  }}
                >
                  Carriers
                </a>
              </li>
              <li>
                <IoSearchSharp className="size-5" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
