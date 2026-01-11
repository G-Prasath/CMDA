import React from "react";
import { Navbar2 } from "../common/Navbar2";
import { Header54 } from "./components/Header54";
import { Contact17 } from "./components/Contact17";
import { Contact1 } from "./components/Contact1";
// import { Contact25 } from "./components/Contact25";
import { Cta7 } from "../common/Cta7";
import { Footer7 } from "../common/Footer7";

import { Helmet } from "react-helmet-async";
import { ContactMeta as metaTags } from "../../assets/data/Metadata";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <Navbar2 />
      <Header54 />
      <Contact17 />
      <Contact1 />
      {/* <Contact25 /> */}
      <Cta7 />
      <Footer7 />
    </>
  );
}
