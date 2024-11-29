import CrewNav from "../../components/CrewNav";

export default function Victor() {
  return (
    <div>
      <p className="text-lg text-gray text-center mt-10">PILOT</p>
      <h2 className="text-white text-center text-3xl mb-6">VICTOR GLOVER</h2>
      <p className="text-gray text-center px-4 mb-10">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy
        where he pilots an F/A-18.He was a crew member of Expedition 64, and
        served as a station systems flight engineer.
      </p>
      <CrewNav />
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-victor-glover.png"
          className="w-[210px]"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
