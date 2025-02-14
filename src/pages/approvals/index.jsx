import React from "react";

import { Header50 } from "./components/Header50";
import { Layout1 } from "./components/Layout1";
import { Layout240 } from "./components/Layout240";
import { Layout1_1 } from "./components/Layout1_1";
import { Layout27 } from "./components/Layout27";
import { Faq8 } from "./components/Faq8";
import { Cta7 } from "./components/Cta7";


import { Navbar2 } from "../common/Navbar2";
import { Footer7 } from "../common/Footer7";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header50 />
      <Layout1 />
      <Layout240 />
      <Layout1_1 />
      <Layout27 />
      <Faq8 />
      <Cta7 />
      <Footer7 />
    </div>
  );
}
