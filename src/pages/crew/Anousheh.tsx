import CrewNav from "../../components/CrewNav";

export default function Anousheh() {
  return (
    <div className="md:flex md:items-center md:justify-self-center md:pb-[60px] md:gap-x-[100px] md:mx-[80px] lg:mt-0 lg:mt-0 md:mt-[40px]">
      <div className="md:w-[500px]">
        <p className="text-lg text-gray text-center mt-10 md:text-left">
          SPECIALIST
        </p>
        <h2 className="text-white text-center text-3xl mb-6 md:text-left">
          ANOUSHEH ANSARI
        </h2>
        <p className="text-gray text-center px-4 mb-10 md:text-left md:px-0">
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </p>
        <CrewNav />
      </div>
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-anousheh-ansari.png"
          className="w-[210px] md:h-[420px] md:w-[300px] md:self-end"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
