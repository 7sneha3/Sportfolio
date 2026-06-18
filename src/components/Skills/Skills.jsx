import SkillCard from "./SkillCard";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      py-32
      px-6
      lg:px-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2
            className="
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            My{" "}
            <span className="text-purple-500">
              Skills
            </span>
          </h2>

          <p
            className="
            text-gray-400
            mt-6
            text-lg
            "
          >
            A collection of technologies and tools
            I use to bring ideas to life.
          </p>

          {/* <div
            className="
            w-28
            h-1

            mx-auto
            mt-8

            rounded-full

            bg-gradient-to-r
            from-pink-500
            to-purple-600
          "
          /> */}
          <div className="flex justify-center mt-8">
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
</div>
        </div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4

          gap-8
          "
        >
          {skillsData.map((card, index) => (
            <SkillCard
              key={index}
              title={card.title}
              skills={card.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;