import React from "react";
import Luxury1 from "../assets/luxury(1).png";
import Luxury2 from "../assets/luxury(2).png";
import Luxury3 from "../assets/luxury(3).png";
import Exterior1 from "../assets/exterior(1).png";
import Exterior2 from "../assets/exterior(2).png";
import Exterior6 from "../assets/exterior(6).png";
import { motion, useScroll } from "framer-motion";

const Decors = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#522c1c",
          zIndex: 50,
        }}
      />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-center text-4xl sm:text-3xl md:text-6xl mb-10">
          <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 text-transparent bg-clip-text">
            Our Interior
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
            Designs
          </span>
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 mb-16">
          <img className="rounded-md" src={Luxury1} alt="Luxury Design 1" />
          <img className="rounded-md" src={Luxury2} alt="Luxury Design 2" />
          <img className="rounded-md" src={Luxury3} alt="Luxury Design 3" />
        </section>

        <h1 className="text-center text-4xl sm:text-3xl md:text-6xl mb-10">
          <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 text-transparent bg-clip-text">
            Our Exterior
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
            Designs
          </span>
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          <img className="rounded-md" src={Exterior1} alt="Exterior Design 1" />
          <img className="rounded-md" src={Exterior2} alt="Exterior Design 2" />
          <img className="rounded-md" src={Exterior6} alt="Exterior Design 3" />
        </section>
      </div>
    </>
  );
};

export default Decors;
