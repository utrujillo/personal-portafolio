// src/components/common/ThemeProvider.js
"use client";

import useDarkMode from '@/hooks/useDarkMode';
import React, { useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  // 🚨 OJO: El hook ya maneja la clase 'dark' en el <html>.
  // Aquí solo devolvemos los hijos. 
  // Podrías usar un Context API para pasar 'theme' y 'toggleTheme' si los necesitas más abajo, 
  // pero para solo aplicar la clase, esto es suficiente.

  return <>{children}</>;
};

export default ThemeProvider;