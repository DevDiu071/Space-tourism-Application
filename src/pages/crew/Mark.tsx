import CrewNav from "../../components/CrewNav";

export default function Mark() {
  return (
    <div>
      <p className="text-lg text-gray text-center mt-10">MSSION SPECIALIST</p>
      <h2 className="text-white text-center text-3xl mb-6">
        MARK SHUTTLEWORTH
      </h2>
      <p className="text-gray text-center px-4 mb-10">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth
        became the first South African to travel to space as a space tourist.
      </p>
      <CrewNav />
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-mark-shuttleworth.png"
          className="w-[210px]"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
