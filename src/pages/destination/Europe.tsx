import PageNav from "../../components/PageNav";

export default function Europe() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <img
          src="/assets/destination/image-europa.png"
          alt="mars image"
          className="w-[140px] mb-10 mt-8 "
        />
      </div>
      <PageNav />
      <h2 className="text-[50px] text-center mt-3 text-white">EUROPE</h2>
      <p className="text-gray px-4 text-center">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
      <hr className="text-gray mx-6 mt-6" />
      <p className="text-sm text-gray text-center mt-4">AVG. DISTANCE</p>
      <p className="text-3xl text-white text-center">628 KM</p>
      <p className="text-center text-gray mt-4">Est. travel time</p>
      <p className="text-3xl text-center text-gray">3 YEARS</p>
    </div>
  );
}
