import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import PTL from "./pages/PTL"
import FTL from "./pages/FTL"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Navbar from "./components/Header/Navbar"
import BranchFinder from "./pages/BranchFinder";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ptl" element={<PTL/>} />
        <Route path="/ftl" element={<FTL/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/branch" element={<BranchFinder/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;