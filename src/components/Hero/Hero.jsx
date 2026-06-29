import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { SiLeetcode } from "react-icons/si";
// import SplashCursor from "../SplashCursor/SplashCursor";

import avatar from "../../assets/avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      min-h-100svh

      px-6
      md:px-8
      lg:px-20
  
      pt-32
      md:pt-36
      lg:pt-8
    overflow-hidden
      "
    >

      {/* <SplashCursor
  DENSITY_DISSIPATION={4}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.08}
  CURL={2}
  SPLAT_RADIUS={0.18}
  SPLAT_FORCE={5000}
  COLOR_UPDATE_SPEED={8}
  SHADING
  RAINBOW_MODE={false}
  COLOR="#A855F7"
/> */}


      <div
        className="
        max-w-7xl
    mx-auto

    grid
    grid-cols-1
    lg:grid-cols-2

    gap-12
    lg:gap-16

    items-center
        "
      >
        {/* Left Side */}

        <div>
          <p className="text-xl text-gray-300 mb-4">
            Hey, I am
            <span className="text-purple-500 font-semibold">
              {" "}
              Sneha
            </span>
          </p>

          <h1
            className="
    text-5xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    leading-tight
  "
          >
            I'm a
            <br />

            <span className="text-purple-500">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>

          <p
            className="
            text-gray-400
            text-lg
            mt-8
            max-w-xl
            leading-relaxed
            "
          >
            Focused on building responsive web applications,
            AI-powered solutions, and digital experiences
            with React, JavaScript, and modern technologies.
            Turning Ideas into Digital Experiences...
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="
    px-8
    py-4

    rounded-full

    bg-gradient-to-r
    from-purple-500
    to-pink-500

    text-white
    font-semibold

    hover:scale-105

    transition
    cursor-pointer
  "
            >
              Contact Me
            </Link>

            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
              w-14
              h-14

              rounded-full

              border
              border-purple-500/30

              flex
              items-center
              justify-center

              hover:bg-purple-700/20
              transition
              "
            >
              📄
            </a> */}
            <Link
              to="projects"
              smooth={true}
              duration={700}
              offset={-80}
              className="
              w-14
              h-14

              rounded-full

              border border-purple-500/30

              bg-[#14061f]/70
              backdrop-blur-xl

              flex
              items-center
              justify-center

              cursor-pointer

              hover:bg-purple-700/20
              hover:scale-105

              transition-all
            "
            >
              <FiBriefcase
                className="
      text-white
      text-2xl
    "
              />
            </Link>
          </div>

          {/* Social Icons */}

          {/* <div className="flex gap-6 mt-10 text-3xl">
            <a href="YOUR_LINKEDIN">
              <FaLinkedin />
            </a>

            <a href="YOUR_GITHUB">
              <FaGithub />
            </a>

            <a href="YOUR_LEETCODE">
              <SiLeetcode />
            </a>
          </div> */}

          {/* <div className="flex items-center gap-4 mt-10">

<a
  href="YOUR_LINKEDIN"
  target="_blank"
  rel="noreferrer"
  className="
    w-12 h-12
    flex items-center justify-center

    rounded-full

    bg-[#14061f]/70
    backdrop-blur-xl

    border border-purple-500/20

    text-white text-xl

    hover:text-purple-400
    hover:border-purple-500/50
    hover:-translate-y-1

    transition-all duration-300
  "
>
  <FaLinkedin />
</a>

<a
  href="YOUR_GITHUB"
  target="_blank"
  rel="noreferrer"
  className="
    w-12 h-12
    flex items-center justify-center

    rounded-full

    bg-[#14061f]/70
    backdrop-blur-xl

    border border-purple-500/20

    text-white text-xl

    hover:text-purple-400
    hover:border-purple-500/50
    hover:-translate-y-1

    transition-all duration-300
  "
>
  <FaGithub />
</a>

<a
  href="YOUR_LEETCODE"
  target="_blank"
  rel="noreferrer"
  className="
    w-12 h-12
    flex items-center justify-center

    rounded-full

    bg-[#14061f]/70
    backdrop-blur-xl

    border border-purple-500/20

    text-white text-xl

    hover:text-purple-400
    hover:border-purple-500/50
    hover:-translate-y-1

    transition-all duration-300
  "
>
  <SiLeetcode />
</a>

</div> */}
        </div>

        {/* Right Side */}

        {/* Right Side */}

        <div className="flex justify-center relative">

          {/* Purple Glow */}
          <div
            className="
    absolute
    w-[400px]
    h-[400px]
    md:w-[500px]
    md:h-[500px]

    rounded-full

    bg-purple-700/25 blur-[150px]

    z-0
  "
          />

          {/* Floating Avatar */}
          <motion.img
            src={avatar}
            alt="Sneha"

            animate={{
              y: [-15, 15, -15],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
    relative
    z-10
    w-[260px]
    sm:w-[320px]
    md:w-[400px]
    lg:w-[500px]
  "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;