import { RevealOnScroll } from "../RevealOnScroll";
export const About =() =>{
    const frontendSkills =[
        "React",
        "Tailwind",
        "TypeScript",
    ];
    const backendSkills =[
        "Node.js",
        "Django",
        "Python",
        "MongoDB"
    ];

    return (
    <section 
    id= "about">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px4 mb-2 py-18 px-4">
            <h2  className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Acerca de mí
            </h2>

            <div className="rounded-xl p-8 border-white/10 border ">
                <p className="text-gray-300 mb-6 px-4">
                    Descripcion................................
                </p>
                <div className="grid drid-cpls-1 md:grid-cols-2 gap-6  items-center justify-center">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">

                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key)=>(
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">

                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid drid-cols-1 md:grid-cols-2 gap-6 mt-8 justify-center">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">📚 Educación</h3>
                    <ul>
                        <li>
                            <strong> Bachiller Especializado en Homosexualidad </strong>
                        </li>
                        <li>
                            Relavant Coursework
                        </li>
                    </ul>

                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Experienza de Trabajo</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Software Engenieer at ABC COrp (2020 - Present)</h4>
                            <p>
                                Developed and maintained.
                            </p>
                        </div>
                        <div>
                            <h4>Inter at DEF Statups (2019)</h4>
                            <p>
                                Asissted in buildind front-end.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>  
    </RevealOnScroll> 
    </section>
    );
};