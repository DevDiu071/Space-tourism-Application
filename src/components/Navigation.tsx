import clsx from "clsx";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(true);
  return (
    <nav className="mx-2 pt-4 pb-2">
      <div className="flex justify-between items-center">
        <img
          src="/assets/shared/logo.svg"
          alt="logo icon"
          className="w-[40px] h-[40px]"
        />
        {openNav && (
          <IoClose
            onClick={() => setOpenNav(false)}
            className="text-white text-[50px] z-50"
          />
        )}
        {!openNav && (
          <IoMdMenu
            onClick={() => setOpenNav(true)}
            className="text-white text-[50px] z-50"
          />
        )}
      </div>
      <ul
        className={clsx(
          "text-white absolute transition-all  top-0 p-4 pt-[60px] h-screen flex flex-col gap-y-6 w-[280px] bg-white/10 backdrop-blur-2xl ",
          { "right-0": openNav, "-right-[300px]": !openNav }
        )}
      >
        <li>
          <Link to="/">
            <span className="font-bold mr-2">00</span>HOME
          </Link>
        </li>
        <li>
          <Link to="/destination">
            <span className="font-bold mr-2">01</span>DESTINATION
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <span className="font-bold mr-2">02</span>CREW
          </Link>
        </li>
        <li>
          <Link to="/technology">
            <span className="font-bold mr-2">03</span>TECHNOLOGY
          </Link>
        </li>
      </ul>
    </nav>
  );
}
