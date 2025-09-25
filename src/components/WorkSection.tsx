"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Vercel Blob storage configuration
const BLOB_STORAGE_URL =
  "https://yflidv3jyhzviklc.public.blob.vercel-storage.com";

// Helper function to get blob URL for images
const getBlobUrl = (imageName: string): string => {
  return `${BLOB_STORAGE_URL}/${imageName}`;
};

interface Work {
  id: string;
  title: string;
  year: string;
  technique: string;
  paperSize: string;
  matrixSize: string;
  image?: string;
}

const works: Work[] = [
  {
    id: "1",
    title: "DONDE ESTÁS, 25",
    year: "2025",
    technique: "Fotolitografía iluminada y cosida, china collé",
    paperSize: "78 x 50 cm",
    matrixSize: "64 x 50 cm",
    image: "dondeEstas25.jpg",
  },
  {
    id: "2",
    title: "UNIÓN, 25",
    year: "2025",
    technique: "Fotolitografía, técnicas aditivas y china collé",
    paperSize: "28 x 38 cm",
    matrixSize: "18 x 28 cm",
    image: "Union25.jpg",
  },
  {
    id: "3",
    title: "ÁRBOL, 24",
    year: "2024",
    technique: "Fotolitografía, técnicas aditivas y china collé",
    paperSize: "76 x 45 cm",
    matrixSize: "63 x 45 cm",
    image: "arbol2024.jpg",
  },
  {
    id: "4",
    title: "PUENTE, 24",
    year: "2024",
    technique: "Fotolitografía, china collé y cordón cosido",
    paperSize: "49 x 59 cm",
    matrixSize: "39 x 59 cm",
    image: "Puente24.jpg",
  },
  {
    id: "5",
    title: "VIDA, 24",
    year: "2024",
    technique: "Fotolitografía, china collé, cordón cosido",
    paperSize: "28 x 38 cm",
    matrixSize: "20 x 27 cm",
    image: "vida24.jpg",
  },
  {
    id: "6",
    title: "TORMENTA, 24",
    year: "2024",
    technique: "Fotolitografía, china collé y cordón cosido",
    paperSize: "38 x 28 cm",
    matrixSize: "20 x 20 cm",
    image: "tormenta24.jpg",
  },
  {
    id: "7",
    title: "ARBOL EN LA ROCA, 24",
    year: "2024",
    technique: "Fotolitografía y china collé",
    paperSize: "28 x 38 cm",
    matrixSize: "20,5 x 27 cm",
    image: "arbolEnLaRoca24.jpg",
  },
  {
    id: "8",
    title: "SILENCIO, 24",
    year: "2024",
    technique: "Fotolitografía y china collé",
    paperSize: "18 x 18 cm",
    matrixSize: "10 x 10 cm",
    image: "silencio24.jpg",
  },
  {
    id: "9",
    title: "ÁRBOL, 24",
    year: "2024",
    technique: "Fotolitografía y china collé coloreada",
    paperSize: "18 x 18 cm",
    matrixSize: "10 x 10 cm",
    image: "arbol2024-2.jpg",
  },
  {
    id: "10",
    title: "AGUA, 24",
    year: "2024",
    technique: "Fotolitografía y china collé coloreada",
    paperSize: "18 x 18 cm",
    matrixSize: "10 x 10 cm",
    image: "agua24.jpg",
  },
  {
    id: "11",
    title: "CADENA, 23",
    year: "2023",
    technique: "Fotolitografía y china collé",
    paperSize: "53 x 59 cm",
    matrixSize: "39 x 59 cm",
    image: "cadena23.jpg",
  },
  {
    id: "12",
    title: "PUENTE, 23",
    year: "2023",
    technique: "Fotolitografía y china collé",
    paperSize: "60 x 49 cm",
    matrixSize: "49 x 49 cm",
    image: "puente23.jpg",
  },
  {
    id: "13",
    title: "ÁRBOL, 23",
    year: "2023",
    technique: "Fotolitografía y china collé",
    paperSize: "75 x 40 cm",
    matrixSize: "63 x 40 cm",
    image: "arbol23.jpg",
  },
  {
    id: "14",
    title: "ROSA, 23",
    year: "2023",
    technique: "Fotolitografía y china collé",
    paperSize: "28 x 38 cm",
    matrixSize: "19 x 26 cm",
    image: "rosa23.jpg",
  },
  {
    id: "15",
    title: "EL VUELO DE UNA RAMA, 22",
    year: "2022",
    technique: "Fotolitografía iluminada",
    paperSize: "47 x 65 cm",
    matrixSize: "32 x 65 cm",
    image: "elVueloDeUnaRama22.jpg",
  },
  {
    id: "16",
    title: "EL ÁRBOL DE LA VIDA, 22",
    year: "2022",
    technique: "Fotolitografía coloreada",
    paperSize: "28 x 38 cm",
    matrixSize: "15 x 27 cm",
    image: "elArbolDeLaVida22.jpg",
  },
  {
    id: "17",
    title: "NATURALEZA, 22",
    year: "2022",
    technique: "Fotolitografía coloreada",
    paperSize: "28 x 38 cm",
    matrixSize: "19 x 27 cm",
    image: "naturaleza22.jpg",
  },
  {
    id: "18",
    title: "PASEO, 22",
    year: "2022",
    technique: "Fotolitografía, técnicas aditivas y china collé",
    paperSize: "71 x 54 cm",
    matrixSize: "53,5 x 40,5 cm",
    image: "paseo22.jpg",
  },
  {
    id: "19",
    title: "RECUERDOS, 21",
    year: "2021",
    technique: "Fotolitografía iluminada",
    paperSize: "47 x 70 cm",
    matrixSize: "25 x 65 cm",
    image: "recuerdos21.jpg",
  },
];

