import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Decors from "./pages/Decors";
import Pricing from "./pages/Pricing";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GuestsRooms from "./pages/GuestsRooms";
import SuitesRooms from "./pages/SuitesRooms";
import LuxuryRooms from "./pages/LuxuryRooms";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar />
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
      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/decors" element={<Decors />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/guests" element={<GuestsRooms />} />
        <Route path="/suites" element={<SuitesRooms />} />
        <Route path="/luxury" element={<LuxuryRooms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
