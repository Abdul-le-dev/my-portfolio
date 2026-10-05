import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
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
  SiReactrouter,
  SiPhpmyadmin,
  SiNormalizedotcss,
  SiLocal,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeId, setActiveId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BLOG TECHNOLOGIE",
      altMsg: "Photo d'un projet BLOG TECHNOLOGIE",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742848468/Capture_d_e%CC%81cran_2023-05-25_a%CC%80_22.53.19_ddkhlr.png",
      description:
        "Transformation d'un site web existant en blog technologie et en dynamique",
      logos: [FaPhp, SiPhpmyadmin, DiPhotoshop],
      codeLink: "https://github.com/mobile-zone/mobile-zone.github.io",
      demoLink: "https://blogtechnologie.infinityfreeapp.com",
      category: "Backend",
    },
    {
      id: 2,
      title: "HOT TAKES",
      altMsg: "Photo d'un projet HOT TAKES",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742848497/Capture_d_e%CC%81cran_2023-05-10_a%CC%80_12.52.15_qkqz6l.png",
      description:
        "Construction d'une API sécurisée pour une application d'avis gastronomiques (NoSQL).",
      logos: [FaNodeJs, SiMongodb, SiExpress, SiPostman],
      demoLink: "https://hottakes-abdulledev.netlify.app/",
      codeLink: "https://github.com/Abdul-le-dev/hottakes-backend",
      category: "Backend",
    },
    {
      id: 3,
      title: "MON VIEUX GRIMOIRE",
      altMsg: "Photo d'un projet Mon Vieux Grimoire",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1768780666/Capture_d_e%CC%81cran_2026-01-19_a%CC%80_00.53.22_si0uis.png",
      description:
        "Back-end complet pour une plateforme de notation de livres (optimisation d'images incluse).",
      logos: [FaNodeJs, SiMongodb, SiExpress, SiPostman],
      codeLink: "https://github.com/Abdul-le-dev/Mon-Vieux-Grimoire-Backend",
      demoLink: "https://mvg-abdulledev.vercel.app",
      category: "Backend",
    },
    {
      id: 4,
      title: "KASA",
      altMsg: "Photo d'un projet KASA",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742924581/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.41.23_myecw7.png",
      description:
        "Application de location immobilière développée avec React et React Router.",
      logos: [FaReact, SiReactrouter, FaSass],
      demoLink: "https://kasa-abdulledev.netlify.app",
      codeLink: "https://github.com/Abdul-le-dev/Kasa",
      category: "Frontend",
    },
    {
      id: 5,
      title: "KANAP",
      altMsg: "Photo d'un projet KANAP",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742925492/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.57.30_kjej9m.png",
      description: "Transformation d'un site e-commerce statique en dynamique",
      logos: [FaJs],
      demoLink: "https://kanap-abdulledev.netlify.app",
      codeLink: "https://github.com/Abdul-le-dev/Kanap",
      category: "Frontend",
    },
    {
      id: 6,
      title: "SMARTPOINT",
      altMsg: "Photo d'un projet SMARTPOINT",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742925997/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_19.06.00_zdofyu.png",
      description: "Création d'un site web e-commerce pour le téléphone mobile",
      logos: [FaWordpress, SiLocal],
      demoLink: "https://smartphone.infinityfreeapp.com",
      codeLink: null,
      category: "CMS",
    },
    {
      id: 7,
      title: "OHMYFOOD",
      altMsg: "Photo d'un projet OHMYFOOD",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742924580/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.38.23_elmjzw.png",
      description:
        "Site mobile-first répertoriant les menus de restaurants gastronomiques avec animations CSS.",
      logos: [FaHtml5, FaSass],
      demoLink: "https://abdul-le-dev.github.io/ohmyfood",
      codeLink: "https://github.com/Abdul-le-dev/ohmyfood",
      category: "Frontend",
    },
    {
      id: 8,
      title: "BOOKI",
      altMsg: "Photo d'un projet BOOKI",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1783020990/Capture_d_e%CC%81cran_2026-07-02_a%CC%80_21.35.31_ln4qdx.png",
      description:
        "Intégration de la page d'accueil et de l'interface responsive pour une plateforme de réservation.",
      logos: [FaHtml5, FaCss3Alt, SiNormalizedotcss],
      demoLink: "https://abdul-le-dev.github.io/Booki",
      codeLink: "https://github.com/Abdul-le-dev/Booki",
      category: "Frontend",
    },
    {
      id: 9,
      title: "LA PANTHÈRE",
      altMsg: "Photo d'un projet LA PANTHÈRE",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742924580/Capture_d_e%CC%81cran_2025-03-25_a%CC%80_18.38.59_rrf8wc.png",
      description:
        "Amélioration du référencement (SEO) et accessibilité d'un site web existant",
      logos: [TbSeo, FaBootstrap],
      demoLink: "https://abdul-le-dev.github.io/LaPanthere",
      codeLink: "https://github.com/Abdul-le-dev/LaPanthere",
      category: "SEO",
    },
    {
      id: 10,
      title: "La Maison Jungle",
      altMsg: "Photo d'un projet La Maison Jungle",
      image:
        "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1783019382/Capture_d_e%CC%81cran_2026-07-02_a%CC%80_20.58.45_le2udt.png",
      description:
        "Application web de e-commerce de plantes, entièrement réarchitecturée et modernisée.",
      logos: [FaReact, FaCss3Alt],
      demoLink: "https://la-maison-jungle-abdul.netlify.app",
      codeLink: "https://github.com/Abdul-le-dev/La-maison-jungle",
      category: "Frontend",
    },
  ];

  const categories = ["Tous", "Frontend", "Backend", "CMS", "SEO"];

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Sélectionne le premier projet du filtre à chaque changement de catégorie
  useEffect(() => {
    setActiveId(filteredProjects.length > 0 ? filteredProjects[0].id : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const activeProject =
    filteredProjects.find((p) => p.id === activeId) || filteredProjects[0];

  const handleKeyDown = (e, index) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" ? 1 : -1;
    const nextIndex =
      (index + dir + filteredProjects.length) % filteredProjects.length;
    const nextProject = filteredProjects[nextIndex];
    setActiveId(nextProject.id);
    document.getElementById("tab-" + nextProject.id)?.focus();
  };

  if (!activeProject) return null;

  return (
    <section id="projets" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
          Portfolio
        </span>
        <h2 className="text-3xl font-bold text-white mt-6 mb-6 text-center">
          Mes Réalisations
        </h2>
        <p className="text-gray-400 mb-8 text-center">
          Une sélection de projets mêlant intégration pixel-perfect et logique
          complexe.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-label={"Filtrer par " + category}
            className={
              "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer " +
              (activeCategory === category
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-900 text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700")
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="lg:flex lg:gap-10 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {/* Liste des onglets */}
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Liste des projets"
          className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-r border-gray-800 shrink-0"
        >
          {filteredProjects.map((project, index) => {
            const isActive = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                id={"tab-" + project.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={"panel-" + project.id}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={
                  "relative shrink-0 text-left px-5 py-4 whitespace-nowrap lg:whitespace-normal transition-colors cursor-pointer border-b-2 lg:border-b-0 lg:border-l-2 " +
                  (isActive
                    ? "text-white border-blue-500 bg-gray-950/50"
                    : "text-gray-500 border-transparent hover:text-gray-300 hover:bg-gray-950/30")
                }
              >
                <span className="block text-sm font-semibold">
                  {project.title}
                </span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  {project.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panneau du projet actif */}
        <div
          id={"panel-" + activeProject.id}
          role="tabpanel"
          aria-labelledby={"tab-" + activeProject.id}
          tabIndex={0}
          className="lg:w-2/3 p-6 md:p-8"
        >
          <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-950 mb-6">
            <img
              key={activeProject.id}
              src={activeProject.image}
              alt={activeProject.altMsg}
              className="w-full aspect-video object-fill"
            />
          </div>

          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            {activeProject.category}
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {activeProject.title}
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            {activeProject.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {activeProject.logos.map((Icon, i) => (
              <span
                key={i}
                className="text-gray-300 bg-gray-900 border border-gray-800 p-2 rounded-lg"
              >
                <Icon size={20} />
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {activeProject.demoLink && (
              <a
                href={activeProject.demoLink}
                aria-label={"Voir la démo de " + activeProject.title}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-600 transition"
              >
                <FaExternalLinkAlt size={14} />
                Voir la démo
              </a>
            )}
            {activeProject.codeLink && (
              <a
                href={activeProject.codeLink}
                aria-label={"Voir le code de " + activeProject.title}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition"
              >
                <FaGithub size={16} />
                Code source
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
