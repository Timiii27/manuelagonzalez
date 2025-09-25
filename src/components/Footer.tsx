"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-futura text-2xl font-semibold mb-4">
              Manuela González
            </h3>
            <p className="text-warm-gray/80 text-sm sm:text-base leading-relaxed">
              Artista contemporánea explorando la belleza a través de diferentes
              medios artísticos y expresiones creativas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="#presentacion"
                  className="text-warm-gray/80 hover:text-white transition-colors duration-300"
                >
                  Presentación
                </a>
              </li>
              <li>
                <a
                  href="#trabajos"
                  className="text-warm-gray/80 hover:text-white transition-colors duration-300"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="#premios"
                  className="text-warm-gray/80 hover:text-white transition-colors duration-300"
                >
                  Premios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-warm-gray/80 hover:text-white transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-warm-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-warm-gray/80"
        >
          <p>© 2025 Manuela González. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
