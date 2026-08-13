import { render } from 'solid-js/web';
import { version, getComponentPath } from '@tejas-mk2/animation';
import './style.css';

function App() { return <main><h1>ANIMATION + Solid</h1><p>v{version} · {getComponentPath('magneticButton')}</p><button class="animation-button">Animate</button></main>; }
render(() => <App />, document.getElementById('root'));
