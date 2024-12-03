import CrewNav from "../../components/CrewNav";

export default function Victor() {
  return (
    <div className="md:flex md:justify-self-center md:pb-[60px]  md:gap-x-[100px] md:mx-[80px] lg:mt-0 md:mt-[40px]">
      <div className="md:w-[500px] md:selft-baseline">
        <p className="text-lg text-gray text-center mt-10 md:text-left">
          PILOT
        </p>
        <h2 className="text-white text-center text-3xl mb-6 md:text-left">
          VICTOR GLOVER
        </h2>
        <p className="text-gray text-center px-4 mb-10 md:text-left md:px-0">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </p>
        <CrewNav />
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-victor-glover.png"
          className="w-[210px] md:h-[420px] md:w-[300px] md:self-end"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
