import React, { useState } from "react";
import {
  MoonStar,
  Star,
  Dumbbell,
  BaggageClaim,
  LucideCloudDrizzle,
  PartyPopper,
  Group,
} from "lucide-react";

const Pricing = () => {
  const [hotels] = useState([
    {
      icon: <MoonStar className="w-8 h-8 text-amber-600" />,
      name: "Luxury-Palace",
      rating: 5,
      price: "$700/night",
      href: "/luxury",
      button: "Book Now",
    },
    {
      icon: <Group className="w-8 h-8 text-amber-600" />,
      name: "Guests Rooms",
      rating: 4,
      price: "$500/night",
      href:"/guests", 
      button: "Book Now",
    },
    {
      icon: <Star className="w-8 h-8 text-amber-600" />,
      name: "Suites",
      rating: 4,
      price: "$600/night",
      href: "/suites",
      button: "Book Now",
    },
    {
      icon: <LucideCloudDrizzle className="w-8 h-8 text-amber-600" />,
      name: "Cozy-Retreat",
      rating: 5,
      price: "$350/night",
      href: "/",
      button: "Book Now",
    },
    {
      icon: <BaggageClaim className="w-8 h-8 text-amber-600" />,
      name: "Boutique-Bliss",
      rating: 4,
      price: "$400/night",
      href: "/",
      button: "Book Now",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-amber-600" />,
      name: "Fitness Center",
      rating: 5,
      price: "$300/night",
      href: "/",
      button: "Book Now",
    },
  ]);

  return (
    <>
      <h1 className="text-center max-sm:text-center max-sm:text-5xl text-6xl mt-15">
        <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 text-transparent bg-clip-text">
          See Our 
        </span>{" "}
        <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
          Pricing Options 
        </span>
      </h1>
      <section className="grid gap-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-[#522c1c] rounded-md border-gray-300 border mt-5 ml-2 mr-2 mb-5 shadow hover:shadow-xl transition duration-300 cursor-pointer"
          >
            {hotel.icon}
            <h3 className="mt-2 text-lg font-semibold bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text">
              {hotel.name}
            </h3>
            <p className="text-amber-600 flex justify-center gap-1 mt-2">
              {[...Array(hotel.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-600" />
              ))}
            </p>
            <div className="mt-3 bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              {hotel.price}
            </div>
            <div className="bg-gradient-to-r from-amber-700 to-amber-900 py-2 px-3 rounded-md text-neutral-200 hover:text-neutral-100">
              <a href={hotel.href}>{hotel.button}</a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pricing;
