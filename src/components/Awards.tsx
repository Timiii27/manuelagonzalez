"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: string;
}

interface Exhibition {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
}

interface Collection {
  id: string;
  name: string;
  location: string;
  description: string;
}

// PREMIOS GANADOS
const awards: Award[] = [
  {
    id: "1",
    title: "Premio Stadit de Grabado",
    organization: "66 Salón de Otoño, Casa de Vacas",
    year: "1999",
    description:
      "Premio principal en la categoría de grabado del prestigioso Salón de Otoño de Madrid.",
    category: "Premio",
  },
  {
    id: "2",
    title: "Mención de Honor",
    organization:
      "Certamen de Arte Gráfico para Jóvenes Creadores, Calcografía Nacional",
    year: "2019",
    description:
      "Reconocimiento especial en el certamen nacional de arte gráfico para jóvenes creadores.",
    category: "Mención",
  },
];

// SELECCIONES EN PREMIOS
const selections: Award[] = [
  {
    id: "1",
    title: "Certamen de Arte Joven",
    organization: "Junta de Castilla y León, La Salina",
    year: "1992",
    description: "Selección en el certamen de arte joven de Castilla y León.",
    category: "Regional",
  },
  {
    id: "2",
    title: "Concurso de Pintura y Escultura",
    organization: "Universidad Complutense de Madrid",
    year: "1998",
    description: "Selección en el concurso de pintura y escultura de la U.C.M.",
    category: "Universidad",
  },
  {
    id: "3",
    title: "1º Edición Premio Joven 98",
    organization: "Fundación General de la U.C.M. e Instituto de la Juventud",
    year: "1998",
    description:
      "Selección en la primera edición del premio joven de artes plásticas.",
    category: "Nacional",
  },
  {
    id: "4",
    title: "Premio de Grabado Lucio Muñoz",
    organization: "Premios Villa de Madrid 1999, Conde Duque",
    year: "1999",
    description: "Selección en los prestigiosos premios Villa de Madrid.",
    category: "Nacional",
  },
  {
    id: "5",
    title: "66 Salón de Otoño",
    organization: "Casa de Vacas, Madrid",
    year: "1999",
    description: "Selección en el Salón de Otoño de Madrid.",
    category: "Nacional",
  },
  {
    id: "6",
    title: "7 Salón de Otoño",
    organization: "Casa de Vacas, Madrid",
    year: "2000",
    description: "Selección en el Salón de Otoño de Madrid.",
    category: "Nacional",
  },
  {
    id: "7",
    title: "V Certamen Nacional de Artes Plásticas Villa de Brunete",
    organization: "Brunete, Madrid",
    year: "2000",
    description:
      "Selección en el certamen nacional de artes plásticas de Brunete.",
    category: "Nacional",
  },
  {
    id: "8",
    title: "69 Salón de Otoño",
    organization: "Casa de Vacas, Madrid",
    year: "2002",
    description: "Selección en el Salón de Otoño de Madrid.",
    category: "Nacional",
  },
  {
    id: "9",
    title: "70 Salón de Otoño",
    organization: "Casa de Vacas, Madrid",
    year: "2003",
    description: "Selección en el Salón de Otoño de Madrid.",
    category: "Nacional",
  },
  {
    id: "10",
    title: "71 Salón de Otoño",
    organization: "Casa de Vacas, Madrid",
    year: "2004",
    description: "Selección en el Salón de Otoño de Madrid.",
    category: "Nacional",
  },
  {
    id: "11",
    title: "VII Premio de Grabado Ciudad de Lleida",
    organization: "Círculo de Bellas Artes, Lleida",
    year: "2006",
    description: "Selección en el premio de grabado de Lleida.",
    category: "Nacional",
  },
  {
    id: "12",
    title: "III Premio de Grabado Ciudad de Lleida",
    organization: "Círculo de Bellas Artes, Lleida",
    year: "2007",
    description: "Selección en el premio de grabado de Lleida.",
    category: "Nacional",
  },
  {
    id: "13",
    title: "IX Premio de Grabado Ciudad de Lleida",
    organization: "Círculo de Bellas Artes, Lleida",
    year: "2008",
    description: "Selección en el premio de grabado de Lleida.",
    category: "Nacional",
  },
  {
    id: "14",
    title: "XI Premio Nacional de Grabado Ciudad de Lleida",
    organization: "Círculo de Bellas Artes, Lleida",
    year: "2010",
    description: "Selección en el premio nacional de grabado de Lleida.",
    category: "Nacional",
  },
  {
    id: "15",
    title: "IX Certamen Francisco Revelles de Dibujo y Grabado",
    organization: "Francisco Revelles",
    year: "2013",
    description:
      "Selección en el certamen Francisco Revelles de dibujo y grabado.",
    category: "Nacional",
  },
  {
    id: "16",
    title: "Mini Print Internacional de Cadaqués",
    organization: "Cadaqués, Barcelona, Francia, Reino Unido",
    year: "2013-2024",
    description:
      "Selección continua durante 12 años consecutivos en esta prestigiosa muestra internacional itinerante.",
    category: "Internacional",
  },
  {
    id: "17",
    title: "Premio Internacional de Grabado Villa de Cebreros",
    organization: "Villa de Cebreros",
    year: "2014",
    description:
      "Selección en el premio internacional de grabado Villa de Cebreros.",
    category: "Internacional",
  },
  {
    id: "18",
    title: "Premio de Grabado San Lorenzo del Escorial",
    organization: "Centro Cultural de San Lorenzo del Escorial",
    year: "2014-2024",
    description:
      "Selección continua durante 11 años en el premio de grabado de San Lorenzo del Escorial.",
    category: "Regional",
  },
  {
    id: "19",
    title: "Premio Internacional Atlante",
    organization: "Museo de Artes del Grabado a la Estampa Digital, La Coruña",
    year: "2015-2024",
    description:
      "Selección múltiple en el premio internacional Atlante de grabado digital.",
    category: "Internacional",
  },
  {
    id: "20",
    title: "Certamen Nacional de Arte Gráfico para Jóvenes Creadores",
    organization: "Calcografía Nacional, Madrid",
    year: "2016-2021",
    description:
      "Selección múltiple en el certamen nacional de arte gráfico para jóvenes creadores.",
    category: "Nacional",
  },
  {
    id: "21",
    title: "Certamen de Grabado Nacional José Caballero",
    organization: "Las Rozas, Madrid",
    year: "2017-2023",
    description:
      "Selección múltiple en el certamen nacional de grabado José Caballero.",
    category: "Nacional",
  },
  {
    id: "22",
    title: "Certamen de Arte Gráfico para Jóvenes Creadores",
    organization: "Universidad de Cantabria, Santander",
    year: "2018",
    description:
      "Selección en el certamen de arte gráfico de la Universidad de Cantabria.",
    category: "Universidad",
  },
  {
    id: "23",
    title: "Open Art Barcelona",
    organization: "Galería La Maldita Estampa, Barcelona",
    year: "2021",
    description: "Selección en Open Art Barcelona.",
    category: "Internacional",
  },
  {
    id: "24",
    title: "XVII Bienal Internacional de Grabado Joset de Rivera",
    organization: "Xátiva",
    year: "2023",
    description:
      "Selección en la bienal internacional de grabado Joset de Rivera.",
    category: "Internacional",
  },
  {
    id: "25",
    title: "I Bienal de Grabado Manuel Boix",
    organization: "L'Alcudia",
    year: "2025",
    description:
      "Selección en la primera edición de la bienal de grabado Manuel Boix.",
    category: "Internacional",
  },
  {
    id: "26",
    title: "Colectivo de Grabado La Salita",
    organization: "Gijón",
    year: "2025",
    description: "Selección en el colectivo de grabado La Salita de Gijón.",
    category: "Regional",
  },
  {
    id: "27",
    title: "Open Portfolio",
    organization: "Bilbao",
    year: "2025",
    description: "Selección en Open Portfolio de Bilbao.",
    category: "Internacional",
  },
];

