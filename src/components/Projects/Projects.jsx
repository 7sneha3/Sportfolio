import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
      py-32
      px-6
      lg:px-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p
            className="
            uppercase
            tracking-[6px]
            
            mb-4
            "
          >
            My Work
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            text-purple-400
            font-bold
            "
          >
            Featured Projects
          </h2>

          <p
            className="
            text-gray-400
            mt-6
            max-w-2xl
            mx-auto
            "
          >
            A collection of projects showcasing
            my development journey and technical skills.
          </p>

          {/* <div className="flex justify-center mt-8">
  <div
    className="
      relative
      w-32
      h-1
      rounded-full
      bg-purple-900/40
      overflow-hidden
    "
  >
    <div
      className="
        absolute
        top-0
        left-0
        h-full
        w-26

        rounded-full

        bg-gradient-to-r
        from-pink-500
        via-purple-500
        to-violet-500

        animate-skillLine
      "
    />
  </div>
</div> */}

        </div>
        

        {/* Projects Grid */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3

          gap-8
          "
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;