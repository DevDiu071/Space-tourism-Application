import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="bg-[url(/assets/home/background-home-mobile.jpg)] bg-no-repeat bg-cover h-[100vh] overflow-hidden">
      <Navigation />
      <div>
        <div className="text-gray text-center">
          <p className="text-lg"> SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-[80px] text-white">SPACE</h1>
          <p className="px-4">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center mt-[80px] pb-[100px] ">
          <button className="text-xl  flex justify-center items-center bg-white p-8 rounded-full w-[120px] h-[120px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
