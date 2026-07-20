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
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiMysql,
  SiGit,
  SiPhpmyadmin,
  SiLocal,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";

const Skills = () => {
  const categories = [
    {
      title: "💻 Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        {
          name: "Html & Css",
          icon: <FaHtml5 className="text-orange-500" />,
          icon2: <FaCss3Alt className="text-blue-500" />,
        },
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
        {
          name: "Git & GitHub",
          icon: <FaGithub className="text-gray-400" />,
        },
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
      ],
    },
  ];

  return (
    <section id="competences" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            Mon Stack Technique
          </span>
          <h2 className="text-3xl font-bold text-white mt-6 mb-6">
            Mes Compétences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Voici une liste des technologies et outils que j'utilise pour
            concevoir des sites web et des applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800"
            >
              <h3 className="text-blue-500 font-semibold mb-6 uppercase tracking-wider text-sm">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-gray-400 hover:border-blue-500/50 hover:text-white transition-all"
                  >
                    <span className="text-xl flex column">
                      {skill.icon} {skill.icon2}
                    </span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
