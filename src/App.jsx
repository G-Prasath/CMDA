import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Approvals from "./pages/approvals";
import Clearance from "./pages/clearance";
import ContactUs from "./pages/contact-us";
import Noc from "./pages/noc";
import StructuralStability from "./pages/structural-stability";
import Aos from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/clearance" element={<Clearance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/noc" element={<Noc />} />
          <Route path="/structural-stability" element={<StructuralStability />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
