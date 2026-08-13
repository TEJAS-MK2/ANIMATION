import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { version, getComponentPath } from '@tejas-mk2/animation';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<main><h1>ANIMATION + Angular</h1><p>v${version} · ${getComponentPath('magneticButton')}</p><button class="animation-button">Animate</button></main>`,
})
class AppComponent {}

bootstrapApplication(AppComponent);
