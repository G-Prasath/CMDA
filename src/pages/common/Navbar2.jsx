import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { ScrollContext } from '../../assets/hooks/ScrollContext';

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Approvals", path: "/approvals" },
  { name: "Clearance", path: "/clearance" },
  { name: "NOC", path: "/noc" },
  { name: "Structural Stability", path: "/structural-stability" },
  { name: "Contact Us", path: "/contact-us" },
];

export function Navbar2() {
  const { formElement } = useContext(ScrollContext);

  const scrollToForm = () => {
    if (formElement.current) {
      formElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="flex w-full items-center border-b border-blue-500 bg-background-primary lg:min-h-18 lg:px-[5%] sticky top-0 z-50"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link to="https://www.revovest.in/">
            <img
              src="/logo.jpeg"
              alt="Logo image"
              className="w-[100px]"
            />
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
                    {navbarLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 border-2 border-b-blue-500 border-t-0 border-l-0 border-r-0 text-blue-500 rounded-sm transition duration-300 font-semibold"
                  : "block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 transition duration-300 hover:text-blue-500"
              }
            >
              {link.name}
            </NavLink>
          ))}

        </motion.div>
        <div className="hidden justify-self-end lg:block">
          <Button onClick={scrollToForm} className="px-6 py-2 font-semibold rounded-md bg-primary_clr hover:bg-primary_clr/90" title="Get a Quote" size="sm">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
