import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.2)_0%,transparent_70%)] blur-[50px] z-0 pointer-events-none animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-block px-3 py-1 mb-6 text-xs md:text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
          Disponible pour de nouvelles opportunités
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
          Je développe vos idées en{" "}
          <span className="text-blue-500">solutions web</span>.
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-8 md:mb-10 leading-relaxed">
          Développeur web passionné, je transforme vos besoins en applications
          performantes, intuitives et modernes. Basé en France et prêt à relever
          vos défis techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <a
            href="#projets"
            aria-label="Voir mes projets de développement"
            className="bg-white text-gray-950 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition text-center"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            aria-label="Me contacter pour une collaboration"
            className="border border-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-center"
          >
            Me contacter
          </a>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center absolute bottom-14 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full relative flex justify-center">
          <div className="w-1 h-2 bg-blue-500 rounded-full absolute top-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
