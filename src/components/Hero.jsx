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
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
          Experience Comfort
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-amber-800 text-transparent bg-clip-text">
          {" "}and Luxury
        </span>
      </h1>
      <p className="mt-5 text-lg text-center bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text max-w-4xl">
        Experience comfort and relieve your stress during work-trips, conference meetings, and while travelling. Book now and get the cozy feelings of relaxation and simple luxury!
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 ml-10 mr-10 mb-10 max-sm:block">
        <img src={HeroImg} className="rounded-md w-full h-auto" alt="Cozy hotel room" />
        <img src={HeroImg2} className="rounded-md w-full h-auto max-sm:mt-4" alt="Luxury comfort setup" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 ml-10 mr-10 items-center max-sm:block mt-10">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
              Feel Cozy
            </span>
            <span className="bg-gradient-to-r from-amber-500 to-amber-800 text-transparent bg-clip-text">
              {" "}and Relax
            </span>
          </h2>
          <p className="mt-4 text-lg bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text max-w-3xl">
            Experience the perfect blend of comfort and elegance. Whether you're looking for a peaceful retreat or an indulgent getaway, our cozy spaces and world-class hospitality ensure relaxation at its finest.
          </p>
        </div>
        <img src={RelaxImg} className="rounded-md w-full h-auto max-sm:mt-4" alt="Relaxation area" />
      </div>

      <div className="text-center mt-20 mb-5">
        <span className="bg-amber-800 text-amber-500 h-6 text-sm font-medium px-2 py-1 rounded-full uppercase">workout</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">
          Get Your Space
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-amber-800 text-transparent bg-clip-text">
          {" "}and Workout
        </span>
      </h2>
      <p className="mt-4 text-lg text-center bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text max-w-4xl">
        Stay active with our fully-equipped gym facilities and wellness spaces. From yoga corners to strength training zones, we've got everything you need to maintain your fitness routine on the go.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 ml-10 mr-10 mb-20 max-sm:block">
        <img src={GymImg} className="rounded-md w-full h-auto" alt="Gym facility 1" />
        <img src={GymImg2} className="rounded-md w-full h-90 max-sm:mt-4" alt="Gym facility 2" />
      </div>
    </main>
  );
};

export default Hero;
