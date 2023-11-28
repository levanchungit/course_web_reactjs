import "./App.css";
import "./constants/colors.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Podcast from "./components/Podcast";
import Blog from "./components/Blog";
import FabHoiDap from "./components/FabHoiDap";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MediaQueryProvider } from "./contexts/MediaQueryContext";

function App() {
  return (
    <div className="App">
      <MediaQueryProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <FabHoiDap />
        </BrowserRouter>
      </MediaQueryProvider>
    </div>
  );
}

export default App;
