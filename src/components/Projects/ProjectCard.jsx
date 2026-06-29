import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  link,
}) => {
  return (
    <div
      className="
      group
      rounded-3xl
      overflow-hidden
      bg-[#14061f]/70
      backdrop-blur-xl
      border
      border-purple-500/20
      hover:border-purple-500/50
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      {/* Project Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-full
          object-cover
          group-hover:scale-105
          transition-all
          duration-500
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            {title}
          </h3>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"

            className="
            w-12
            h-12
            flex-shrink-0
            rounded-full

            flex
            items-center
            justify-center

            bg-purple-500/10

            hover:bg-purple-600

            transition
            "
          >
            <FiArrowUpRight
              className="
              text-white
              text-xl
              "
            />
          </a>
        </div>

        <p
          className="
          text-gray-400
          mt-4
          "
        >
          {description}
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-5
          "
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-1

              rounded-full

              text-sm

              bg-purple-500/10
              text-purple-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;