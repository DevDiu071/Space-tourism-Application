import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Crew() {
  return (
    <div className="sm:pt-8 bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover bg-center h-full">
      <Navigation />
      <h2 className="text-xl my-4 md:mt-[70px] text-center text-white md:text-left md:ml-[80px] lg:ml-[90px] xmd:ml-[160px]">
        <span className="mr-4 text-gray">02</span>MEET YOUR CREW
      </h2>
      <Outlet />;
    </div>
  );
}
