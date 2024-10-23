const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <a href="/" className="hover:text-gray-300">
          Fredi Karu
        </a>
        <a href="#projects" className="hover:text-gray-300">
          fredikaru@hotmail.ee
        </a>
        <a href="about" className="hover:text-gray-300">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
