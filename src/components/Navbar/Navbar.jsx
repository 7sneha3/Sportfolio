import { Link } from "react-scroll";
import { FiBriefcase } from "react-icons/fi";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed top-5 left-0 right-0 z-50">
      <div className="flex justify-center">
        <nav
          className="
        w-[90%]
        max-w-5xl
        h-16
        px-8
        flex
        items-center
        justify-between
        rounded-full

        bg-[#14061f]/70
        backdrop-blur-xl

        border
        border-purple-500/20

        shadow-[0_0_30px_rgba(168,85,247,0.15)]
      "
        >

          {/* Logo */}
          <h1 className="text-white font-bold text-2xl">
            sneha<span className="text-purple-500">.</span>
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-10 text-gray-300">
            <Link
              to="home"
              smooth
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Home
            </Link>

            <Link
              to="skills"
              smooth
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Skills
            </Link>

            <Link
              to="experience"
              smooth
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Experience
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Connect
            </Link>
          </div>

          {/* Resume Button */}
          {/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-2

            px-6
            py-2

            rounded-full

            border
            border-purple-500/30

            bg-purple-900/20

            text-white

            hover:bg-purple-700/30
            transition
          "
        >
          <FiBriefcase />
          Resume
        </a> */}
          <div className="flex items-center gap-4">

            {/* Desktop Resume */}
            <a
              href="https://drive.google.com/drive/folders/1nk4GdHXVw9vCmivV3QJL41KbdssRmksB"
              target="_blank"
              rel="noreferrer"
              className="
  hidden md:flex
  items-center
  gap-2
  px-6
  py-2
  rounded-full
  border border-purple-500/30
  bg-purple-900/20
  text-white
"
            >
              <FiBriefcase className="text-lg" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="
      md:hidden

      absolute
      top-20
      left-1/2
      -translate-x-1/2

      w-[90%]
      max-w-md

      rounded-3xl

      bg-[#14061f]/95
      backdrop-blur-xl

      border
      border-purple-500/20

      shadow-[0_0_30px_rgba(168,85,247,0.15)]

      overflow-hidden
    "
        >
          <div className="flex flex-col">

            <Link
              to="home"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-center text-gray-300 hover:text-purple-400 cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="skills"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-center text-gray-300 hover:text-purple-400 cursor-pointer"
            >
              Skills
            </Link>

            <Link
              to="experience"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-center text-gray-300 hover:text-purple-400 cursor-pointer"
            >
              Experience
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-center text-gray-300 hover:text-purple-400 cursor-pointer"
            >
              Projects
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-center text-gray-300 hover:text-purple-400 cursor-pointer"
            >
              Connect
            </Link>

            <div className="p-4">
              <a
                href="https://drive.google.com/drive/folders/1nk4GdHXVw9vCmivV3QJL41KbdssRmksB"
                className="
    flex
    items-center
    justify-center
    gap-2

    py-3

    rounded-full

    bg-purple-600

    text-white
  "
              >
                <FiBriefcase />
                Resume
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;