// src/components/PortfolioHighlights/PortfolioHighlights.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 🚨 Importamos el componente Image de NextJS

// 💡 Importaciones de imágenes desde tu estructura @/assets/images/works/
import Cetis from '@/assets/images/works/cetis.png';
import PollosApp from '@/assets/images/works/pollosApp.png';
import InvitationsApp from '@/assets/images/works/invitationsApp.png';
import SchoolApp from '@/assets/images/works/schoolApp.png'; 

// Datos de proyectos actualizados para usar las variables de imagen
const projects = [
  {
    title: "Plataforma de Trading Global",
    description: "Arquitectura de microservicios utilizando FastAPI y Vue para procesar más de 10,000 transacciones por minuto.",
    stack: "FastAPI, Vue, PostgreSQL, Docker",
    image: Cetis, // Usando la variable importada
    link: "/proyectos/trading-global", 
  },
  {
    title: "App Móvil de Gestión de Inventario",
    description: "Aplicación B2B desarrollada en React Native, reduciendo el tiempo de auditoría de inventario en almacenes en un 60%.",
    stack: "React Native, Rails, Redux",
    image: PollosApp, // Usando la variable importada
    link: "/proyectos/gestion-inventario",
  },
  {
    title: "Sistema CRM/ERP Personalizado",
    description: "Desarrollo Full-Stack con PHP/Laravel y React para automatizar procesos internos y centralizar datos de clientes.",
    stack: "PHP/Laravel, React, MySQL",
    image: InvitationsApp, // Usando la variable importada
    link: "/proyectos/crm-personalizado",
  },
  {
    title: "MVP de Streaming Interactivo",
    description: "Lanzamiento rápido (3 meses) de un MVP usando Flutter, validando la demanda en los mercados de iOS y Android.",
    stack: "Flutter, Firebase, Node.js",
    image: SchoolApp, // Usando la variable importada
    link: "/proyectos/streaming-interactivo",
  },
];

const PortfolioHighlights = () => {
  return (
    // 💡 Añadir clases de Modo Oscuro a la sección
    <div id="portafolio" className="container mx-auto px-6 py-20 md:py-32 bg-white dark:bg-gray-900 transition duration-500">
      
      {/* Encabezado y CTA principal */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Proyectos Destacados (Casos de Éxito)
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Una muestra del impacto y la diversidad técnica lograda en mi carrera.
        </p>
      </div>

      {/* Cuadrícula de Proyectos (Responsiva: 1, 2 o 4 columnas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      {/* CTA Final para ir a la página detallada */}
      <div className="text-center mt-12">
        <Link 
          href="/proyectos" 
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 text-lg"
        >
          Ver Todos los Casos de Estudio y Detalles Técnicos →
        </Link>
      </div>
      
    </div>
  );
};

// Componente Card para cada Proyecto
const ProjectCard = ({ project }) => (
  // Usamos un Link para hacer toda la tarjeta clickeable
  <Link href={project.link} className="block group">
    {/* 🚨 CLAVE: Altura fija (h-full) y altura mínima (min-h-[420px]) para uniformidad */}
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col h-full min-h-[420px]">
      
      {/* 🚨 Imagen del Proyecto - Usando next/image con 'fill' y contenedor h-40 */}
      <div className="relative h-40 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <Image 
          src={project.image} 
          alt={`Captura del proyecto ${project.title}`} 
          fill={true} // Hace que la imagen llene el div padre
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:opacity-75 transition duration-300"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition duration-300 mb-2">
          {project.title}
        </h3>
        
        {/* 🚨 CLAVE: Truncar el texto después de 3 líneas para la altura uniforme */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3"> 
          {project.description}
        </p>
        
        {/* Stack Técnico - Etiquetas (empujan hacia abajo y quedan al fondo) */}
        <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
          {project.stack.split(', ').map((tech, i) => (
            <span key={i} className="text-xs font-medium px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

export default PortfolioHighlights;