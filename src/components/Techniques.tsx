"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Vercel Blob storage configuration
const BLOB_STORAGE_URL =
  "https://yflidv3jyhzviklc.public.blob.vercel-storage.com";

// Helper function to get blob URL for videos
const getBlobUrl = (videoName: string): string => {
  return `${BLOB_STORAGE_URL}/${videoName}`;
};

interface Technique {
  id: string;
  video: string;
}

const techniques: Technique[] = [
  {
    id: "1",
    video: "video1.mp4",
  },
  {
    id: "2",
    video: "video2.mp4",
  },
  {
    id: "3",
    video: "video3.mp4",
  },
  {
    id: "4",
    video: "video4.mp4",
  },
  {
    id: "5",
    video: "video5.mp4",
  },
];

export default function Techniques() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoClick = (techniqueId: string) => {
    setPlayingVideo(playingVideo === techniqueId ? null : techniqueId);
  };

  return (
    <section
      id="tecnicas"
      className="py-20 bg-gradient-to-br from-light-sage/50 via-white to-soft-blue/40 relative"
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
            Técnicas en Acción
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base max-w-3xl mx-auto">
            Descubre el proceso creativo detrás de cada obra a través de estos
            videos que muestran las técnicas y métodos que utilizo en mi trabajo
            artístico.
          </p>
        </motion.div>

        {/* Videos grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto"
        >
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleVideoClick(technique.id)}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/50">
                {/* Technique video */}
                <div className="aspect-[9/16] relative overflow-hidden">
                  <video
                    className="w-full h-full object-contain"
                    preload="metadata"
                    controls={playingVideo === technique.id}
                    autoPlay={playingVideo === technique.id}
                    muted={playingVideo === technique.id}
                  >
                    <source
                      src={getBlobUrl(technique.video)}
                      type="video/mp4"
                    />
                    <source
                      src={getBlobUrl(technique.video)}
                      type="video/quicktime"
                    />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  {/* Play button overlay */}
                  {playingVideo !== technique.id && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-charcoal ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
