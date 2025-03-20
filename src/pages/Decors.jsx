import React from "react";
import Luxury1 from "../assets/luxury(1).png";
import Luxury2 from "../assets/luxury(2).png";
import Luxury3 from "../assets/luxury(3).png";
import Exterior1 from "../assets/exterior(1).png";
import Exterior2 from "../assets/exterior(2).png";
import Exterior6 from "../assets/exterior(6).png";

const Decors = () => {
  return (
    <>
      <h1 className="text-center max-sm:text-center max-sm:text-5xl text-6xl mt-15">
        <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 text-transparent bg-clip-text max-sm:pl-15">
          Our Interior
        </span>{" "}
        <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text max-sm:pl-15">
          Designs
        </span>
      </h1>
      <section className="grid grid-cols-3 gap-15 mt-5 mb-15 ml-5 mr-5 max-sm:mt-0 max-sm:mb-5 max-sm:w-80 max-sm:grid-cols-1 max-sm:ml-20 max-sm:pr-15">
        <img className="rounded-md" src={Luxury1} alt="" />
        <img className="rounded-md" src={Luxury2} alt="" />
        <img className="rounded-md" src={Luxury3} alt="" />
      </section>

      <h1 className="text-center text-6xl mt-10 max-sm:text-5xl">
        <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 text-transparent bg-clip-text max-sm:pl-15">
          Our Exterior
        </span>{" "}
        <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text max-sm:pl-15">
          Designs
        </span>
        <section className="grid grid-cols-3 gap-15 mt-5 mb-15 ml-5 mr-5 max-sm:mt-0 max-sm:mb-5 max-sm:pr-15 max-sm:w-80 max-sm:grid-cols-1 max-sm:ml-20">
          <img className="rounded-md" src={Exterior1} alt="" />
          <img className="rounded-md" src={Exterior2} alt="" />
          <img className="rounded-md" src={Exterior6} alt="" />
        </section>
      </h1>
    </>
  );
};

export default Decors;