export default function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section
      id="trabajos"
      className="py-20 bg-gradient-to-br from-warm-beige/60 via-cream to-soft-lavender/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-futura text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Mis Trabajos
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base max-w-3xl mx-auto">
            Una selección de mis obras de fotolitografía, técnicas que combinan
            tradición y modernidad en la exploración de temas relacionados con
            la naturaleza.
          </p>
        </motion.div>

        {/* Works grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Artwork image */}
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-soft-blue/20 to-light-sage/20">
                  {work.image ? (
                    <Image
                      src={getBlobUrl(work.image)}
                      alt={`${work.title} (${work.year})`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-warm-gray/60">
                      <p className="text-sm">Sin imagen</p>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="text-sm font-medium">Ver detalles</p>
                    </div>
                  </div>
                </div>

                {/* Work info */}
                <div className="p-6">
                  <h3 className="font-futura text-xl font-medium text-charcoal mb-2 group-hover:text-warm-gray transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-2">{work.year}</p>
                  <p className="text-charcoal/60 text-sm">{work.technique}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedWork && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Close button */}
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 text-warm-gray hover:text-charcoal transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="aspect-square relative bg-white rounded-lg overflow-hidden">
                    {selectedWork?.image ? (
                      <Image
                        src={getBlobUrl(selectedWork.image)}
                        alt={`${selectedWork.title} (${selectedWork.year})`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-warm-gray/60">
                        <p className="text-sm">Sin imagen</p>
                      </div>
                    )}
                  </div>

                  {/* Work details */}
                  <div>
                    <h2 className="font-futura text-3xl font-bold text-charcoal mb-4">
                      {selectedWork.title}
                    </h2>
                    <p className="text-warm-gray text-sm sm:text-base mb-6">
                      {selectedWork.year}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-charcoal mb-2">
                          Técnica:
                        </h3>
                        <p className="text-warm-gray">
                          {selectedWork.technique}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium text-charcoal mb-2">
                          Medidas del papel:
                        </h3>
                        <p className="text-warm-gray">
                          {selectedWork.paperSize}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium text-charcoal mb-2">
                          Medidas de la matriz:
                        </h3>
                        <p className="text-warm-gray">
                          {selectedWork.matrixSize}
                        </p>
                      </div>
                    </div>

                    <button
                      className="mt-8 px-6 py-3 bg-charcoal text-white hover:bg-warm-gray transition-colors duration-300 font-medium"
                      onClick={() => setSelectedWork(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
