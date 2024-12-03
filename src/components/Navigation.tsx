import clsx from "clsx";
import { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <nav className="mx-2 sm:mx-0 pt-4 sm:pt-0 pb-2 lg:py-4 sm:flex sm:justify-between sm:fixed sm:top-0 sm:right-0">
      <div className="flex justify-between md:justify-between items-center">
        <Link to="/">
          <img
            src="/assets/shared/logo.svg"
            alt="logo icon"
            className="w-[40px] h-[40px] sm:ml-4 lg:ml-2 sm:mr-[70px] md:mr-[100px] "
          />
        </Link>
        {openNav && (
          <IoClose
            onClick={() => setOpenNav(false)}
            className="text-white text-[50px] sm:hidden transition-all z-50"
          />
        )}
        {!openNav && (
          <IoMdMenu
            onClick={() => setOpenNav(true)}
            className="text-white text-[50px] sm:hidden transition-all z-50"
          />
        )}
      </div>
      <ul
        className={clsx(
          "main-nav text-white fixed transition-all sm:hidden top-0  p-4 pt-[60px] h-screen flex flex-col gap-y-6 w-[280px] bg-white/10 backdrop-blur-2xl ",
          {
            "right-0": openNav,
            "-right-[300px]": !openNav,
          }
        )}
      >
        <li onClick={(e) => e.stopPropagation()}>
          <NavLink to="/" end>
            <span className="font-bold mr-2">00</span>HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            <span className="font-bold mr-2">01</span>DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            <span className="font-bold mr-2">02</span>CREW
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            <span className="font-bold mr-2">03</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>
      <div className="flex">
        <hr className="hidden mdBig:block text-dark-gray mx-6 md:mx-0 mt-6 md:w-[200px] lg:w-[350px] xmd:w-[450px]" />
        <ul
          className={clsx(
            "main-nav text-white  transition-all hidden md:px-10 px-4 py-6 lg:py-4 sm:items-center sm:pl-[50px] md:pl-[100px] sm:flex sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-x-6 bg-white/10 backdrop-blur-2xl "
          )}
        >
          <li>
            <NavLink to="/" end className="hover:text-gray transition-all">
              <span className="font-bold mr-2 sm:hidden">00</span>HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="hover:text-gray transition-all"
            >
              <span className="font-bold mr-2">01</span>DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="hover:text-gray transition-all">
              <span className="font-bold mr-2">02</span>CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="hover:text-gray transition-all"
            >
              <span className="font-bold mr-2">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
