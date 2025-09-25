"use client";

import { useState, useEffect } from "react";

// Vercel Blob storage configuration
const BLOB_STORAGE_URL =
  "https://yflidv3jyhzviklc.public.blob.vercel-storage.com";

// Helper function to get blob URL for images
const getBlobUrl = (imageName: string): string => {
  return `${BLOB_STORAGE_URL}/${imageName}`;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={getBlobUrl("navLogo.png")}
              alt="Manuela González Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-[13px]">
            <button
              onClick={() => scrollToSection("presentacion")}
              className="text-warm-gray hover:text-charcoal transition-colors duration-300 font-medium"
            >
              Presentación
            </button>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-warm-gray hover:text-charcoal transition-colors duration-300 font-medium"
            >
              Trabajos
            </button>
            <button
              onClick={() => scrollToSection("tecnicas")}
              className="text-warm-gray hover:text-charcoal transition-colors duration-300 font-medium"
            >
              Técnicas
            </button>
            <button
              onClick={() => scrollToSection("premios")}
              className="text-warm-gray hover:text-charcoal transition-colors duration-300 font-medium"
            >
              Premios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-warm-gray hover:text-charcoal transition-colors duration-300 font-medium"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-charcoal">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
