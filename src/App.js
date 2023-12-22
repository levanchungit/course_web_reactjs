import "./App.css";
import "./constants/colors.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Podcast from "./components/Podcast";
import Blog from "./components/Blog";
import FabHoiDap from "./components/FabHoiDap";
import ChiTietBaiViet from "./components/Blog/Components/ChiTietBaiViet";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainProvider } from "./contexts/MainContext";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ChiTietBaiViet />} />
          </Routes>
          <FabHoiDap />
        </BrowserRouter>
      </MainProvider>
    </div>
  );
}

export default App;
