import { RevealOnScroll} from "../RevealOnScroll";
export const Projects = () => {
    return( 
    <section 
    id="projects"
    className="min-h-screen flex items-center justify-center px-6">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2  className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Proyectos Realizados
            </h2>

            <div className="grid drid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">1. dfacescan</h3>
                    <p className="text-gray-400 mb-4">
                    Proyecto de reconocimiento de estudiantes para asistencia autónoma, 
                    en cada carpeta se probaron distintas cosas y se detalla en cada README 
                    el uso de los códigos.
                    </p>
                    <div>
                        {["Python"].map((tech, key)=>(
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end items-center">
                        <a href="https://github.com/kendrick25/dfacescan" className="text-gray-400 hover:text-white transition-colors my-4">
                            {" "}
                            Ver Proyecto →
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">2. dfacescan</h3>
                    <p className="text-gray-400 mb-4">
                    Proyecto de reconocimiento de estudiantes para asistencia autónoma, 
                    en cada carpeta se probaron distintas cosas y se detalla en cada README 
                    el uso de los códigos.
                    </p>
                    <div>
                        {["React","Python"].map((tech, key)=>(
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end items-center">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors my-4">  
                            {" "}
                            Ver Proyecto →
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">3. dfacescan</h3>
                    <p className="text-gray-400 mb-4">
                    Proyecto de reconocimiento de estudiantes para asistencia autónoma, 
                    en cada carpeta se probaron distintas cosas y se detalla en cada README 
                    el uso de los códigos.
                    </p>
                    <div>
                        {["Python"].map((tech, key)=>(
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end items-center">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors my-4">
                            {" "}
                            Ver Proyecto →
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">4. dfacescan</h3>
                    <p className="text-gray-400 mb-4">
                    Proyecto de reconocimiento de estudiantes para asistencia autónoma, 
                    en cada carpeta se probaron distintas cosas y se detalla en cada README 
                    el uso de los códigos.
                    </p>
                    <div>
                        {["Python"].map((tech, key)=>(
                            <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-end items-center">
                       <a href="#" className="text-gray-400 hover:text-white transition-colors my-4">
                            {" "}
                            Ver Proyecto →
                        </a>
                    </div>
                </div>
            </div>

            
        </div>
    </RevealOnScroll>
    </section>
);
};