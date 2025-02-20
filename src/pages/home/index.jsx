import React from "react";
import { Navbar2 } from "../common/Navbar2";
import { Header5 } from "./components/Header5";
import { Header47 } from "./components/Header47";
import { Layout240 } from "./components/Layout240";
import { Layout197 } from "./components/Layout197";
import { Layout250 } from "./components/Layout250";
import { Header15 } from "./components/Header15";
import { Stats3 } from "./components/Stats3";
import { Testimonial5 } from "./components/Testimonial5";
import { Contact5 } from "./components/Contact5";
import { Cta7 } from "../common/Cta7";
import { Footer7 } from "../common/Footer7";
import {Rawcnt} from "./components/Rawcnt";
import { Whychoose } from "./components/Whychoose";

export default function Page() {
  return (
    <div>
      <Navbar2 />

      {/* Banner  */}
      <Header5 />

      {/* About     */}
      <Header47 />

      {/* Understand  */}
      <Layout240 />

      {/* Except Guides  */}
      <Layout197 />

      {/* Turuning Complex Approval  */}
      <Header15 />

      {/* quick Effictive  */}
      <Rawcnt />

      {/* Graph  */}
      <Stats3 />

      {/* Testimonial  */}
      <Testimonial5 />

      {/* WhyChoose  */}
      <Whychoose />

      {/* Blog  */}
      <Layout250 />

      {/* Form  */}
      <Contact5 />

      <Cta7 />
      <Footer7 />
    </div>
  );
}
