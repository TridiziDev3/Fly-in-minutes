import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import SlickCarousel from "./Components/SlickCarousel/SlickCarousel";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/carousel" element={<SlickCarousel/>}/>
      </Routes>
      <div className="app_footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
