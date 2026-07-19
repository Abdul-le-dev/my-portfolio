import React from "react";
import { Code, Layout, Database, Server, Cpu, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      desc: "Création d'interfaces modernes et performantes.",
      icon: <Code className="text-blue-500" />,
    },
    {
      title: "Intégration UI/UX",
      desc: "Conversion de designs en code responsive.",
      icon: <Layout className="text-blue-500" />,
    },
    {
      title: "Optimisation",
      desc: "Amélioration de la vitesse et du SEO.",
      icon: <Zap className="text-blue-500" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 space-y-20">
      <section id="services" className="py-24 bg-gray-950">
        <div className="text-center">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            Ce que je propose
          </span>
          <h2 className="text-3xl font-bold text-white text-center mt-6 mb-6">
            Mes Services
          </h2>
          <p className="text-gray-400 mb-12 text-center">
            Je propose une gamme de services pour aider les entreprises et les
            particuliers à atteindre leurs objectifs en ligne.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:bg-gray-800/50 transition-all group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
