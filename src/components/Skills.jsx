import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "💻 Frontend",
      items: [
        "React",
        "React Native",
        "Next.js",
        "JavaScript",
        "Html & Css",
        "Sass",
        "Tailwind Css",
        "Bootstrap",
      ],
    },
    {
      title: "⚙️ Backend & Dev",
      items: [
        "Node.js",
        "Express.js",
        "PHP",
        "MySQL",
        "SQL",
        "MongoDB",
        "Git & GitHub",
        "Postman",
        "Vite",
      ],
    },
    {
      title: "🎨 Design & Outils",
      items: [
        "Figma",
        "Photoshop",
        "phpMyAdmin",
        "SEO & Accessibilité",
        "WordPress",
        "Local",
      ],
    },
  ];

  return (
    <section id="competences" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Mon Stack Technique</span>
        <h2 className="text-3xl font-bold text-white mt-6 mb-6 text-center">
          Mes Compétences
        </h2>
        <p className="text-gray-400 mb-12 text-center">Des outils modernes pour des solutions performantes et scalables.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800"
            >
              <h3 className="text-blue-500 font-semibold mb-4 uppercase tracking-wider text-sm">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-950 border border-gray-800 rounded-lg text-gray-400 text-sm hover:border-blue-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
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
