import CrewNav from "../../components/CrewNav";

export default function Douglas() {
  return (
    <div className="md:flex md:items-center md:justify-self-center md:pb-[60px] md:gap-x-[100px] md:mx-[80px] lg:mt-0  md:mt-[40px]">
      <div className="md:w-[500px]">
        <p className="text-lg text-gray text-center mt-10 md:text-left">
          COMMANDER
        </p>
        <h2 className="text-white text-center text-3xl mb-6 md:text-left">
          DOUGLAS HARLEY
        </h2>
        <p className="text-gray text-center px-4 mb-10 md:text-left md:px-0">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
        <CrewNav />
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-douglas-hurley.png"
          className="w-[210px] md:h-[420px] md:w-[300px]"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
