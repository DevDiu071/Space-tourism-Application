import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Technology() {
  return (
    <div className="bg-[url(/assets/technology/background-technology-mobile.jpg)] bg-no-repeat bg-cover bg-center h-[100vh] overflow-hidden ">
      <Navigation />
      <h2 className="text-xl my-4 text-center text-white">
        <span className="mr-4 text-gray">03</span>SPACE LAUNCH 101
      </h2>
      <Outlet />;
    </div>
  );
}
