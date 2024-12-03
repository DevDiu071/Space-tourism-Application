import PageNav from "../../components/PageNav";

export default function Moon() {
  return (
    <div className="md:grid md:grid-cols-[2fr_1fr] md:items-center md:pb-[60px] md:gap-x-[40px] md:mx-[50px] xmd:mx-[150px]  md:mt-[60px]">
      <div className="flex md:block justify-center md:justify-start">
        <img
          src="/assets/destination/image-moon.png"
          alt="mars image"
          className=" w-[140px] mb-10 md:mb-0 md:mt-0 mt-8 md:w-[350px]"
        />
      </div>

      <div>
        <PageNav />
        <h2 className="text-[50px] text-center mt-3 text-white md:text-left">
          MOON
        </h2>
        <p className="text-gray px-4 text-center md:text-left sm:px-6 md:px-0">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <hr className="text-gray mx-6 md:mx-0 mt-6 md:w-[500px]" />
        <div className="md:flex md:items-center  md:justify-start md:gap-x-[80px]">
          <div>
            <p className="text-sm text-dark-gray text-center mt-4 md:text-left">
              AVG. DISTANCE
            </p>
            <p className="text-3xl text-white text-center">384,400 KM</p>
          </div>
          <div>
            <p className="text-center text-dark-gray mt-4 md:text-left">
              Est. travel time
            </p>
            <p className="text-3xl text-center text-gray">3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
