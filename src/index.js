import './style.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';
import { Provider } from './context/ideas';


const root = createRoot(document.getElementById('root'));

root.render(
  <Provider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </Provider>
);
