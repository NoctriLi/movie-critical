const Navbar = () => {
  return (
    <nav className="fixed w-full z-[100] h-20 flex flex-col cols-3 opacity-[80%] bg-zinc-900 ">
      <div className="flex flex-row navpanel justify-center mx-2 basis-7/12 ">

        <div className=" text-center align-middle p-2 border-x border-white ">
            <h1 className="text-white">SIGN IN | REGISTER</h1>
        </div>

        <div className="navlogo justify-center">
          <h1 className="text-white text-3xl text-center">LOGO</h1>
        </div>

        <div className="flex flex-row gap-2 p-2 border border-white">
          <h1 className="text-white ">search</h1>
          <h1 className="text-white">{"(_)"}</h1>
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
