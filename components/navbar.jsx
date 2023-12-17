function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full  sticky top-0 z-40  ">
      <div className="ml-2 flex items-center gap-2">
        <img
          src="logo.png"
          alt="Default Avatar"
          style={{ height: "40px", width: "40px" }}
        />
        <h1 className="font-bold text-3xl p-2 sm:p-4  text-violet-100">
          Pixels
        </h1>
      </div>
      <div></div>
    </nav>
  );
}

export default Navbar;
