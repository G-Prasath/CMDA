import React from "react";

import { Navbar2 } from "../common/Navbar2";
import {Layout118} from "./components/Layout118.jsx"
import { Cta7 } from "../common/Cta7";
import { Footer7 } from "../common/Footer7";

import Banner from "../services/Banner";
import Forms from "../services/Forms";
import Profile from "../services/Profile";
import Whychoose from "../services/Whychoose";
import Testimonial from "../services/Testimonial";

import { StibilityData as allData } from "../../assets/data/Services.js";
import { StibilityMeta as metaTags } from "../../assets/data/Metadata.js";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <Navbar2 />
      <Banner data={allData.Banner} />
      <Profile data={allData.Profile} />

      <Layout118 data={allData.points} />

      <Whychoose data={allData.Whychoose} />
      <Testimonial data={allData.Testimonials} />
      <Forms />
      <Cta7 />
      <Footer7 />
    </div>
  );
}
