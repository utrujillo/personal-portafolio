// src/hooks/useDarkMode.js
"use client";

import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // 1. Inicializa el estado, comprobando localStorage primero
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      // Por defecto, usa el tema del sistema operativo si no hay preferencia guardada
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Valor por defecto durante el SSR
  });

  // 2. Efecto para aplicar la clase 'dark' al HTML y guardar la preferencia
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // 3. Función para alternar el tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return [theme, toggleTheme];
};

export default useDarkMode;