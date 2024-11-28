import PageNav from "../../components/PageNav";

export default function Mars() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <img
          src="/assets/destination/image-mars.png"
          alt="mars image"
          className="w-[140px] mb-10 mt-8 "
        />
      </div>
      <PageNav />
      <h2 className="text-[50px] text-center mt-3 text-white">MARS</h2>
      <p className="text-gray px-4 text-center">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <hr className="text-gray mx-6 mt-6" />
      <p className="text-sm text-gray text-center mt-4">AVG. DISTANCE</p>
      <p className="text-3xl text-white text-center">225 MIL. KM</p>
      <p className="text-center text-gray mt-4">Est. travel time</p>
      <p className="text-3xl text-center text-gray">9 MONTHS</p>
    </div>
  );
}
