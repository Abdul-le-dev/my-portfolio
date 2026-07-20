import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/ald-white.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#a-propos"); // Par défaut

  const navLinks = [
    { name: "À propos", href: "#a-propos" },
    { name: "Compétences", href: "#competences" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // On parcourt les sections
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si le haut de la section est proche du haut de l'écran (avec marge de 150px)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER FIXE */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-50">
            <a href="/" aria-label="Retour à l'accueil">
              <img src={logo} alt="Logo de Abdul le dev" />
            </a>
          </div>

          {/* Navigation Desktop */}
          <ul className="hidden md:flex gap-8 font-medium text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative py-2 group transition-colors duration-300 ${activeSection === link.href ? "text-white" : "text-gray-400"}`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Liens Sociaux DESKTOP */}
          <div className="hidden md:flex items-center gap-5 text-gray-400">
            <a
              href="https://github.com/Abdul-le-dev"
              aria-label="Mon profil GitHub"
              target="_blank"
              className="hover:text-white transition hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              aria-label="Mon profil LinkedIn"
              target="_blank"
              className="hover:text-white transition hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:abdulledev@gmail.com"
              aria-label="Envoyer un email"
              className="hover:text-white transition hover:scale-110"
            >
              <SiGmail size={22} />
            </a>
          </div>

          {/* Bouton Burger */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </nav>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 z-40 bg-gray-950 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-bold text-white hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* Liens Sociaux MOBILE */}
        <div className="flex gap-8 mt-4 text-gray-400">
          <a
            href="https://github.com/Abdul-le-dev"
            aria-label="Mon profil GitHub"
            className="hover:text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="#"
            aria-label="Mon profil LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:abdulledev@gmail.com"
            aria-label="Envoyer un email"
            className="hover:text-white"
          >
            <SiGmail size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
