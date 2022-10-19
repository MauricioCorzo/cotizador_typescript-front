// npm i create vite/@latest
// npm init -D @eslint/confi
//  npm install --save-dev eslint-config-prettie
// npm i @types/node
// npm i -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p. CREA LOS ARCHIVOS TAILWIND.CONFIG Y POSTCSS.CONFIG

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
