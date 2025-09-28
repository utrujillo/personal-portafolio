import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProfileImage from '@/assets/images/personal/utrujillo.jpeg'; 

const Hero = () => {
  return (
    // Contenedor principal: usa un fondo suave, padding generoso y un borde inferior 
    // para separarlo de la siguiente sección.
    <div className="text-center py-20 px-4 sm:py-24 md:py-32 bg-gray-50 border-b border-gray-200">
      
      {/* 📸 Foto Profesional */}
      {/* w-32 en móvil, w-40 en desktop. Centrada con mx-auto. */}
      {/* Asegúrate de tener una imagen llamada 'perfil.jpg' en tu carpeta 'public' */}
      <div className="mx-auto relative w-32 h-32 md:w-40 md:h-40"> 
        <Image 
          src={ProfileImage} 
          alt="Foto de Perfil Profesional Senior, John Doe" 
          fill={true} 
          
          // 💡 CLAVE: Indica el tamaño máximo de píxeles que renderizará la imagen en el DOM.
          // Esto asegura que Next.js solo genere y sirva un archivo de imagen optimizado 
          // que no exceda los 256px de ancho, incluso si la imagen original es gigante.
          sizes="(max-width: 768px) 128px, 256px" 
          
          className="rounded-full object-cover shadow-xl ring-4 ring-indigo-500/30"
          priority 
        /> 
      </div> 
      
      {/* 🌟 Titular Fuerte y Potente */}
      {/* Textos más grandes en desktop (md:text-7xl) para máximo impacto */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mt-8 leading-tight">
        Arquitecto de Software & <br className="hidden sm:inline" />
        <span className="text-indigo-600">Líder Técnico</span>
      </h1>
      
      {/* 💡 Subtítulo / Propuesta de Valor Senior */}
      <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-4xl mx-auto">
        **Más de 10 años** de experiencia diseñando y construyendo soluciones **Full-Stack** y **Móviles** escalables. Dominio en **React, Rails, FastAPI, Flutter y React Native.**
      </p>

      {/* 🎯 Llamadas a la Acción (CTA) */}
      {/* Diseño responsivo: Botones apilados en móvil (flex-col) y en línea en desktop (sm:flex-row) */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        
        {/* CTA Principal (Contratar/Proyectos) */}
        <Link 
          href="#portafolio" 
          className="bg-indigo-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Ver Proyectos Destacados
        </Link>
        
        {/* CTA Secundario (Contacto) */}
        <Link 
          href="#contacto" 
          className="border border-indigo-600 text-indigo-600 font-semibold py-3 px-10 rounded-full hover:bg-indigo-50 transition duration-300"
        >
          Solicitar Consultoría
        </Link>
      </div>
      
    </div>
  );
};

export default Hero;