import React from "react";
import { User, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="a-propos" className="py-16 md:py-24 bg-gray-950">
      <div className="text-center px-6">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
          Ce que je suis
        </span>
        <h2 className="text-3xl font-bold text-white mt-4 mb-6">
          À propos de moi
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Je suis un passionné de web et de nouvelles technologies.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Ajout de flex-col et d'un gap plus large pour mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte de présentation */}
          <div className="space-y-6 text-gray-400 text-center flex flex-col items-center">
            <p className="leading-relaxed max-w-lg">
              Développeur passionné par la création d'expériences web modernes,
              j'aime transformer des idées complexes en interfaces fluides,
              intuitives et performantes.
            </p>
            <p className="leading-relaxed max-w-lg">
              Mon approche est centrée sur l'utilisateur et la propreté du code.
              J'aime relever des défis techniques, apprendre de nouvelles
              technologies et collaborer au sein d'équipes dynamiques.
            </p>

            {/* Stats : centré sur mobile, aligné à gauche sur desktop */}
            <div className="flex justify-center md:justify-start gap-6 md:gap-8 pt-4">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-blue-500 text-xl">10+</h4>
                <p className="text-xs md:text-sm text-white">Projets</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-blue-500 text-xl">100%</h4>
                <p className="text-xs md:text-sm text-white">Engagement</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-bold text-blue-500 text-xl">24/7</h4>
                <p className="text-xs md:text-sm text-white">Veille</p>
              </div>
            </div>
          </div>

          {/* Cartes de valeurs */}
          <div className="grid gap-4 w-full">
            <div className="p-5 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl flex items-start gap-4 hover:border-blue-500/30 transition">
              <User className="text-blue-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Expérience</h3>
                <p className="text-sm">
                  3 ans de pratique dans le développement web.
                </p>
              </div>
            </div>
            <div className="p-5 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl flex items-start gap-4 hover:border-blue-500/30 transition">
              <Code className="text-blue-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Technique</h3>
                <p className="text-sm">
                  Quête constante d'optimisation et bonnes pratiques.
                </p>
              </div>
            </div>
            <div className="p-5 md:p-6 bg-gray-900/50 border border-gray-800 rounded-xl flex items-start gap-4 hover:border-blue-500/30 transition">
              <Target className="text-blue-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Objectifs</h3>
                <p className="text-sm">
                  Apporter de la valeur et expertise Fullstack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
