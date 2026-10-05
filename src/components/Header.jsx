import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/ald-white.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDocked, setIsDocked] = useState(false);

  const navLinks = [
    { name: "", href: "#hero", icon: FaHome },
    { name: "À propos", href: "#a-propos", icon: FaUser },
    { name: "Compétences", href: "#competences", icon: FaCode },
    { name: "Services", href: "#services", icon: FaBriefcase },
    { name: "Projets", href: "#projets", icon: FaFolderOpen },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsDocked(window.scrollY > 300);

      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        const element = document.querySelector(link.href);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const navWrapperClass = isDocked
    ? "fixed left-1/2 -translate-x-1/2 z-40 hidden lg:block transition-all duration-500 ease-in-out bottom-6"
    : "fixed left-1/2 -translate-x-1/2 z-40 hidden lg:block transition-all duration-500 ease-in-out mt-3.5";

  const ulClass = isDocked
    ? "flex items-center gap-2 font-medium text-gray-400 bg-gray-900/70 backdrop-blur-md border border-white/50 shadow-lg transition-all duration-500 rounded-full px-4 py-3"
    : "flex items-center gap-8 font-medium text-gray-400 px-6 py-2 ml-15";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-md border-b border-white/10 pt-2 pb-2">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-50">
            <a href="/" aria-label="Retour a l'accueil">
              <img src={logo} alt="Logo de Abdul le dev" />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-gray-400">
            <a
              href="https://github.com/Abdul-le-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:abdulledev@gmail.com"
              className="hover:text-white transition hover:scale-110"
            >
              <SiGmail size={22} />
            </a>
          </div>

          <button
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </nav>
      </header>

      <div className={navWrapperClass}>
        <ul className={ulClass}>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href;

            let linkClass =
              "relative flex items-center justify-center transition-all duration-300 ";
            if (isDocked && isActive) {
              linkClass += "p-3 rounded-full bg-blue-500 text-white scale-110";
            } else if (isDocked && !isActive) {
              linkClass +=
                "p-3 rounded-full hover:text-white hover:bg-white/10";
            } else if (!isDocked && isActive) {
              linkClass += "py-2 group text-white";
            } else {
              linkClass += "py-2 group hover:text-white";
            }

            let textSpanClass =
              "transition-opacity duration-300 whitespace-nowrap ";
            textSpanClass += isDocked
              ? "opacity-0 absolute pointer-events-none"
              : "opacity-100";

            let iconSpanClass = "transition-opacity duration-300 ";
            iconSpanClass += isDocked
              ? "opacity-100"
              : "opacity-0 absolute pointer-events-none";

            let underlineClass =
              "absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ";
            underlineClass += isActive ? "w-full" : "w-0 group-hover:w-full";

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-label={link.name}
                  className={linkClass}
                >
                  <span className={textSpanClass}>
                    {link.name}
                    <span className={underlineClass}></span>
                  </span>
                  <span className={iconSpanClass}>
                    <Icon size={20} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-gray-950 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${
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

        <div className="flex gap-8 mt-4 text-gray-400">
          <a
            href="https://github.com/Abdul-le-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:abdulledev@gmail.com" className="hover:text-white">
            <SiGmail size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
