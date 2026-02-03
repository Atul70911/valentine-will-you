import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Starfield from './components/Starfield';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-wrapper">
      <Starfield />
      <App />
    </div>
  </StrictMode>
);
