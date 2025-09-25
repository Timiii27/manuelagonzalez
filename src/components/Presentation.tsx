"use client";

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <section
      id="presentacion"
      className="py-20 bg-gradient-to-br from-soft-blue/40 via-white to-light-sage/30 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-futura text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 md:mb-8">
              Quien Soy
            </h2>
            <div className="space-y-4 md:space-y-6 text-charcoal/80 leading-relaxed text-sm sm:text-base">
              <p>
                Artista plástica multidisciplinar, dedicada a la pintura,
                grabado y dibujo. Nace en Salamanca en 1966. Su infancia
                transcurre en Ledrada, junto con su familia. Ya desde pequeña se
                puede apreciar su carácter soñador y creativo. Transformando
                objetos de desecho en muñecos, pintando piedras, o creando sus
                propios diseños.
              </p>

              <p>
                A los 11 años se va vivir a Salamanca, para continuar allí sus
                estudios. Al finalizar COU y selectividad, decide hacer Bellas
                Artes pero no fue posible. Estudió empresariales durante dos
                años y los abandonó, ya que no tenía ningún interés. Y empieza a
                trabajar en la empresa familiar, donde continuará hasta su
                marcha a Madrid.
              </p>

              <p>
                Atraída por el mundo de la moda, en 1989 decide estudiar Diseño
                de Moda en la escuela de Diseño y Moda Catania en Salamanca,
                participando en bastantes desfiles, una vez finalizados estos y
                persiguiendo su sueño empieza a preparar el ingreso en Bellas
                Artes en la escuela de San Eloy.
              </p>

              <p>
                1993 comienza Bellas Artes en Salamanca durante un año. Al
                siguiente año se va a vivir a Madrid dónde continua sus estudios
                y finaliza en 1998 licenciándose en las especialidades de dibujo
                y pintura en la Universidad Complutense de Madrid.
              </p>

              <p>
                A partir de ese momento su vida girará entorno al arte.
                Formándose en distintos talleres de grabado, (José Rincón, María
                Expósito…), talleres de dibujo en el círculo de Bellas Artes,
                cursos de diseño Gráfico y apreciación del arte contemporáneo y
                realizando su propia obra. Siempre con un carácter muy personal,
                creando seres y espacios imaginarios. Haciendo una introspección
                sobre la forma de vivir, los valores perdidos y preocupada
                siempre por la naturaleza tan olvidada con las nuevas
                tecnologías y el maltrato de esta.
              </p>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-first lg:order-last"
          >
            <div className="aspect-[4/5] w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] rounded-lg overflow-hidden shadow-lg">
              <img
                alt="Manuela González - Artista"
                className="w-full h-full object-cover"
                src="/images/manuelaGonzalez.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
