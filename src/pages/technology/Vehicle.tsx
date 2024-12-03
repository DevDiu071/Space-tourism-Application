import TechNav from "../../components/TechNav";

export default function Vehicle() {
  return (
    <div className="md:flex md:gap-x-[70px] md:items-center">
      <img
        src="/assets/technology/image-launch-vehicle-portrait.jpg"
        className="w-full h-[200px] md:hidden"
        alt="douglas image"
      />
      <div className="md:flex md:flex-col lg:flex-row md:gap-x-12 md:max-w-[600px] md:ml-10 xmd:ml-auto ">
        <TechNav />
        <div>
          <p className="text-lg text-gray text-center mt-10 md:mb-3 md:text-left">
            THE TERMINOLOGY...
          </p>
          <h2 className="text-white text-center text-3xl mdBig:text-[50px] mb-6 md:text-left">
            LUANCH VEHICLE
          </h2>
          <p className="text-gray text-center px-4 md:px-0 mb-10 md:text-left md:leading-8">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
      <img
        src="/assets/technology/image-launch-vehicle-portrait.jpg"
        className="md:w-[350px] mdBig:w-[400px] hidden md:block"
        alt="douglas image"
      />
    </div>
  );
}
