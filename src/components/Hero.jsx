const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8 md:py-32 flex flex-col items-center text-center">
      {/* Badge plus petit sur mobile */}
      <div className="inline-block px-3 py-1 mb-6 text-xs md:text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
        Disponible pour de nouvelles opportunités
      </div>

      {/* Réduction de la taille du texte h1 sur mobile */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
        Je développe vos idées en{" "}
        <span className="text-blue-500">solutions web</span>.
      </h1>

      {/* Texte plus lisible sur mobile */}
      <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-8 md:mb-10 leading-relaxed">
        Développeur web passionné, je transforme vos besoins en applications
        performantes, intuitives et modernes. Basé en France et prêt à relever
        vos défis techniques.
      </p>

      {/* Flex-col sur mobile pour empiler les boutons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#projets"
          className="bg-white text-gray-950 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition text-center"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="border border-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-center"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
};

export default Hero;
