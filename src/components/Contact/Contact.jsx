import {
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";
  
  import {
    MdEmail,
  } from "react-icons/md";
  
  import {
    SiLeetcode,
  } from "react-icons/si";
  
  const Contact = () => {
    return (
      <section
        id="contact"
        className="
        py-32
        px-6
        lg:px-20
        "
      >
        <div className="max-w-6xl mx-auto">
  
          {/* Heading */}
  
          <div className="text-center mb-16">
  
            <p
              className="
              uppercase
              tracking-[6px]
              text-purple-400
              mb-4
              "
            >
              Get In Touch
            </p>
  
            <h2
              className="
              text-5xl
              md:text-7xl
              font-bold
              "
            >
              Contact Me
            </h2>
  
            <p
              className="
              mt-6
              text-gray-400
              text-lg
              max-w-2xl
              mx-auto
              "
            >
              I'm always open to discussing
              internships, opportunities,
              collaborations, or innovative ideas.
            </p>
          </div>
  
          {/* Contact Cards */}
  
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >
  
            {/* Email */}
  
            <a
              href="mailto:snehasakhare35@gmail.com"
              className="
              rounded-3xl
  
              bg-[#14061f]/70
              backdrop-blur-xl
  
              border
              border-purple-500/20
  
              p-8
  
              flex
              items-center
              gap-5
  
              hover:border-purple-500/50
              hover:-translate-y-2
  
              transition-all
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
  
                rounded-full
  
                flex
                items-center
                justify-center
  
                bg-purple-500/10
              "
              >
                <MdEmail
                  className="
                  text-3xl
                  text-purple-400
                  "
                />
              </div>
  
              <div>
                <h3 className="font-semibold">
                  Email
                </h3>
  
                <p className="text-gray-400 text-sm">
                  Mail to Connect
                </p>
              </div>
            </a>
  
            {/* LinkedIn */}
  
            <a
              href="https://www.linkedin.com/in/snehasakhare"
              target="_blank"
              rel="noreferrer"
              className="
              rounded-3xl
  
              bg-[#14061f]/70
              backdrop-blur-xl
  
              border
              border-purple-500/20
  
              p-8
  
              flex
              items-center
              gap-5
  
              hover:border-purple-500/50
              hover:-translate-y-2
  
              transition-all
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
  
                rounded-full
  
                flex
                items-center
                justify-center
  
                bg-blue-500/10
              "
              >
                <FaLinkedin
                  className="
                  text-3xl
                  text-[#0A66C2]
                  "
                />
              </div>
  
              <div>
                <h3 className="font-semibold">
                  LinkedIn
                </h3>
  
                <p className="text-gray-400 text-sm">
                  Connect professionally
                </p>
              </div>
            </a>
  
            {/* GitHub */}
  
            <a
              href="https://github.com/7sneha3"
              target="_blank"
              rel="noreferrer"
              className="
              rounded-3xl
  
              bg-[#14061f]/70
              backdrop-blur-xl
  
              border
              border-purple-500/20
  
              p-8
  
              flex
              items-center
              gap-5
  
              hover:border-purple-500/50
              hover:-translate-y-2
  
              transition-all
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
  
                rounded-full
  
                flex
                items-center
                justify-center
  
                bg-white/10
              "
              >
                <FaGithub
                  className="
                  text-3xl
                  text-white
                  "
                />
              </div>
  
              <div>
                <h3 className="font-semibold">
                  GitHub
                </h3>
  
                <p className="text-gray-400 text-sm">
                  View my repositories
                </p>
              </div>
            </a>
  
            {/* LeetCode */}
  
            <a
              href="https://leetcode.com/u/sneha_347/"
              target="_blank"
              rel="noreferrer"
              className="
              rounded-3xl
  
              bg-[#14061f]/70
              backdrop-blur-xl
  
              border
              border-purple-500/20
  
              p-8
  
              flex
              items-center
              gap-5
  
              hover:border-purple-500/50
              hover:-translate-y-2
  
              transition-all
              duration-300
              "
            >
              <div
                className="
                w-14
                h-14
  
                rounded-full
  
                flex
                items-center
                justify-center
  
                bg-orange-500/10
              "
              >
                <SiLeetcode
                  className="
                  text-3xl
                  text-[#FFA116]
                  "
                />
              </div>
  
              <div>
                <h3 className="font-semibold">
                  LeetCode
                </h3>
  
                <p className="text-gray-400 text-sm">
                  Coding profile
                </p>
              </div>
            </a>
  
          </div>
  
          {/* Bottom Text */}
  
          {/* <div className="text-center mt-16">
            <p
              className="
              text-gray-400
              text-lg
              "
            >
              Let's build something amazing together 🚀
            </p>
          </div> */}
  
        </div>
      </section>
    );
  };
  
  export default Contact;