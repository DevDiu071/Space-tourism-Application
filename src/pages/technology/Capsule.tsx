import TechNav from "../../components/TechNav";

export default function Capsule() {
  return (
    <div className="md:flex md:gap-x-[70px] md:items-center">
      <img
        src="/assets/technology/image-space-capsule-portrait.jpg"
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
            SPACE CAPSULE
          </h2>
          <p className="text-gray text-center px-4 md:px-0 mb-10 md:text-left md:leading-8">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
      </div>
      <img
        src="/assets/technology/image-space-capsule-portrait.jpg"
        className="md:w-[350px] mdBig:w-[400px] hidden md:block"
        alt="douglas image"
      />
    </div>
  );
}
