import HeroImg from "../assets/HeroImg.png";
import HeroImg2 from "../assets/HeroImg(2).png";
import RelaxImg from "../assets/relax(2).png";
import GymImg from "../assets/GymImg.png";
import GymImg2 from "../assets/GymImg(2).png";

const Hero = () => {
  return (
    <main className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="text-center mb-5">
        <span className="bg-amber-800 text-amber-500 h-6 text-sm font-medium px-2 py-1 rounded-full uppercase">comfort</span>
      </div>
      <h1 className="text-4xl sm:text-4xl lg:text-6xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
          Experience Comfort
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-amber-800 text-transparent bg-clip-text">
          {" "}
          and Luxury
        </span>
      </h1>
      <p className="mt-5 text-lg text-center bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text max-w-4xl">
        Experience comfort and relieve your stress during work-trips, conference
        meetings and also while travelling. Book now and get the cozy feelings
        of relaxation and simple deluxy!
      </p>
      <div className="grid grid-cols-2 space-x-4 mt-3 mb-3 max-sm:block">
        <img src={HeroImg} className="rounded-md w-70 h-50" alt="" />
        <img
          src={HeroImg2}
          className="rounded-md w-70 h-50 max-sm:mt-3"
          alt=""
        />
      </div>
      
      <div className="grid grid-cols-2 mt-25 max-sm:block max-sm:mt-5">
      <h1 className="text-4xl sm:text-4xl lg:text-7xl text-center tracking-wide max-lg:mt-15 max-lg:mr-5 lg:mt-15 lg:mr-5">
        <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
          Feel Cozy
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-amber-800 text-transparent bg-clip-text">
          {" "}
          and Relax
        </span>
        <p className="mt-5 text-lg text-center bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text max-w-4xl">
        Experience the perfect blend of comfort and elegance. Whether you're
        looking for a peaceful retreat or an indulgent getaway, our cozy spaces
        and world-class hospitality ensure relaxation at its finest.
      </p>
      </h1>
      <div>
        <img src={RelaxImg} className="rounded-md" alt="" />
      </div>
      </div>

      <div className="text-center mt-30 mb-5">
        <span className="bg-amber-800 text-amber-500 h-6 text-sm font-medium px-2 py-1 rounded-full uppercase">workout</span>
      </div>
      <h2 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
          Get Your Space
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-amber-800 text-transparent bg-clip-text">
          {" "}
          and Workout
        </span>
      </h2>
      <p className="mt-5 text-lg text-center bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text max-w-4xl">
        Experience the perfect blend of comfort and elegance. Whether you're
        looking for a peaceful retreat or an indulgent getaway, our cozy spaces
        and world-class hospitality ensure relaxation at its finest.
      </p>
      <div className="grid grid-cols-2 space-x-4 mt-3 max-sm:block mb-20">
        <img src={GymImg} className="rounded-md w-70 h-50" alt="" />
        <img
          src={GymImg2}
          className="rounded-md w-70 h-50 max-sm:mt-3"
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero;
