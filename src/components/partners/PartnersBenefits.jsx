import React, { useState } from "react";
import { motion } from "framer-motion";

const PartnersBenefits = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const benefitsData = [
    {
      icon: "/crecimiento.svg",
      title: "Impulsa tu crecimiento económico",
      description:
        "Potencia tus ingresos y expande tu impacto al ingresar a nuevos mercados educativos.",
    },
    {
      icon: "/red-contactos.svg",
      title: "Amplía tu red profesional",
      description:
        "Conecta con líderes del sector educativo y empresarial, ofreciéndoles soluciones innovadoras.",
    },
    {
      icon: "/internacional.svg",
      title: "Respaldo global",
      description:
        "Asóciate con una empresa reconocida, que proporciona acceso a herramientas, recursos y soporte especializado.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 py-16 mb-20 md:px-5 lg:mx-10 lg:py-16 lg:mb-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-2xl md:text-2xl lg:text-3xl font-bold text-center mb-20 text-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Beneficios de ser Partner Q10
        </motion.h1>

        <motion.div
          className="flex flex-col items-center sm:flex-col gap-10 sm:gap-16 md:flex-row md:gap-5 lg:gap-5 xl:justify-evenly"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Beneficios de ser Partner Q10*/}
          <motion.div
            className="w-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-3/5 xl:pl-10 xl:pr-10 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-5">
              {benefitsData.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex flex-row border-2 border-neutral-300 shadow-lg shadow-neutral-400 p-2 rounded-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex flex-col ml-3 justify-center">
                    <figure className="w-14 h-14">
                      <img
                        src={benefit.icon}
                        alt={benefit.title}
                        className="w-auto h-auto"
                      />
                    </figure>
                  </div>
                  <div className="flex flex-col my-1 justify-start px-7">
                    <div>
                      <p className="text-neutral-800 font-bold text-xl text-justify md:text-lg">
                        {benefit.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-neutral-800 text-justify md:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen de Video */}
          <motion.div
            className="flex flex-col justify-center cursor-pointer xl:pr-20"
            onClick={() => setIsVideoModalOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.img
              src="/video-q10.svg"
              alt="Video - Beneficios de Partners Q10"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Video Modal */}
          {isVideoModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
              onClick={() => setIsVideoModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  controls
                  className="w-full"
                  controlsList="nodownload noplaybackrate"
                >
                  <source src="" type="video/mp4" />
                </video>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersBenefits;
