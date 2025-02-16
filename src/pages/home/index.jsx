import React from "react";
import { Navbar2 } from "../common/Navbar2";
import { Header5 } from "./components/Header5";
import { Header47 } from "./components/Header47";
import { Layout240 } from "./components/Layout240";
import { Layout197 } from "./components/Layout197";
import { Layout250 } from "./components/Layout250";
import { Header15 } from "./components/Header15";
import { Team17 } from "./components/Team17";
import { Stats3 } from "./components/Stats3";
import { Testimonial5 } from "./components/Testimonial5";
import { Layout90 } from "./components/Layout90";
import { Contact5 } from "./components/Contact5";
import { Cta7 } from "../common/Cta7";
import { Footer7 } from "../common/Footer7";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Header5 />
      <Header47 />
      <Layout240 />
      <Layout197 />
      <Layout250 />
      <Header15 />
      <Team17 />
      <Stats3 />
      <Testimonial5 />
      {/* <Layout90 /> */}
      <Contact5 />
      <Cta7 />
      <Footer7 />
    </div>
  );
}
