import React from "react";
import SearchInput from "./SearchInput";


const Navbar = () => {
  return (
    <nav className="fixed w-full z-[300] h-20 flex flex-col cols-3 opacity-[80%] bg-zinc-900 ">
      <div className="flex flex-row navpanel justify-center mx-2 basis-7/12 ">

        <div className="flex text-center align-middle p-2 border-x border-white ">
            <h1 className="text-white">SIGN IN | REGISTER</h1>
        </div>

        <div className="justify-center">
          <a href="/" className=" text-white text-3xl text-center hidden md:block overflow-hidden">Movie Critical</a>
          <a href="/" className=" text-white text-3xl text-center block md:hidden overflow-hidden">M.Crit</a>
        </div>

        <div className="flex p-2">
          
          <SearchInput />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
