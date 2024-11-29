import TechNav from "../../components/TechNav";

export default function Capsule() {
  return (
    <div className="overflow-hidden">
      <img
        src="/assets/technology/image-space-capsule-portrait.jpg"
        className="w-full h-[250px]"
        alt="douglas image"
      />

      <TechNav />
      <p className="text-lg text-gray text-center mt-10">THE TERMINOLOGY...</p>
      <h2 className="text-white text-center text-3xl mb-6">SPACE CAPSULE</h2>
      <p className="text-gray text-center px-4 mb-10">
        A space capsule is an often-crewed spacecraft that uses a blunt-body
        reentry capsule to reenter the Earth's atmosphere without wings. Our
        capsule is where you'll spend your time during the flight. It includes a
        space gym, cinema, and plenty of other activities to keep you
        entertained.
      </p>
    </div>
  );
}
