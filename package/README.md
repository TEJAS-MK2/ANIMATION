# ANIMATION package API

The package entrypoint provides stable metadata and component source paths for tooling.

```js
import { version, components, getComponentPath } from '@tejas-mk2/animation/package';

console.log(version);
console.log(getComponentPath('modal'));
```

The component paths point to the reusable source files under `components/`. The package intentionally keeps the browser gallery and documentation separate from the component source layer.

## Available names

`magneticButton`, `tiltCard`, `textReveal`, `spotlightCard`, `auroraBackground`, `scrambleText`, `glowButton`, `animatedUnderline`, `depthCard`, `flipCard`, `typewriter`, `gradientText`, `letterWave`, `gridPulse`, `particleField`, `meshGradient`, `rippleButton`, `borderBeam`, `elasticCard`, `countUp`, `modal`, `toast`, `dropdown`, `tooltip`, `tabs`, `accordion`, `loading`, `scrollReveal`, `cursorHighlight`, `commandPalette`, `progressBar`, `skeleton`, `segmentedControl`.

`getComponentPath()` throws a `RangeError` for an unknown component name.
