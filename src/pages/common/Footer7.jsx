import React from "react";
import FloatingButtons from "./FloatingButtons";
import { Link } from "react-router-dom";
import Reveal from "../../assets/hooks/Reveal";

export function Footer7() {
  return (
    <div>
      <footer
        id="relume"
        className="px-[5%] py-12 md:py-18 lg:py-20 bg-thired_clr text-white"
      >
        <div className="container">
          <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
            <Reveal direction="top">
              <Link to="#" className="mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </Link>
            </Reveal>
            <Reveal direction="bottom">
              <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
                <li className="font-semibold">
                  <Link to="#">Home Page</Link>
                </li>
                <li className="font-semibold">
                  <Link to="#">About Us</Link>
                </li>
                <li className="font-semibold">
                  <Link to="#">Approvals Info</Link>
                </li>
                <li className="font-semibold">
                  <Link to="#">Clearance Process</Link>
                </li>
                <li className="font-semibold">
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal direction="bottom">
            <div className="h-px w-full bg-white" />
            <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
              <p className="mt-8 md:mt-0">
                © 2024 Your Company. All rights reserved.
              </p>
              <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
                <li className="underline decoration-black underline-offset-1">
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li className="underline decoration-black underline-offset-1">
                  <Link to="#">Terms of Service</Link>
                </li>
                <li className="underline decoration-black underline-offset-1">
                  <Link to="#">Cookie Settings</Link>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </footer>

      {/* // Floating Buttons  */}
      <FloatingButtons />
    </div>
  );
}
