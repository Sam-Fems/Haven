import React from "react";
import Executive1 from "../assets/executive(1).png";
import Executive2 from "../assets/executive(2).png";
import Executive3 from "../assets/executive(3).png";
import Executive4 from "../assets/executive(4).png";
import Executive5 from "../assets/executive(5).png";
import Executive6 from "../assets/executive(6).png";
import { motion, useScroll } from "framer-motion";

const LuxuryRooms = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            originX: 0,
            backgroundColor: "#522c1c",
            zIndex: 50,
          }}
        />

        <h1 className="text-5xl text-center mt-10">
          <span className="bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text">
            Luxury
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
            Rooms
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-15 ml-15 mb-5 mt-5 max-sm:grid-cols-1 max-sm:mr-10 sm:mr-10">
          <div>
            <img className="rounded-md" src={Executive1} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Presidential Luxury
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Executive2} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Executive Royal Luxury
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Executive3} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              King Royal Luxury
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Executive4} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Ambassador Luxury
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Executive5} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Business Luxury
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Executive6} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Double Bed Luxury Room
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryRooms;
