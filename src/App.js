import React from 'react';
import './App.css';
import Contenu from './Components/Content/Contenu';
import ThemeContextProvider from './Context/ThemeContext';
import BtnToggle from './Components/BtnToggle/BtnToggle';

export default function App() {
  return (
    <div>
      <ThemeContextProvider>
        <BtnToggle />
        <Contenu />
      </ThemeContextProvider>
    </div>
  )
}

