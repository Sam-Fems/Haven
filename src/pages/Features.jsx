import React from "react";
import {
  Star,
  Wifi,
  BedDouble,
  Coffee,
  Car,
  ShieldCheck,
  Dumbbell,
  Waves,
  ConciergeBell,
} from "lucide-react";

const features = [
  { icon: <BedDouble className="w-8 h-8 text-amber-700" />, title: "Luxury Rooms & Suites" },
  { icon: <Wifi className="w-8 h-8 text-amber-700" />, title: "High-Speed WiFi" },
  { icon: <ConciergeBell className="w-8 h-8 text-amber-700" />, title: "24/7 Room Service" },
  { icon: <Coffee className="w-8 h-8 text-amber-700" />, title: "Complimentary Breakfast" },
  { icon: <Waves className="w-8 h-8 text-amber-700" />, title: "Swimming Pool & Spa" },
  { icon: <Dumbbell className="w-8 h-8 text-amber-700 " />, title: "Fitness Center" },
  { icon: <Car className="w-8 h-8 text-amber-700 " />, title: "Free Parking & Shuttle Service" },
  { icon: <ShieldCheck className="w-8 h-8 text-amber-700" />, title: "24/7 Security & Surveillance" },
  { icon: <Star className="w-8 h-8 text-amber-700" />, title: "5-Star Guest Reviews" },
];

const Features = () => {
  return (
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-center text-7xl max-sm:text-4xl max-sm:mb-2">
            <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 text-transparent bg-clip-text">
              Our Hotel
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-transparent bg-clip-text">
              Features
            </span>
          </h1>
          <p className="bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text mb-12 text-xl">Experience luxury, comfort, and convenience with world-class amenities designed just for you.</p>
        </div>

        <div className="grid gap-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#522c1c] rounded-md shadow hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Features;
