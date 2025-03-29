import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="px-2 max-w-5xl text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-right">
          <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent leading-right">Hola
          </span><span className="bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent leading-right">,
          </span> soy Kendrick Alejandro Sánchez Beitia
          </h1>

          <p className="px-6 text-justify tex-gray-400 text-lg mb-8 max-w-5xl mx-auto">
            Soy un desarrollador  que disfruta creando aplicaciones de escritorio y web, de forma que sean  
            limpias y escalables. Mi objetivo es crear soluciones que ofrezcan un 
            rendimiento óptimo y una experiencia de usuario excepcional.
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="#projects"
              className="bg-blue-500 border border-blue-500/50 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]  hover:bg-blue-500/10"
            >
              Ver Proyectos
            </a>

            <a
              href="#contact"
              className="border bg-green-500  border-green-500/50 text-white-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10"
            >
              Contactame
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};