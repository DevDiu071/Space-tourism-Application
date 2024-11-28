import PageNav from "../../components/PageNav";

export default function Titan() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <img
          src="/assets/destination/image-titan.png"
          alt="mars image"
          className="w-[140px] mb-10 mt-8 "
        />
      </div>
      <PageNav />
      <h2 className="text-[50px] text-center mt-3 text-white">TITAN</h2>
      <p className="text-gray px-4 text-center">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className="text-gray mx-6 mt-6" />
      <p className="text-sm text-gray text-center mt-4">AVG. DISTANCE</p>
      <p className="text-3xl text-white text-center">1.6 BIL KM</p>
      <p className="text-center text-gray mt-4">Est. travel time</p>
      <p className="text-3xl text-center text-gray">7 YEARS</p>
    </div>
  );
}