// EXPOSICIONES COLECTIVAS
const collectiveExhibitions: Exhibition[] = [
  {
    id: "1",
    title: "Obra Gráfica",
    location: "Facultad de Bellas Artes, U.C.M., Madrid",
    year: "1996",
    type: "Universidad",
  },
  {
    id: "2",
    title: "Obra Gráfica",
    location: "Facultad de Bellas Artes, U.C.M., Madrid",
    year: "1997",
    type: "Universidad",
  },
  {
    id: "3",
    title: "Grabadores 98",
    location: "Facultad de Bellas Artes, U.C.M., Madrid",
    year: "1998",
    type: "Universidad",
  },
  {
    id: "4",
    title: "Gráfica 98-99",
    location: "Galería Brita Prinz, Madrid",
    year: "1999",
    type: "Galería",
  },
  {
    id: "5",
    title: "Transmilenium",
    location: "Galería Angela Sacristán, Madrid",
    year: "2001",
    type: "Galería",
  },
  {
    id: "6",
    title: "Exposición Grupu Logost",
    location: "Centro Cultural Galileo Galilei, Madrid",
    year: "2003",
    type: "Centro Cultural",
  },
  {
    id: "7",
    title: "Exposición Colectiva",
    location: "Galería ARS, Madrid",
    year: "2004",
    type: "Galería",
  },
  {
    id: "8",
    title: "Gráfica 2004-2005",
    location: "Galería José Rincón, Madrid",
    year: "2004-2005",
    type: "Galería",
  },
  {
    id: "9",
    title: "ESTAMPA 2004",
    location: "Galería Centro de Arte Moderno, Madrid",
    year: "2004",
    type: "Feria",
  },
  {
    id: "10",
    title: "ESTAMPA 2005",
    location: "Galería Centro de Arte Moderno, Madrid",
    year: "2005",
    type: "Feria",
  },
  {
    id: "11",
    title: "400 años de Quijote",
    location: "Sala Manuel Revilla, Alcalá de Henares",
    year: "2005",
    type: "Centro Cultural",
  },
  {
    id: "12",
    title: "Comunicarte 2005 - Tres mujeres, tres miradas",
    location: "I.E.S. Puerta Bonita, Madrid",
    year: "2005",
    type: "Educativo",
  },
  {
    id: "13",
    title: "Contrastes",
    location: "Caja de Madrid, Aranjuez",
    year: "2005",
    type: "Institucional",
  },
  {
    id: "14",
    title: "Impresionarte",
    location: "Edificio Crea, Zaragoza",
    year: "2006",
    type: "Centro Cultural",
  },
  {
    id: "15",
    title: "ESTAMPA 2006",
    location: "Galería Centro de Arte Moderno, Madrid",
    year: "2006",
    type: "Feria",
  },
  {
    id: "16",
    title: "ESTAMPA 2007",
    location: "Galería Centro de Arte Moderno, Madrid",
    year: "2007",
    type: "Feria",
  },
  {
    id: "17",
    title: "Exposición Obra Gráfica",
    location: "Biblioteca Nacional, Madrid",
    year: "2008",
    type: "Institucional",
  },
  {
    id: "18",
    title: "Grabados por la Paz",
    location: "México",
    year: "2014",
    type: "Internacional",
  },
  {
    id: "19",
    title: "Gráfica",
    location: "Centro Cultural, San Lorenzo del Escorial, Madrid",
    year: "2015",
    type: "Centro Cultural",
  },
  {
    id: "20",
    title: "El Arte sale a la calle",
    location: "San Lorenzo del Escorial, Madrid",
    year: "2018",
    type: "Público",
  },
  {
    id: "21",
    title: "Feria Internacional de Grabado Fig Bilbao",
    location: "Bilbao",
    year: "2019",
    type: "Feria",
  },
  {
    id: "22",
    title: "Exposición Colectiva",
    location: "Galería Espacio Brecha, Gijón",
    year: "2019",
    type: "Galería",
  },
];

