function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full  sticky top-0 z-40  ">
      <div className="ml-2">
        <img
          src="logo.png"
          alt="Default Avatar"
          style={{ height: "40px", width: "40px" }}
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl p-2 sm:p-4  text-violet-100">
          Avatarify
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
