import { NavLink } from "react-router-dom";
import { footerLinks } from "../utils/Data/data";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="p-5 border-t-2 font-semibold">
        <div className="flex flex-col contain ">
          <div>
              <img
                src="https://www.jiostar.com/wp-content/themes/jio-star/assets/images/jiostarbandlogo.png"
                alt="Jiostar"
                className="w-80"
              ></img>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-10 mt-4">
            <div>
              <h3 className="font-bold mb-2">About Us</h3>
              <p className="text-sm">
                Perched firmly at the nucleus of spellbinding content and
                innovative technology, JioStar is a leading global media &
                entertainment company that is reimagining the way audiences
                consume entertainment and sports. Its television network and
                streaming service together reach more than 750 million viewers
                every week, igniting the dreams and aspirations of hundreds of
                million people across geographies.
              </p>
            </div>

            <div className="ml-20">
              <h3 className="font-bold mb-2 ">Quick Links</h3>
              <div className="flex flex-col text-sm">
                {footerLinks.map((link, idx) => (
                  <NavLink
                    key={idx}
                    to={link.path}
                    className={({ isActive }) =>
                      `pb-1  ${
                        isActive ? "text-[#d50e8d] font-bold" : "border-transparent"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <ul className="text-sm list-none">
                <li>Urmi Estate,</li>
                <li> 95, Ganpatrao Kadam Marg, </li>
                <li>Lower Parel (West),</li>
                <li> Mumbai - 400013, India.</li>
                <li> CIN : U72300MH1994PTCO76485</li>
                <li className="text-white">.</li>
                <li className="text-white">.</li>
                <li> +91 22 6630 5555</li>
                <li>hello@jiostar.com</li>
              </ul>
            </div>
            <p>All Rights Reserved | Copyright 2026</p>
            <div></div>
            <div className="flex gap-5 ">
              <a href="">
                <AiFillInstagram />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
