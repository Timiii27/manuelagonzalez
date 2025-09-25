"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WorkItem {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

const categories = ["Pintura", "Escultura", "Arte Digital", "Instalaciones"];

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Reflexiones del Alma",
    category: "Pintura",
    year: "2023",
    description:
      "Una exploración profunda de las emociones humanas a través del color y la forma.",
    image: "/placeholder-painting-1.jpg",
  },
  {
    id: 2,
    title: "Formas en Movimiento",
    category: "Escultura",
    year: "2023",
    description:
      "Escultura en bronce que captura la fluidez del movimiento en estado sólido.",
    image: "/placeholder-sculpture-1.jpg",
  },
  {
    id: 3,
    title: "Realidad Virtual",
    category: "Arte Digital",
    year: "2022",
    description:
      "Instalación digital interactiva que cuestiona los límites entre lo real y lo virtual.",
    image: "/placeholder-digital-1.jpg",
  },
  {
    id: 4,
    title: "Espacios Intangibles",
    category: "Instalaciones",
    year: "2022",
    description:
      "Instalación site-specific que transforma el espacio arquitectónico en experiencia sensorial.",
    image: "/placeholder-installation-1.jpg",
  },
  {
    id: 5,
    title: "Paisajes Internos",
    category: "Pintura",
    year: "2022",
    description:
      "Serie de acuarelas que exploran los paisajes emocionales del subconsciente.",
    image: "/placeholder-painting-2.jpg",
  },
  {
    id: 6,
    title: "Materia y Vacío",
    category: "Escultura",
    year: "2021",
    description:
      "Intervención escultórica que juega con la percepción del volumen y el espacio.",
    image: "/placeholder-sculpture-2.jpg",
  },
];

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredWorks =
    selectedCategory === "Todas"
      ? workItems
      : workItems.filter((work) => work.category === selectedCategory);

  return (
    <section id="trabajos" className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-6">
            Mis Trabajos
          </h2>
          <div className="w-20 h-px bg-warm-gray mx-auto mb-8"></div>
          <p className="text-warm-gray text-sm sm:text-base max-w-2xl mx-auto">
            Una selección de mis obras más representativas, organizadas por
            categorías que reflejan la diversidad de mi expresión artística.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("Todas")}
            className={`px-6 py-3 transition-all duration-300 ${
              selectedCategory === "Todas"
                ? "bg-warm-gray text-white"
                : "bg-white text-warm-gray hover:bg-warm-gray hover:text-white border border-warm-gray"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-warm-gray text-white"
                  : "bg-white text-warm-gray hover:bg-warm-gray hover:text-white border border-warm-gray"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Work Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white hover:shadow-lg transition-all duration-300 hover-lift"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-warm-gray/10 to-warm-gray/5 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-warm-gray/40">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z" />
                    </svg>
                    <p className="text-xs">{work.category}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-warm-gray transition-colors">
                    {work.title}
                  </h3>
                  <span className="text-sm text-warm-gray/70">{work.year}</span>
                </div>
                <p className="text-sm sm:text-base text-warm-gray mb-4">
                  {work.description}
                </p>
                <span className="inline-block px-3 py-1 bg-cream text-warm-gray text-xs font-medium">
                  {work.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border border-warm-gray text-warm-gray hover:bg-warm-gray hover:text-white transition-all duration-300 font-medium">
            Ver todas las obras
          </button>
        </motion.div>
      </div>
    </section>
  );
}
