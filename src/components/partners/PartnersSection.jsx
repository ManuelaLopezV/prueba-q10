import React from "react";
import { motion } from "framer-motion";

const PartnerSection = () => {
  const stepsData = [
    {
      step: 1,
      icon: "/src/assets/icons/informate.svg",
      title: "Infórmate",
      description: "Ponte en contacto con nosotros e incrementa tus ingresos.",
    },
    {
      step: 2,
      icon: "/src/assets/icons/capacitate.svg",
      title: "Capacítate",
      description: "Conoce a Q10 y desarrolla habilidades para venderlo.",
    },
    {
      step: 3,
      icon: "/src/assets/icons/gana.svg",
      title: "Gana",
      description:
        "Obtén tu insignia Partner y gana por ventas y/o renovaciones.",
    },
  ];

  return (
    <section className="mt-10 pt-10 bg-neutral-100 pb-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 text-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sé uno de nuestros Partners Q10 en solo 3 pasos
        </motion.h1>

        {/* Tarjetas de pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col border border-neutral-500 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <motion.figure
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mr-6"
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
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-neutral-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <span className="text-q10-orange">{step.step}.</span>&nbsp;
                  {step.title}
                </motion.h2>
              </div>
              <motion.p
                className="text-neutral-800 text-center sm:text-left pt-2 text-sm sm:text-base lg:text-lg"
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

export default PartnerSection;
