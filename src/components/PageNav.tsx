import { Link } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <ul className="text-white flex gap-x-4 justify-center">
        <li>
          <Link to="/destination/">MOON</Link>
        </li>
        <li>
          <Link to="/destination/mars">MARS</Link>
        </li>
        <li>
          <Link to="/destination/europe">EUROPE</Link>
        </li>
        <li>
          <Link to="/destination/titan">TITAN</Link>
        </li>
      </ul>
    </nav>
  );
}
