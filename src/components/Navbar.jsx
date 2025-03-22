import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { navItems, catItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-200/80">
      <motion.div
        className="container px-4 mx-auto relative text-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src={logo} className="h-12 w-12" alt="logo" />
            </Link>
            <Link to="/">
              <span className="text-3xl tracking-tight text-neutral-200">
                WarmHaven
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12 text-neutral-300">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline">
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}

            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                Categories <ChevronDown size={18} />
              </div>

              {dropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-[#662b12] text-neutral-300 shadow-lg rounded-md p-2 w-40">
                  {catItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-[#703921] hover:rounded-md"
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <button
              onClick={toggleSignIn}
              className="py-2 px-3 border rounded-md text-neutral-200 flex items-center gap-1 hover:bg-neutral-700/30"
            >
              <User size={16} /> {isSignedIn ? "Sign Out" : "Sign In"}
            </button>
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-amber-700 to-amber-900 py-2 px-3 rounded-md text-neutral-200 hover:text-neutral-100"
            >
              Book Now
            </Link>
          </div>

          <div className="lg:hidden md:flex flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle navigation menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#5c3220] text-neutral-200 w-full p-12 flex flex-col justify-center items-center lg:hidden tracking-wide">
            <ul>
              {navItems.map((item, index) => (
                <li className="pb-2" key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 mt-5 gap-4">
              <button
                onClick={toggleSignIn}
                className="py-2 px-3 border rounded-md text-neutral-200 flex items-center gap-1 justify-center"
              >
                <User size={16} /> {isSignedIn ? "Sign Out" : "Sign In"}
              </button>
              <Link
                to="/pricing"
                className="bg-gradient-to-r from-amber-700 to-amber-900 py-2 px-3 rounded-md text-neutral-200 hover:text-neutral-100 text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
