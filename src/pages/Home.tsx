import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="sm:pt-10 bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-desktop.jpg)] md:pb-[80px] md:h-screen bg-no-repeat bg-cover">
      <Navigation />
      <div className="md:grid md:grid-cols-[2fr_1fr] md:items-center md:mx-10 md:gap-x-[130px] mdBig:mx-auto  md:mt-[200px] md:max-w-[900px]">
        <div className="text-gray text-center md:text-left ">
          <p className="text-lg"> SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-[80px] text-white tracking-wider">SPACE</h1>
          <p className="px-4 md:px-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center md:hidden mt-[80px] md:mt-0 pb-[100px] ">
          <Link
            to="/destination"
            className="text-xl flex justify-center items-center bg-white p-8 rounded-full md:w-[160px] md:h-[160px] w-[120px] h-[120px]"
          >
            Explore
          </Link>
        </div>
        <div className="hidden md:flex mt-[80px] md:mt-0 pb-[100px] md:pb-0">
          <Link
            to="/destination"
            className="text-xl flex justify-center items-center bg-white hover:bg-gray transition-all p-8 rounded-full md:w-[160px] md:h-[160px] xmd:h-[180px] xmd:w-[180px] w-[120px] h-[120px]"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
