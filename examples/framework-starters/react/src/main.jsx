import React from 'react';
import { createRoot } from 'react-dom/client';
import { version, getComponentPath } from '@tejas-mk2/animation';
import './style.css';

function App() {
  return <main><h1>ANIMATION + React</h1><p>v{version} · {getComponentPath('magneticButton')}</p><button className="animation-button">Animate</button></main>;
}

createRoot(document.getElementById('root')).render(<App />);
