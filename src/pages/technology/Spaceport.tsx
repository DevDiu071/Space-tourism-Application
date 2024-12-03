import TechNav from "../../components/TechNav";

export default function Spaceport() {
  return (
    <div className="md:flex md:gap-x-[70px] md:items-center">
      <img
        src="/assets/technology/image-spaceport-landscape.jpg"
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
            SPACEPORT
          </h2>
          <p className="text-gray text-center px-4 md:px-0 mb-10 md:text-left md:leading-8">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </div>
      </div>
      <img
        src="/assets/technology/image-spaceport-portrait.jpg"
        className="md:w-[350px] mdBig:w-[400px] hidden md:block"
        alt="douglas image"
      />
    </div>
  );
}
