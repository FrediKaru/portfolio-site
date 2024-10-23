const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <a href="/" className="hover:text-gray-300">
          Fredi Karu
        </a>
        <div className="flex gap-3">
          <a href="mailto:fredikaru@gmail.com" className="hover:text-gray-300">
            fredikaru@gmail.com
          </a>
          <p>|</p>
          <a
            href="https://www.linkedin.com/in/fredikaru197"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Linkedin
          </a>
        </div>
        <a href="about" className="hover:text-gray-300">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
