import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/abdul-intro-white.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 items-center gap-8 mb-10">
          <nav className="flex flex-col gap-2 text-sm text-gray-400">
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

          <div className="flex justify-center">
            <a href="/">
            <img src={logo} alt="Logo" className="w-50 h-auto object-contain" />
            </a>
          </div>

          {/* Colonne 3 : Icônes (à droite, en ligne) */}
          <div className="flex flex-row justify-end gap-6">
            <a href="https://github.com/Abdul-le-dev" target="_blank" className="text-gray-400 hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:abdulledev@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <SiGmail size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm border-gray-900">
          © {new Date().getFullYear()} ABDUL LE DEV. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
