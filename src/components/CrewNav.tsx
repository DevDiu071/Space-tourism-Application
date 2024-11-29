import { NavLink } from "react-router-dom";

export default function CrewNav() {
  return (
    <nav className="flex items-center mb-8 gap-x-4 justify-center">
      <NavLink to="/crew/" className="w-3 h-3 bg-gray rounded-3xl"></NavLink>
      <NavLink
        to="/crew/mark"
        className="w-3 h-3 bg-gray rounded-3xl"
      ></NavLink>
      <NavLink
        to="/crew/victor"
        className="w-3 h-3 bg-gray rounded-3xl"
      ></NavLink>
      <NavLink
        to="/crew/anousheh"
        className="w-3 h-3 bg-gray rounded-3xl"
      ></NavLink>
    </nav>
  );
}
