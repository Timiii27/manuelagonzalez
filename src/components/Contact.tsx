"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId = "service_8ef47la";
      const templateId = "template_upbvn0n";
      const publicKey = "xmWy_IuWnqneiwT_2";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "manuelagonzalezicm@gmail.com",
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-soft-blue/50 via-white to-light-sage/40 relative"
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
            Contacto
          </h2>
          <p className="text-charcoal/80 text-sm sm:text-base max-w-3xl mx-auto">
            ¿Te interesa mi trabajo? Me encantaría conocer tu proyecto y
            explorar cómo podemos colaborar juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-soft-blue/50 rounded-lg focus:outline-none focus:border-soft-blue transition-colors duration-300 bg-white/90 backdrop-blur-sm"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-soft-blue/50 rounded-lg focus:outline-none focus:border-soft-blue transition-colors duration-300 bg-white/90 backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-gray/30 rounded-lg focus:outline-none focus:border-warm-gray transition-colors duration-300 bg-white"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-soft-blue/50 rounded-lg focus:outline-none focus:border-soft-blue transition-colors duration-300 bg-white/90 backdrop-blur-sm resize-none"
                  placeholder="Cuéntame más sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal text-white py-4 px-8 rounded-lg hover:bg-charcoal/80 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-futura text-2xl font-medium text-charcoal mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-blue/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-warm-gray"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Email</h4>
                    <a
                      href="mailto:manuelagonzalezicm@gmail.com"
                      className="text-warm-gray text-sm sm:text-base"
                    >
                      manuelagonzalezicm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-blue/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-warm-gray"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">
                      Ubicación
                    </h4>
                    <p className="text-warm-gray text-sm sm:text-base">
                      Madrid, España
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-charcoal mb-4">
                Sígueme en redes
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@manuelagonzalez.arte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-warm-gray/20 rounded-full flex items-center justify-center hover:bg-warm-gray/30 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-warm-gray"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-warm-gray/20 rounded-full flex items-center justify-center hover:bg-warm-gray/30 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-warm-gray"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/manuelagonzalezicm?igsh=bWI0NnhyeXdmY3Ix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-warm-gray/20 rounded-full flex items-center justify-center hover:bg-warm-gray/30 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-warm-gray"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
