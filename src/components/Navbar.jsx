import tv from "../assets/tv.png";
import menu from "../assets/Menu.png";
// import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className=" pl-8 items-start mb-5 main-img">
      <div className="flex items-center gap-4 my-5 ">
        <img src={tv} className="w-10" alt=" " />
        <h1 className="text-xl text-white">MovieBox</h1>
      </div>
      <div className="flex justify-between my-5 ">
        <input
          type="text"
          className="border-[#D1D5DB] py-1 px-4 w-full  rounded-md border-solid border-2"
          placeholder="what do you want to watch?"
        />
      </div>
      <div className="flex gap-4 items-center my-5 ">
        <h3 className="text-lg">Sign Up</h3>

        <img src={menu} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
