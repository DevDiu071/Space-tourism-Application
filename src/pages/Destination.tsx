import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Destination() {
  return (
    <div className="sm:pt-8 bg-[url(/assets/destination/background-destination-mobile.jpg)] h-full md:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover bg-center">
      <Navigation />
      <h2 className="text-xl my-4 text-center md:text-left md:ml-[160px] text-white mt-10 md:mt-[70px]">
        <span className="mr-4 text-gray mt-10">01</span>PICK YOUR DESTINATION
      </h2>
      <Outlet />;
    </div>
  );
}
