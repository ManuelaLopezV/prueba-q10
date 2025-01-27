import React from "react";
import { motion } from "framer-motion";

const PartnerCTA = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-orange-400 to-orange-700 pt-16 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 text-center text-white">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Únete a nuestra red de Partners
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Y sé parte del futuro de la educación en Latinoamérica
        </motion.p>

        {/* Call To Action */}
        <motion.button
          onClick={() =>
            (window.location.href = "https://waf-www.q10.com/Colombia/Contacto")
          }
          className="inline-block bg-white text-q10-orange px-8 py-3 mt-5 rounded-lg font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 hover:bg-neutral-600 hover:text-white hover:shadow-2xl hover:shadow-q10-orange"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ¡Quiero unirme!
        </motion.button>
      </div>
    </motion.section>
  );
};

export default PartnerCTA;
