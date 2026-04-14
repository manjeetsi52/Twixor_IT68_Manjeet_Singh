import { NavLink } from "react-router-dom";

export const NavbarDropdown = ({ label, to, items = [] }) => {
  return (
    <li className="relative group">
      
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-white pb-1" : ""
        }
      >
        {label}
      </NavLink>

      {items.length > 0 && (
        <ul className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white text-black font-semibold border-white rounded-md min-w-full overflow-hidden text-xs">
          {items.map((item, index) => (
            <li key={index} className="border border-neutral-200 ">
              <NavLink
                to={item.path}
                className="block  px-4 py-2 hover:bg-fuchsia-500 hover:text-white "
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        </ul>
      )}

    </li>
  );
};