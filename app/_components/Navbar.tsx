import React from "react";
import SearchInput from "./SearchInput";


const Navbar = () => {
  return (
    <nav className="fixed w-full z-[100] h-20 flex flex-col cols-3 opacity-[80%] bg-zinc-900 ">
      <div className="flex flex-row navpanel justify-center mx-2 basis-7/12 ">

        <div className="flex text-center align-middle p-2 border-x border-white ">
            <h1 className="text-white">SIGN IN | REGISTER</h1>
        </div>

        <div className="justify-center">
          <h1 className=" text-white text-3xl text-center h-0 md:h-auto overflow-hidden">Movie Critical</h1>
          <h1 className=" text-white text-3xl text-center md:h-0 overflow-hidden">M.Crit</h1>
        </div>

        <div className="flex flex-row gap-2 p-2 border border-white">
          
          <SearchInput />
        </div>

      </div>
      <div className="flex flex-row gap-2 basis-5/12 justify-center">
        <div className="text-white p-2 border">
            <a href="/">Home</a>
        </div>




      </div>
    </nav>
  );
};

export default Navbar;
