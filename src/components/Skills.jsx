import React from "react";
import {
  FaGithub,
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaPhp,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiMysql,
  SiPhpmyadmin,
  SiLocal,
} from "react-icons/si";
import { TbSeo, TbBrandReactNative } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";

const Skills = () => {
  const categories = [
    {
      title: "💻 Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="text-cyan-400" />,
        },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Sass", icon: <FaSass className="text-pink-500" /> },
        {
          name: "Tailwind Css",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-500" />,
        },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      ],
    },
    {
      title: "⚙️ Backend & Dev",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-gray-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      title: "🎨 Design & Outils",
      items: [
        { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
        { name: "Photoshop", icon: <DiPhotoshop className="text-blue-400" /> },
        { name: "SEO", icon: <TbSeo className="text-yellow-500" /> },
        { name: "WordPress", icon: <FaWordpress className="text-gray-300" /> },
        {
          name: "phpMyAdmin",
          icon: <SiPhpmyadmin className="text-blue-500" />,
        },
        { name: "Local", icon: <SiLocal className="text-green-400" /> },
      ],
    },
  ];

  return (
    <section id="competences" className="py-24 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track {
          animation: scroll-left 25s linear infinite;
        }
        .marquee-track-reverse {
          animation: scroll-right 25s linear infinite;
        }
        .marquee-row:hover .marquee-track,
        .marquee-row:hover .marquee-track-reverse {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            Mon Stack Technique
          </span>
          <h2 className="text-3xl font-bold text-white mt-6 mb-6">
            Mes Compétences
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Voici mes connaissances en programmation et en conception web.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {categories.map((cat, index) => (
          <div key={cat.title} className="marquee-row relative w-full">
            {/* Dégradés de fondu sur les bords */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

            <div className="mb-3 px-6 max-w-6xl mx-auto">
              <h3 className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
                {cat.title}
              </h3>
            </div>

            <div className="overflow-hidden">
              <div
                className={`flex gap-4 w-max ${
                  index % 2 === 0 ? "marquee-track" : "marquee-track-reverse"
                }`}
              >
                {[...cat.items, ...cat.items].map((skill, i) => (
                  <div
                    key={`${skill.name}-${i}`}
                    className="flex items-center gap-3 px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:border-blue-500/50 hover:text-white transition-all shrink-0"
                  >
                    <span className="text-xl flex items-center">
                      {skill.icon}
                    </span>
                    <span className="text-sm whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
