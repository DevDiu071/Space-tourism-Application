import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europe from "./pages/destination/Europe";
import Titan from "./pages/destination/Titan";
import Douglas from "./pages/crew/Douglas";
import Anousheh from "./pages/crew/Anousheh";
import Mark from "./pages/crew/Mark";
import Victor from "./pages/crew/Victor";
import Vehicle from "./pages/technology/Vehicle";
import Spaceport from "./pages/technology/Spaceport";
import Capsule from "./pages/technology/Capsule";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europe" element={<Europe />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="crew" element={<Crew />}>
          <Route index element={<Douglas />} />
          <Route path="anousheh" element={<Anousheh />} />
          <Route path="mark" element={<Mark />} />
          <Route path="victor" element={<Victor />} />
        </Route>
        <Route path="technology" element={<Technology />}>
          <Route index element={<Vehicle />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
        <Route
          path="*"
          element={<p className="text-2xl text-red-500">Page not found</p>}
        />
      </Routes>
    </BrowserRouter>
  );
}
