import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Approvals from './pages/approvals';
import Clearance from './pages/clearance';
import ContactUs from './pages/contact-us';
import Noc from './pages/noc';
import StructuralStability from './pages/structural-stability';

const App = () => {
  return (
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
  );
};

export default App;