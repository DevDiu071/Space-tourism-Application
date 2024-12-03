import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Technology() {
  return (
    <div className="sm:pt-8 bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover bg-center h-full ">
      <Navigation />
      <h2 className="text-xl my-4 md:mt-[70px] text-center text-white sm:text-left sm:ml-6 md:ml-[200px]">
        <span className="mr-4 text-dark-gray">03</span>SPACE LAUNCH 101
      </h2>
      <Outlet />;
    </div>
  );
}