// EXPOSICIONES INDIVIDUALES
const individualExhibitions: Exhibition[] = [
  {
    id: "1",
    title: "Exposición Individual",
    location: "Caja Salamanca y Soria, Béjar, Salamanca",
    year: "1997",
    type: "Institucional",
  },
  {
    id: "2",
    title: "Exposición Individual",
    location: "Ateneo Cultural, Casino Obrero, Béjar, Salamanca",
    year: "1997",
    type: "Cultural",
  },
  {
    id: "3",
    title: "Exposición Individual",
    location: "Sala de Exposiciones Picasso, Salamanca",
    year: "1997",
    type: "Centro Cultural",
  },
  {
    id: "4",
    title: "Exposición Individual",
    location: "Caja Duero, Medina del Campo, Valladolid",
    year: "1998",
    type: "Institucional",
  },
  {
    id: "5",
    title: "Exposición Individual",
    location: "Caja Duero, Valladolid",
    year: "1999",
    type: "Institucional",
  },
  {
    id: "6",
    title: "Exposición Individual",
    location: "Galería Centro de Arte Moderno, Madrid",
    year: "2005",
    type: "Galería",
  },
  {
    id: "7",
    title: "Exposición Individual",
    location: "Sala de Exposiciones, San Lorenzo del Escorial, Madrid",
    year: "2019",
    type: "Centro Cultural",
  },
  {
    id: "8",
    title: "Exposición Individual",
    location: "Galería Cutto, Madrid",
    year: "2022",
    type: "Galería",
  },
  {
    id: "9",
    title: "Exposición Individual",
    location: "Galería Cutto, Madrid",
    year: "2023",
    type: "Galería",
  },
  {
    id: "10",
    title: "Exposición Individual",
    location: "Casa de la Cultura de San Lorenzo del Escorial, Madrid",
    year: "2024",
    type: "Centro Cultural",
  },
];

// OBRAS EN COLECCIONES PÚBLICAS
const publicCollections: Collection[] = [
  {
    id: "1",
    name: "Fondos de la colección de grabado",
    location: "Facultad de Bellas Artes de la U.C.M., Madrid",
    description:
      "Obra gráfica en la colección de la Universidad Complutense de Madrid",
  },
  {
    id: "2",
    name: "Selección de grabado contemporáneo",
    location: "Biblioteca Nacional, Madrid",
    description:
      "Obra incluida en la selección de grabado contemporáneo de la Biblioteca Nacional",
  },
  {
    id: "3",
    name: "Colección Corporativa",
    location: "Cristalería Saint-Gobain S.A.",
    description: "Obra en la colección corporativa de Saint-Gobain",
  },
  {
    id: "4",
    name: "Colección Fundación",
    location: "Fundación Vivanco, La Rioja",
    description: "Obra en la colección de la Fundación Vivanco",
  },
];

