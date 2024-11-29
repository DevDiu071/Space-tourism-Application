import CrewNav from "../../components/CrewNav";

export default function Anousheh() {
  return (
    <div>
      <p className="text-lg text-gray text-center mt-10">FLIGHT ENGINEER</p>
      <h2 className="text-white text-center text-3xl mb-6">ANOUSHEH ANSARI</h2>
      <p className="text-gray text-center px-4 mb-10">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
        Systems. Ansari was the fourth self-funded space tourist, the first
        self-funded woman to fly to the ISS, and the first Iranian in space.
      </p>
      <CrewNav />
      <div className="flex justify-center">
        <img
          src="/assets/crew/image-anousheh-ansari.png"
          className="w-[210px]"
          alt="douglas image"
        />
      </div>
    </div>
  );
}
