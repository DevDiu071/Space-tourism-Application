import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Crew() {
  return (
    <div className="bg-[url(/assets/crew/background-crew-mobile.jpg)] bg-no-repeat bg-cover bg-center h-[100vh] overflow-hidden ">
      <Navigation />
      <h2 className="text-xl my-4 text-center text-white">
        <span className="mr-4 text-gray">02</span>MEET YOUR CREW
      </h2>
      <Outlet />;
    </div>
  );
}
