"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Puente24.jpg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/60 to-light-sage/60"></div>

      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-charcoal/70 tracking-wider uppercase">
              Artista Contemporánea
            </span>
          </div>

          <h1 className="font-futura text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight">
            Manuela
            <br />
            González
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base text-charcoal/80 mb-8 font-light leading-relaxed">
            Nuestra forma de vivir, preocupándonos siempre por obtener confort
            material y dejando que la tecnología invada nuestras vidas,
            significa la destrucción de la naturaleza
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("presentacion")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-3 bg-charcoal text-white hover:bg-charcoal/80 transition-all duration-300 font-medium rounded-lg shadow-lg hover:shadow-xl"
          >
            Descubre mi arte
            <svg
              className="inline-block ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