export default function Awards() {
  const [activeTab, setActiveTab] = useState("premios");

  const tabs = [
    { id: "premios", label: "Premios y Selecciones" },
    { id: "colectivas", label: "Exposiciones Colectivas" },
    { id: "individuales", label: "Exposiciones Individuales" },
    { id: "colecciones", label: "Colecciones Públicas" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "premios":
        const allAwardsAndSelections = [
          ...awards.map((award) => ({ ...award, type: "premio" })),
          ...selections.map((selection) => ({
            ...selection,
            type: "seleccion",
          })),
        ].sort((a, b) => {
          const yearA = parseInt(a.year.split("-")[0]);
          const yearB = parseInt(b.year.split("-")[0]);
          return yearB - yearA;
        });

        return allAwardsAndSelections.map((item, index) => (
          <motion.div
            key={`${item.type}-${item.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-soft-blue hover:border-light-sage shadow-sm">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-futura text-lg font-medium text-charcoal">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-charcoal/70 bg-soft-blue/20 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <p className="text-charcoal/70 font-medium text-sm mb-3">
                  {item.organization}
                </p>
              </div>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ));

      case "colectivas":
        return collectiveExhibitions.map((exhibition, index) => (
          <motion.div
            key={exhibition.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-soft-blue hover:border-light-sage shadow-sm">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-futura text-lg font-medium text-charcoal ">
                    {exhibition.title}
                  </h3>
                  <span className="text-sm font-medium text-charcoal/70 bg-soft-blue/20 px-3 py-1 rounded-full">
                    {exhibition.year}
                  </span>
                </div>
                <p className="text-charcoal/70 font-medium text-sm">
                  {exhibition.location}
                </p>
              </div>
            </div>
          </motion.div>
        ));

      case "individuales":
        return individualExhibitions.map((exhibition, index) => (
          <motion.div
            key={exhibition.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-soft-blue hover:border-light-sage shadow-sm">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-futura text-lg font-medium text-charcoal ">
                    {exhibition.title}
                  </h3>
                  <span className="text-sm font-medium text-charcoal/70 bg-soft-blue/20 px-3 py-1 rounded-full">
                    {exhibition.year}
                  </span>
                </div>
                <p className="text-charcoal/70 font-medium text-sm">
                  {exhibition.location}
                </p>
              </div>
            </div>
          </motion.div>
        ));

      case "colecciones":
        return publicCollections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 border-soft-blue hover:border-light-sage shadow-sm">
              <div className="mb-4">
                <h3 className="font-futura text-lg font-medium text-charcoal mb-2 ">
                  {collection.name}
                </h3>
                <p className="text-charcoal/70 font-medium text-sm mb-3">
                  {collection.location}
                </p>
              </div>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {collection.description}
              </p>
            </div>
          </motion.div>
        ));

      default:
        return null;
    }
  };

  return (
    <section
      id="premios"
      className="py-20 bg-gradient-to-br from-soft-lavender/50 via-cream to-warm-beige/40 relative"
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
            Trayectoria Artística
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base max-w-3xl mx-auto">
            Una trayectoria de más de 25 años con múltiples premios,
            selecciones, exposiciones y reconocimientos en certámenes nacionales
            e internacionales, destacando especialmente en el ámbito del grabado
            y las artes gráficas.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-charcoal text-white"
                  : "bg-white/80 text-charcoal/70 hover:bg-soft-blue/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderContent()}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-white/50"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-futura text-4xl font-bold text-charcoal mb-2">
                {selections.length + awards.length}
              </div>
              <p className="text-charcoal/70 text-sm sm:text-base">
                Premios y Selecciones
              </p>
            </div>
            <div>
              <div className="font-futura text-4xl font-bold text-charcoal mb-2">
                {collectiveExhibitions.length + individualExhibitions.length}
              </div>
              <p className="text-charcoal/70 text-sm sm:text-base">
                Exposiciones
              </p>
            </div>
            <div>
              <div className="font-futura text-4xl font-bold text-charcoal mb-2">
                {publicCollections.length}
              </div>
              <p className="text-charcoal/70 text-sm sm:text-base">
                Colecciones Públicas
              </p>
            </div>
            <div>
              <div className="font-futura text-4xl font-bold text-charcoal mb-2">
                25+
              </div>
              <p className="text-charcoal/70 text-sm sm:text-base">
                Años de Trayectoria
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
