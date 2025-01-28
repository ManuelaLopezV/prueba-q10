import React from "react";
import { motion } from "framer-motion";

const PartnerSteps = () => {
  const stepsData = [
    {
      step: 1,
      icon: "/informate.svg",
      title: "Infórmate",
      description: "Contáctanos y descubre cómo elevar tus ingresos con Q10.",
    },
    {
      step: 2,
      icon: "/capacitate.svg",
      title: "Capacítate",
      description: "Descubre Q10 y adquiere habilidades para impulsarlo.",
    },
    {
      step: 3,
      icon: "/gana.svg",
      title: "Gana",
      description: "Gana ingresos conviertiéndote en un Partner certificado.",
    },
  ];

  return (
    <section className="mt-10 pt-10 bg-neutral-100 pb-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <motion.h1
          className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-7  text-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Empieza tu camino con Q10:
        </motion.h1>
        <h2 className="text-xl sm:text-2xl lg:text-2xl text-center text-neutral-600 mb-16 font-semibold">
          3 pasos para ser Partner
        </h2>

        {/* Tarjetas de pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col border mx-10 sm:mx-0 border-neutral-500 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <motion.figure
                  className="w-14 h-14 mr-6 sm:w-16 sm:h-16 lg:w-20 lg:h-20 lg:mr-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-auto h-auto"
                  />
                </motion.figure>
                <motion.h2
                  className="text-lg sm:text-xl xl:text-2xl font-bold text-neutral-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="text-q10-orange">{step.step}.</span>&nbsp;
                  {step.title}
                </motion.h2>
              </div>
              <motion.p
                className="text-neutral-800 text-center sm:text-left pt-2 text-base sm:text-lg xl:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSteps;
