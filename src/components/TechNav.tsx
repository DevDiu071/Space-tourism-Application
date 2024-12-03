import { Link, NavLink } from "react-router-dom";

export default function TechNav() {
  return (
    <nav className="tech-nav flex lg:flex-col items-center justify-center  mt-6 md:mt-12 gap-x-4  md:justify-start md:gap-y-8">
      <NavLink to="/technology" end>
        <li className="h-[40px] w-[40px] mdBig:h-[60px] mdBig:w-[60px] md:hover:bg-white md:hover:text-black md:transition-all border border-gray cursor-pointer text-white flex  justify-center items-center rounded-full ">
          1
        </li>
      </NavLink>
      <NavLink to="/technology/spaceport">
        <li className="h-[40px] w-[40px] mdBig:h-[60px] mdBig:w-[60px] md:hover:bg-white md:hover:text-black md:transition-all border border-gray cursor-pointer text-white flex  justify-center items-center rounded-full ">
          2
        </li>
      </NavLink>
      <NavLink to="/technology/capsule">
        <li className="h-[40px] w-[40px] mdBig:h-[60px] mdBig:w-[60px] md:hover:bg-white md:hover:text-black md:transition-all border border-gray cursor-pointer text-white flex  justify-center items-center rounded-full ">
          3
        </li>
      </NavLink>
    </nav>
  );
}
