import inventory_bg from "../assets/img/inventory_preview.png";
import taskmanager_bg from "../assets/img/task_manager.png";
import sneaker_bg from "../assets/img/sneakerstore.png";
import hero_img from "../assets/img/hero.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <a href="#about" className="hover:text-gray-300">
          Fredi Karu
        </a>
        <a href="#projects" className="hover:text-gray-300">
          fredikaru@hotmail.ee
        </a>
        <a href="#contact" className="hover:text-gray-300">
          About
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className=" h-screen flex flex-col justify-center items-center">
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-9 lg:h-full w-full relative">
        <div className="col-span-4  lg:col-start-2 flex flex-col gap-7 justify-center items-start z-20 relative">
          <h1 className="text-4xl font-bold">Crafting web experiences.</h1>
          <p className="text-md font-medium">
            Front-end developer and lighting designer <br></br> based in
            Helsinki, Finland.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            See work
          </button>
        </div>
        <div
          className="bg-right col-span-9 lg:col-span-3 absolute lg:relative lg:z-auto inset-0 opacity-80 lg:opacity-100 top-8 md:top-0"
          style={{
            backgroundImage: `url(${hero_img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
};

const Project = ({ title, description, link, livelink, githublink, image }) => {
  return (
    <div className="bg-gray-100 relative shadow-md rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "hsla(0,0%, 0%, .55)" }}
      ></div>
      <div className="relative inset-0 p-4 min-h-64 flex flex-col">
        <div className="mb-auto flex justify-end">
          {/* <p className="bg-gray-300 text-xs font-normal uppercase px-3 py-1 rounded-full">
            Personal project
          </p> */}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <div className="flex justify-between">
          <a href={link} className="text-blue-300 hover:text-blue-500">
            View Project
          </a>
          <div className="flex gap-2 text-white">
            <a href={livelink} className="">
              Live link
            </a>
            <p>|</p>
            <a href={githublink} className="">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Project
            title="Inventory management system"
            description="A web app built with React and Tailwind CSS."
            link="#"
            livelink="https://inventory-txje.vercel.app/"
            githublink="#"
            image={inventory_bg}
          />
          <Project
            title="Tasks manager tool"
            description="An eCommerce site using Next.js and Tailwind CSS."
            link="#"
            livelink="#"
            githublink="#"
            image={taskmanager_bg}
          />
          <Project
            title="Recipe search app"
            description="A portfolio site with custom animations and designs."
            link="#"
            livelink="#"
            githublink="#"
            image={sneaker_bg}
          />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return;
};

const Footer = () => {
  return (
    <footer className=" p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Fredi Karu. All rights reserved.</p>
    </footer>
  );
};

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
