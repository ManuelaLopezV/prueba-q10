import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Empresa",
      links: [
        {
          text: "Acerca de nosotros",
          url: "https://www.q10.com/colombia/Empresa",
        },
        { text: "Blog", url: "https://www.q10.com/colombia/Blog" },
        { text: "Contáctanos", url: "https://www.q10.com/Colombia/Contacto" },
        {
          text: "info@q10.com",
          url: "https://mail.google.com/mail/u/0/?fs=1&to=info@q10.com&su=%C2%A1Quiero+conocer+m%C3%A1s+de+Q10+Software+Acad%C3%A9mico+Integral!&body=Hola,+Q10%0A%0AEstuve+navegando+en+su+sitio+web+y+quisiera+conocer+m%C3%A1s+de+la+plataforma+acad%C3%A9mica+para+mi+instituci%C3%B3n+de+educaci%C3%B3n.%0AEstar%C3%A9+esperando+la+informaci%C3%B3n.%0A%0A%C2%A1Gracias!&tf=cm",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          text: "Aviso de privacidad",
          url: "https://www.q10.com/AvisoDePrivacidad",
        },
        {
          text: "Política de Tratamiento de Datos Personales",
          url: "https://www.q10.com/Politica_Tratamiento_Datos_Personales.pdf",
        },
      ],
    },
    {
      title: "Ediciones",
      links: [
        {
          text: "Educación Superior",
          url: "https://www.q10.com/Colombia/EducacionSuperior",
        },
        {
          text: "Educación para el Trabajo - Capacitación",
          url: "https://www.q10.com/Colombia/ETDH",
        },
        { text: "Colegios", url: "https://www.q10.com/Colombia/Colegios" },
      ],
    },
    {
      title: "Soporte Técnico",
      links: [
        {
          text: "Pagos en línea",
          url: "https://jack.q10.com/Q10/Factura/PagoLinea/Consultar?aplentId=5caba576-96b9-4a11-8fa3-b97f73082392",
        },
        { text: "Estado del servicio", url: "https://q10.instatus.com/" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold text-q10-orange mb-4">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-300 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-700 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/public/logo-blanco.svg"
              alt="Logo Partners Q10"
              className="h-16 w-auto ml-3"
            />
            <div className="ml-6 flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="/public/colombia.svg"
                  alt="Bandera de Colombia"
                  className="h-6 w-6"
                />
                <p className="text-xl">Colombia</p>
              </div>
              <p className="text-xl">© Q10 - 2025</p>
            </div>
          </div>

          <p className="text-center md:text-right text-xl pl-0 md:pl-24">
            Prueba Frontend Realizada por Manuela López
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
