import TechNav from "../../components/TechNav";

export default function Vehicle() {
  return (
    <div>
      <img
        src="/assets/technology/image-launch-vehicle-portrait.jpg"
        className="w-full h-[250px]"
        alt="douglas image"
      />

      <TechNav />
      <p className="text-lg text-gray text-center mt-10">THE TERMINOLOGY...</p>
      <h2 className="text-white text-center text-3xl mb-6">LUANCH VEHICLE</h2>
      <p className="text-gray text-center px-4 mb-10">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </div>
  );
}
