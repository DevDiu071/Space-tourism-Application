import CrewNav from "../../components/CrewNav";

export default function Douglas() {
  return (
    <div>
      <p className="text-lg text-gray text-center mt-10">COMMANDER</p>
      <h2 className="text-white text-center text-3xl mb-6">DOUGLAS HARLEY</h2>
      <p className="text-gray text-center px-4 mb-10">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
        and former NASA astronaut. He launched into space for the third time as
        commander of Crew Dragon Demo-2.
      </p>
      <CrewNav />
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-douglas-hurley.png"
          className="w-[210px]"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
