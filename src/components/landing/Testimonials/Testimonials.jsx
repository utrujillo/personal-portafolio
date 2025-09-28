// src/components/TestimonialsSlider.js

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// 💡 Importación directa de los archivos de logos desde src/images/logos/
import TechGrowthLogo from '@/assets/images/logos/techGrowth.png';
import AppInnovateLogo from '@/assets/images/logos/appInnovate.png';
import DataCoreLogo from '@/assets/images/logos/datacore.png';

const testimonialsData = [
  {
    quote: "John no solo entregó código de alta calidad; **arquitectó la migración** completa de nuestro monolito a microservicios. Su visión técnica fue clave para reducir la latencia en un 40%.",
    name: "María Fernández",
    title: "CTO, TechGrowth Solutions",
    logo: TechGrowthLogo, // Usamos la variable importada
    alt: "Logo de TechGrowth Solutions",
  },
  {
    quote: "Su dominio en **React Native y Flutter** nos permitió lanzar nuestra aplicación en tiempo récord, cubriendo iOS y Android con una eficiencia sorprendente. Un verdadero socio estratégico.",
    name: "David Soto",
    title: "Director de Producto, AppInnovate",
    logo: AppInnovateLogo,
    alt: "Logo de AppInnovate",
  },
  {
    quote: "**Liderazgo tranquilo y decisivo.** John tiene la rara habilidad de traducir requisitos de negocio complejos en soluciones técnicas elegantes y escalables. Un experto en Rails y FastAPI.",
    name: "Elena Ramos",
    title: "Ingeniera Senior, DataCore Inc.",
    logo: DataCoreLogo,
    alt: "Logo de DataCore Inc.",
  },
];

const SLIDE_INTERVAL_MS = 6000;

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  // Lógica del slider automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []); // Se ejecuta solo al montar

  const currentTestimonial = testimonialsData[current];

  return (
    <div id="testimonios" className="px-6 py-20 md:py-32 bg-indigo-50 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">
          Experiencias Reales
        </h2>
        
        {/* Contenedor del Testimonio Único */}
        {currentTestimonial && currentTestimonial.logo ? (
            
            <div 
                className="relative bg-white p-8 md:p-12 rounded-xl shadow-2xl border-t-4 border-indigo-600 transition-all duration-700 ease-in-out"
            >
                {/* Logo de la Empresa */}
                <div className="absolute top-0 right-0 p-4 opacity-70">
                    <Image
                      src={currentTestimonial.logo} // 🚨 Ahora sabemos que 'currentTestimonial.logo' existe
                      alt={currentTestimonial.alt}
                      height={80} 
                      className="object-contain"
                    />
                </div>
                
                {/* Cita */}
                <blockquote className="text-xl md:text-2xl italic text-gray-800 mb-8 mt-4">
                    "{currentTestimonial.quote}"
                </blockquote>
                
                {/* Firma */}
                <div className="mt-6">
                    <p className="text-lg font-bold text-gray-900">{currentTestimonial.name}</p>
                    <p className="text-base text-indigo-600">{currentTestimonial.title}</p>
                </div>
            </div>
        ) : (
            // Opcional: Mostrar un loader si no hay datos
            <div className="text-center text-gray-500 p-12">Cargando testimonio...</div>
        )}       

        {/* Indicadores de Posición */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === current ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;