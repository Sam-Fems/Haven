import Room1 from "../assets/guest(1).png";
import Room2 from "../assets/guest(2).png";
import Room3 from "../assets/guest(3).png";
import Room4 from "../assets/guest(4).png";
import Room5 from "../assets/guest(5).png";
import Room6 from "../assets/guest(6).png";

const GuestsRooms = () => {
  return (
    <>
      <h1 className="text-5xl text-center mt-10">
        <span className="bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text">
          Guest
        </span>{" "}
        <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text">
          Rooms
        </span>
      </h1>
      <div className="grid grid-cols-2 mt-5 gap-10 pl-15 lg:ml-10 max-lg:ml-10 max-sm:ml-0 sm:ml-0 sm:mr-15 max-sm:mr-10 max-sm:grid-cols-1">
        <div>
          <img className="rounded-md" src={Room1} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Double Bed Guest Room</p>
        </div>
        <div>
          <img className="rounded-md" src={Room2} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xlbg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Single Bed Guest Room/1</p>
        </div>
        <div>
          <img className="rounded-md" src={Room3} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Single Bed Guest Room/1</p>
        </div>
        <div>
          <img className="rounded-md" src={Room4} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Royal Guest Room</p>
        </div>
        <div>
          <img className="rounded-md" src={Room5} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Deluxe Guest Room</p>
        </div>
        <div>
          <img className="rounded-md" src={Room6} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Family Guest Room</p>
        </div>
      </div>
    </>
  );
};

export default GuestsRooms;
