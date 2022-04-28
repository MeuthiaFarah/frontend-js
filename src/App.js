import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/create" element={<CreateMovie />} />
        <Route path="/movie/popular" element={<Popular />} />
        <Route path="/movie/now" element={<NowPlaying />} />
        <Route path="/movie/top" element={<TopRated />} />
      </Routes>
    </>
  );
}

export default App;
