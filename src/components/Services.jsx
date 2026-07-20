import React from "react";
import { Code, Layout, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      desc: "Je conçois des applications web sur-mesure, robustes et évolutives, utilisant les dernières technologies comme React et Node.js pour garantir performance et sécurité.",
      icon: <Code size={32} className="text-blue-500" />,
    },
    {
      title: "Intégration UI/UX",
      desc: "Je transforme vos maquettes (Figma/Adobe) en interfaces fluides, parfaitement adaptées à tous les écrans, en mettant l'accent sur l'expérience utilisateur et l'accessibilité.",
      icon: <Layout size={32} className="text-blue-500" />,
    },
    {
      title: "Performance & SEO",
      desc: "J'optimise le temps de chargement de vos sites et leur structure technique pour améliorer significativement votre référencement naturel et votre taux de conversion.",
      icon: <Zap size={32} className="text-blue-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            Ce que je propose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-6">
            Mes Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            J'accompagne les projets web de la conception à la mise en ligne,
            avec une approche centrée sur la qualité technique et les besoins de
            vos utilisateurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-6 p-3 bg-blue-500/10 inline-block rounded-lg group-hover:bg-blue-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
