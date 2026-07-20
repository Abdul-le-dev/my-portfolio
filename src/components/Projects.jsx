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

  return (
    <section id="projets" className="max-w-6xl mx-auto py-24">
      <div className="text-center">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
          Portfolio
        </span>
        <h2 className="text-3xl font-bold text-white mt-6 mb-6 text-center">
          Mes Réalisations
        </h2>
        <p className="text-gray-400 mb-12 text-center">
          Une sélection de projets mêlant intégration pixel-perfect et logique
          complexe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-blue-400 transition group flex flex-col"
          >
            {/* Conteneur de l'image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.altMsg}
                className="h-45 w-full object-fill "
              />

              {/* Overlay qui apparaît au survol */}
              <div className="absolute inset-0 bg-gray-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    aria-label="Lien vers la demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition shadow-lg"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    aria-label="Lien vers le code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition border border-gray-600 shadow-lg"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.logos.map((Icon, index) => (
                <span
                  key={index}
                  className="text-gray-300 bg-gray-950 p-1.5 rounded"
                >
                  <Icon size={20} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
