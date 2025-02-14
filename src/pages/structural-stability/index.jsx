import React from "react";
import { Header46 } from "./components/Header46";
import { Layout12 } from "./components/Layout12";
import { Layout246 } from "./components/Layout246";
import { Layout18 } from "./components/Layout18";
import { Layout118 } from "./components/Layout118";
import { Testimonial1 } from "./components/Testimonial1";
import { Cta13 } from "./components/Cta13";

import { Navbar2 } from "../common/Navbar2";
import { Footer7 } from "../common/Footer7";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header46 />
      <Layout12 />
      <Layout246 />
      <Layout18 />
      <Layout118 />
      <Testimonial1 />
      <Cta13 />
      <Footer7 />
    </div>
  );
}
