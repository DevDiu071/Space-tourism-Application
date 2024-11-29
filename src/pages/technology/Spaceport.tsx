import TechNav from "../../components/TechNav";

export default function Spaceport() {
  return (
    <div>
      <img
        src="/assets/technology/image-spaceport-portrait.jpg"
        className="w-full h-[250px]"
        alt="douglas image"
      />

      <TechNav />
      <p className="text-lg text-gray text-center mt-10">THE TERMINOLOGY...</p>
      <h2 className="text-white text-center text-3xl mb-6">SPACEPORT</h2>
      <p className="text-gray text-center px-4 mb-10">
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch.
      </p>
    </div>
  );
}
