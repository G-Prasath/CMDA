import React from "react";
import { Navbar2 } from "../common/Navbar2";
import { Header69 } from "./components/Header69";
import { Layout1 } from "./components/Layout1";
import { Layout194 } from "./components/Layout194";
import { Layout3 } from "./components/Layout3";
import { Layout194_1 } from "./components/Layout194_1";
import { Layout50 } from "./components/Layout50";
import { Layout201 } from "./components/Layout201";
import { Layout16 } from "./components/Layout16";
import { Layout249 } from "./components/Layout249";
import { Faq5 } from "./components/Faq5";
import { Stats1 } from "./components/Stats1";
import { Cta7 } from "../common/Cta7";
import { Footer7 } from "../common/Footer7";
import Meetteam from "./components/Meetteam";
import { Appart } from "./components/Appart";

export default function Page() {
  return (
    <div>
      <Navbar2 />

      {/* Banner  */}
      <Header69 />

      {/* Profile  */}
      <Layout1 />

      {/* Vision  */}
      <Layout194 />

      {/* Mission  */}
      <Layout3 />

      {/* Price for Customer  */}
      <Layout194_1 />

      {/* Key Points  */}
      <Layout50 />

      {/* Our Story  */}
      <Layout201 />

      {/* What we  Do  */}
      <Layout249 />

      {/* Success story  */}
      <Layout16 />

      {/* Our Team  */}
      <Meetteam />

      {/* Aprts  */}
      <Appart />

      <Cta7 />
      <Footer7 />
    </div>
  );
}
