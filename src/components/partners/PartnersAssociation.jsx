import React from "react";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

const PartnersAssociation = () => {
  const partnershipModels = [
    {
      type: "Refiere",
      description: "Gana comisiones refiriendo a Q10.",
      subDescription: "¡Nosotros nos encargamos del resto!",
      benefits: ["Obtén el 15% de comisión por cada venta efectiva."],
      pricing: "Sin costo de suscripción",
      ctaText: "¡Afíliate ahora!",
      ctaId: "btn_prueba_partners_refiere",
    },
    {
      type: "Revende",
      description:
        "Aumenta tus ingresos y adquiere descuentos, beneficios e incentivos exclusivos.",
      benefits: [
        "30% de descuento en la plataforma Q10 para ventas nuevas y renovaciones.",
        "Descuentos adicionales por volumen de facturación.",
        "Acompañamiento y capacitación personalizados.",
        "Administración de la facturación del cliente final.",
      ],
      pricing: "99 USD / Año",
      ctaText: "¡Afíliate ahora!",
      ctaId: "btn_prueba_partners_revende",
    },
  ];

  return (
    <section className="lg:py-16 lg:mx-20 px-6 sm:px-10">
      <div className="container mx-auto">
        <div>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-neutral-800 text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Formas de asociarte
          </motion.h2>
          <motion.h3
            className="lg:text-xl text-neutral-600 mb-12 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Elige el camino ideal para ti y tu negocio.
          </motion.h3>
        </div>

        {/* Contenedor flex para tarjetas responsivas */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16 lg:gap-20">
          {partnershipModels.map((model, index) => (
            <motion.section
              key={index}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-full xl:w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="bg-white border-2 border-neutral-300 px-6 sm:px-8 py-6 rounded-lg shadow-md mb-6 sm:mb-8 md:mb-10">
                <div className="w-full border-b-2 pb-2 mb-4 border-q10-orange">
                  <motion.h2
                    className="text-xl sm:text-2xl font-semibold text-neutral-800 text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {model.type}
                  </motion.h2>
                </div>
                <motion.p
                  className="text-neutral-800 text-sm sm:text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {model.description}
                </motion.p>
                {model.subDescription && (
                  <motion.p
                    className="text-neutral-800 text-sm sm:text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    {model.subDescription}
                  </motion.p>
                )}
              </div>
              <div className="bg-neutral-200 px-6 sm:px-8 py-6 border-2 border-neutral-300 rounded-lg">
                <motion.ul
                  className="space-y-3 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {model.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-neutral-800 text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    >
                      <div className="mr-3 font-bold">
                        <CircleCheckBig size={26} color="#FF8500" />
                      </div>
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="flex justify-between items-center border-t-2 pt-4 mb-4 border-q10-orange">
                  <motion.h3
                    className="w-1/2 text-md sm:text-lg font-medium text-neutral-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    {model.pricing}
                  </motion.h3>
                  <motion.button
                    id={model.ctaId}
                    onClick={() =>
                      (window.location.href =
                        "https://waf-www.q10.com/Colombia/Contacto")
                    }
                    className="w-1/2 py-2 bg-neutral-700 text-white font-semibold lg:text-xl lg:px-6 lg:py-2 rounded-lg hover:bg-opacity-90 hover:bg-neutral-500 hover:text-white transition-colors shadow-lg hover:shadow-xl hover:cursor-pointer"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {model.ctaText}
                  </motion.button>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersAssociation;
