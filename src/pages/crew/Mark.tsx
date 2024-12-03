import CrewNav from "../../components/CrewNav";

export default function Mark() {
  return (
    <div className="md:flex md:items-center md:justify-self-center md:pb-[60px] md:gap-x-[100px] md:mx-[80px] lg:mt-0 md:mt-[40px]">
      <div className="md:w-[500px]">
        <p className="text-lg text-gray text-center mt-10 md:text-left">
          MISSION SPECIALIST
        </p>
        <h2 className="text-white text-center text-3xl mb-6 md:text-left">
          MARK SHUTTLEWORTH
        </h2>
        <p className="text-gray text-center px-4 mb-10 md:text-left md:px-0">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </p>
        <CrewNav />
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-mark-shuttleworth.png"
          className="w-[210px] md:h-[450px] md:w-[300px] md:self-end"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
