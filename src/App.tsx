import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Moon from "./pages/destination/Moon";
import Mars from "./pages/destination/Mars";
import Europe from "./pages/destination/Europe";
import Titan from "./pages/destination/Titan";

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
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route
          path="*"
          element={<p className="text-2xl text-red-500">Page not found</p>}
        />
      </Routes>
    </BrowserRouter>
  );
}
