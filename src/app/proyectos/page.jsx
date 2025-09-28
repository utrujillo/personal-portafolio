import React from 'react';
import Link from 'next/link';

// Importa el layout (si tienes un root layout) o el Navbar/Footer directamente
// Nota: Si usas un Root Layout (src/app/layout.tsx), no necesitas Navbar/Footer aquí.
// Asumiremos que estás en el Root Layout y solo necesitamos el contenido:

// Datos completos de todos tus proyectos (debes expandir esto)
const allProjects = [
    // 💡 Usa la misma estructura de datos que en PortfolioHighlights, pero con más info
    { id: 1, title: "Plataforma de Trading Global", summary: "Arquitectura de microservicios, 10k transacciones/min.", stack: "FastAPI, Vue, PostgreSQL", type: "Web/Backend", complexity: "Alto", link: "/proyectos/trading-global" },
    { id: 2, title: "App Móvil de Gestión de Inventario", summary: "React Native, reducción de auditoría del 60% en almacenes.", stack: "React Native, Rails, Redux", type: "Móvil/FullStack", complexity: "Medio", link: "/proyectos/gestion-inventario" },
    { id: 3, title: "Sistema CRM/ERP Personalizado", summary: "Solución Full-Stack con Laravel/React para procesos internos.", stack: "PHP/Laravel, React, MySQL", type: "Web/FullStack", complexity: "Medio-Alto", link: "/proyectos/crm-personalizado" },
    // AÑADE MUCHOS MÁS PROYECTOS AQUÍ
];

const ProyectosPage = () => {
    return (
        <main className="min-h-screen bg-gray-50 pt-16">
            <div className="container mx-auto px-6 py-16 md:py-24">
                
                {/* Encabezado */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                        Portafolio y Casos de Estudio
                    </h1>
                    <p className="text-xl text-gray-600">
                        Una revisión detallada de mis proyectos más relevantes, enfocada en la arquitectura y el impacto de negocio.
                    </p>
                </div>

                {/* Filtros Opcionales (para un toque más profesional) */}
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    <span className="px-4 py-2 text-sm font-semibold rounded-full bg-indigo-600 text-white">Todos</span>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 border hover:bg-indigo-50 cursor-pointer">Web Full-Stack</span>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 border hover:bg-indigo-50 cursor-pointer">Móvil (RN/Flutter)</span>
                    <span className="px-4 py-2 text-sm font-medium rounded-full bg-white text-gray-700 border hover:bg-indigo-50 cursor-pointer">Arquitectura & Backend</span>
                </div>

                {/* Lista de Proyectos (Cuadrícula) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <ProjectListItem key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
};

// Componente simple para cada ítem de la lista
const ProjectListItem = ({ project }) => (
    <Link href={project.link} className="block group">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-indigo-500 transition duration-300">
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition mb-2">
                {project.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{project.type} | Complejidad: {project.complexity}</p>
            <p className="text-gray-700 mb-4">{project.summary}</p>
            
            {/* Stack Técnico */}
            <div className="flex flex-wrap gap-2">
                {project.stack.split(', ').map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            <p className="mt-4 text-indigo-600 font-semibold flex items-center">
                Ver Caso de Estudio Detallado
                <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </p>
        </div>
    </Link>
);

export default ProyectosPage;