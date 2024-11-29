import { Link } from "react-router-dom";

export default function TechNav() {
  return (
    <nav className="flex items-center justify-center mt-6 gap-x-4">
      <li className="h-[40px] w-[40px] border border-gray text-white flex  justify-center items-center rounded-full ">
        <Link to="/technology/">1</Link>
      </li>
      <li className="h-[40px] w-[40px] border border-gray text-white flex  justify-center items-center rounded-full ">
        <Link to="/technology/spaceport">2</Link>
      </li>
      <li className="h-[40px] w-[40px] border border-gray text-white flex  justify-center items-center rounded-full ">
        <Link to="/technology/capsule">3</Link>
      </li>
    </nav>
  );
}
