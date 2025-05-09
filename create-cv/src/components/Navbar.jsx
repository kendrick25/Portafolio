import { useEffect } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full font-bold z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="px-2 font-mono text-xl font-bold text-white ">
          Mail<span className="text-blue-500">
          To</span><span className="text-green-500">
          .Code</span>
          <span className="text-green-500">{" </>"}</span>
          </a>

          {/* Ocultar la barra cuando el menú está abierto */}
          <div
            
            className={`w-7 h-5 font-bold relative cursor-pointer z-40 md:hidden text-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Acerca de mí
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
