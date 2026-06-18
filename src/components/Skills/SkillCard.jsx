import { FiBox } from "react-icons/fi";

const SkillCard = ({ title, skills }) => {
  return (
    <div
      className="
      rounded-3xl

      bg-[#14061f]/70
      backdrop-blur-xl

      border
      border-purple-500/20

      p-8

      hover:border-purple-500/40
      hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]

      transition-all
      duration-300
    "
    >
      <div className="flex items-center gap-4 mb-10">
        
        <div
          className="
          w-14
          h-14

          rounded-full

          flex
          items-center
          justify-center

          bg-purple-500/10

          shadow-[0_0_20px_rgba(168,85,247,0.3)]
        "
        >
          <FiBox className="text-purple-400 text-xl" />
        </div>

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>
      </div>

      <div
        className="
        grid
        grid-cols-2
       
        gap-8
        "
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
              flex
              items-center
              gap-3
              "
            >
              {/* <Icon className="text-3xl text-white" /> */}
              <Icon
  style={{ color: skill.color }}
  className="text-3xl"

/>
              <span className="text-gray-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;