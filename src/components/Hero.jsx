const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
        Disponible pour de nouvelles opportunités
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
        Je développe vos idées en{" "}
        <span className="text-blue-500">solutions web</span>.
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
        Développeur web passionné, je transforme vos besoins en applications
        performantes, intuitives et modernes. Basé en France et prêt à relever
        vos défis techniques.
      </p>

      <div className="flex gap-4">
        <a
          href="#projets"
          className="bg-white text-gray-950 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="border border-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
};

export default Hero;
