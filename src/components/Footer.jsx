import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/abdul-intro-white.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Changement de grid-cols-3 à flex-col sur mobile */}
        <div className="flex flex-col items-center gap-8 mb-10 md:grid md:grid-cols-3 md:items-center">
          {/* Liens de navigation : centré sur mobile, aligné à gauche sur desktop */}
          <nav className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-400">
            <a href="#a-propos" className="hover:text-blue-400 transition">
              À propos
            </a>
            <a href="#competences" className="hover:text-blue-400 transition">
              Compétences
            </a>
            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
            <a href="#projets" className="hover:text-blue-400 transition">
              Projets
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </nav>

          {/* Logo : centré */}
          <div className="flex justify-center">
            <a href="/" aria-label="Retour à l'accueil">
              <img
                src={logo}
                alt="Logo de Abdul le dev"
                className="w-40 md:w-50 h-auto object-contain"
              />
            </a>
          </div>

          {/* Icônes : centré sur mobile, aligné à droite sur desktop */}
          <div className="flex flex-row justify-center md:justify-end gap-6">
            <a
              href="https://github.com/Abdul-le-dev"
              aria-label="Mon profil GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              aria-label="Mon profil LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:abdulledev@gmail.com"
              aria-label="Mon adresse email"
              className="text-gray-400 hover:text-white transition"
            >
              <SiGmail size={24} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs md:text-sm border-t border-white/10 pt-8">
          © {new Date().getFullYear()} ABDUL LE DEV. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
