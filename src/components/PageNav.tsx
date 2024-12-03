import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <ul className="page-nav text-white flex gap-x-4 justify-center md:justify-start">
        <li>
          <NavLink
            to="/destination"
            end
            className="hover:text-gray transition-all"
          >
            MOON
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination/mars"
            className="hover:text-gray transition-all"
          >
            MARS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination/europe"
            className="hover:text-gray transition-all"
          >
            EUROPE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination/titan"
            className="hover:text-gray transition-all"
          >
            TITAN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
