import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroSpline from './components/HeroSpline.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('spline-root')).render(
  <React.StrictMode>
    <div style={{ width: '100vw', height: '100vh' }}>
      <HeroSpline />
    </div>
  </React.StrictMode>
);
