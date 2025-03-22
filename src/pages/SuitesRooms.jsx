import Suite1 from "../assets/suite(1).png";
import Suite2 from "../assets/suite(2).png";
import Suite3 from "../assets/suite(3).png";
import Suite4 from "../assets/suite(4).png";
import { motion, useScroll } from "framer-motion";

const SuitesRooms = () => {
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
            Suites
          </span>{" "}
          <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
            Rooms
          </span>
        </h1>
        <div className="grid grid-cols-2 gap-10 ml-10 mt-5 mb-5 lg:ml-20 max-lg:ml-15 sm:mr-15 max-sm:mr-10 max-sm:grid-cols-1">
          <div>
            <img className="rounded-md" src={Suite1} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Deluxe Two Suite Room
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Suite2} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Family Suite Room
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Suite3} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Royal Suite Room
            </p>
          </div>
          <div>
            <img className="rounded-md" src={Suite4} alt="" />
            <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Ambassador Suite Room
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuitesRooms;
