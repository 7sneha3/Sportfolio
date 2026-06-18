import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  educationData,
  experienceData,
} from "../../data/journeyData";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [openCard, setOpenCard] = useState(null);

  return (
    <section
      id="experience"
      className="py-32 px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold">
            My Journey
          </h2>

          <p className="text-gray-400 mt-4">
            A timeline of my academic and professional growth.
          </p>
        </div>
       
        {/* Tabs */}

        <div className="flex justify-center mt-11">
          <div
            className="
            flex
            bg-[#14061f]/70
            backdrop-blur-xl
            border border-purple-500/20
            rounded-full
            p-2
            "
          >
            <button
              onClick={() => {
                setActiveTab("education");
                setOpenCard(null);
              }}
              className={`
                flex items-center gap-2
                px-6 py-3
                rounded-full
                transition-all

                ${
                  activeTab === "education"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400"
                }
              `}
            >
              <FaGraduationCap />
              Education
            </button>

            <button
              onClick={() => {
                setActiveTab("experience");
                setOpenCard(null);
              }}
              className={`
                flex items-center gap-2
                px-6 py-3
                rounded-full
                transition-all

                ${
                  activeTab === "experience"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400"
                }
              `}
            >
              <FiBriefcase />
              Experience
            </button>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-12 space-y-6">
        {(activeTab === "education"
  ? educationData
  : experienceData
).map((item) => (
  <div
    key={item.id}
    className="
      rounded-3xl
      bg-[#14061f]/70
      backdrop-blur-xl
      border border-purple-500/20
      p-6
    "
  >
    {/* Clickable Header */}

    <div
      onClick={() =>
        setOpenCard(
          openCard === item.id
            ? null
            : item.id
        )
      }
      className="
        flex
        justify-between
        items-start
        cursor-pointer
      "
    >
      <div>
        <h3 className="text-2xl font-bold">
          {item.title}
        </h3>

        <p className="text-purple-400">
          {item.organization}
        </p>

        <p className="text-gray-400">
          {item.duration}
        </p>
      </div>

      <FiChevronDown
        className={`
          text-xl
          text-purple-400
          transition-transform
          duration-300

          ${
            openCard === item.id
              ? "rotate-180"
              : ""
          }
        `}
      />
    </div>

    {/* Dropdown Content */}

    {openCard === item.id && (
      <ul className="mt-5 space-y-2">
        {item.details.map((detail, index) => (
          <li
            key={index}
            className="text-gray-300"
          >
            • {detail}
          </li>
        ))}
      </ul>
    )}
  </div>
))}
        </div>

      </div>
    </section>
  );
};

export default Journey;