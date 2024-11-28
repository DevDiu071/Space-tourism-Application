import PageNav from "../../components/PageNav";

export default function Moon() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <img
          src="/assets/destination/image-moon.png"
          alt="mars image"
          className="w-[140px] mb-10 mt-8 "
        />
      </div>
      <PageNav />
      <h2 className="text-[50px] text-center mt-3 text-white">MOON</h2>
      <p className="text-gray px-4 text-center">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="text-gray mx-6 mt-6" />
      <p className="text-sm text-gray text-center mt-4">AVG. DISTANCE</p>
      <p className="text-3xl text-white text-center">384,400 KM</p>
      <p className="text-center text-gray mt-4">Est. travel time</p>
      <p className="text-3xl text-center text-gray">3 DAYS</p>
    </div>
  );
}
