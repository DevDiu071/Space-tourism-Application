import { NavLink } from "react-router-dom";

export default function CrewNav() {
  return (
    <nav className="crew-nav flex items-center mb-8 gap-x-4 justify-center md:justify-start md:mt-[150px]">
      <NavLink
        to="/crew"
        end
        className="w-3 h-3 bg-dark-gray rounded-3xl"
      ></NavLink>
      <NavLink
        to="/crew/mark"
        className="w-3 h-3 bg-dark-gray rounded-3xl"
      ></NavLink>
      <NavLink
        to="/crew/victor"
        className="w-3 h-3 bg-dark-gray rounded-3xl"
      ></NavLink>
      <NavLink
        to="/crew/anousheh"
        className="w-3 h-3 bg-dark-gray rounded-3xl"
      ></NavLink>
    </nav>
  );
}
