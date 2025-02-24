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

import ScrolltoTop from "./assets/hooks/ScrolltoTop";
import { ScrollProvider } from './assets/hooks/ScrollContext';


const App = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <ScrollProvider>
      <HelmetProvider>
        <Router>
          <ScrolltoTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/clearance" element={<Clearance />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/noc" element={<Noc />} />
            <Route
              path="/structural-stability"
              element={<StructuralStability />}
            />
          </Routes>
        </Router>
      </HelmetProvider>
    </ScrollProvider>
  );
};

export default App;
