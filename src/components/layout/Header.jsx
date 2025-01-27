import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Planes", href: "/" },
    { label: "Empresa", href: "https://www.q10.com/Colombia/Empresa" },
    { label: "Recursos", href: "/" },
    { label: "Partners", href: "/src/App.jsx" },
    { label: "Contacto", href: "https://www.q10.com/Colombia/Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white shadow-md" : "bg-neutral-200"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={
                isScrolled
                  ? "/src/assets/images/logo-partners.svg"
                  : "/src/assets/images/logo-partners.svg"
              }
              alt="Logo Partners Q10"
              className={`h-12 w-auto transition-all ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral-600 hover:text-neutral-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-4 items-center font-semibold text-sm justify-start">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-neutral-700 hover:text-q10-orange uppercase transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.q10.com/PruebaGratuita/Colombia/Profesional")
              }
              className="text-white bg-amber-500 px-4 py-2 rounded-md uppercase font-bold shadow-lg hover:bg-amber-600 transition-all"
            >
              Prueba gratuita
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white md:hidden shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4 font-semibold">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-700 hover:text-q10-orange uppercase transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.q10.com/PruebaGratuita/Colombia/Profesional")
                  }
                  className="text-white bg-q10-orange px-6 py-2 rounded-md shadow-md hover:bg-amber-500 transition-all"
                >
                  Conviértete en Partner
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
