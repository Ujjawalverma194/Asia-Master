import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PTL from "./pages/PTL";
import FTL from "./pages/FTL";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import BranchFinder from "./pages/BranchFinder";
import Shipment from "./pages/Shipment";

import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/ptl"
          element={
            <>
              <Navbar />
              <PTL />
            </>
          }
        />

        <Route
          path="/ftl"
          element={
            <>
              <Navbar />
              <FTL />
            </>
          }
        />

        <Route
          path="/career"
          element={
            <>
              <Navbar />
              <Career />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />

        <Route
          path="/track-shipment"
          element={
            <>
              <Shipment />
            </>
          }
        />

        {/* Page without Navbar */}
        <Route path="/branch" element={<BranchFinder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;