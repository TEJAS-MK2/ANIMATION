export const version = '1.3.0';

export const components = {
  magneticButton: 'components/magnetic-button.html',
  tiltCard: 'components/tilt-card.html',
  textReveal: 'components/text-reveal.html',
  spotlightCard: 'components/spotlight-card.html',
  auroraBackground: 'components/aurora-background.html',
  scrambleText: 'components/scramble-text.html',
  glowButton: 'components/glow-button.html',
  animatedUnderline: 'components/animated-underline.html',
  depthCard: 'components/depth-card.html',
  flipCard: 'components/flip-card.html',
  typewriter: 'components/typewriter.html',
  gradientText: 'components/gradient-text.html',
  letterWave: 'components/letter-wave.html',
  gridPulse: 'components/grid-pulse.html',
  particleField: 'components/particle-field.html',
  meshGradient: 'components/mesh-gradient.html',
  rippleButton: 'components/ripple-button.html',
  borderBeam: 'components/border-beam.html',
  elasticCard: 'components/elastic-card.html',
  countUp: 'components/count-up.html',
  modal: 'components/modal.html',
  toast: 'components/toast.html',
  dropdown: 'components/dropdown.html',
  tooltip: 'components/tooltip.html',
  tabs: 'components/tabs.html',
  accordion: 'components/accordion.html',
  loading: 'components/loading.html',
  scrollReveal: 'components/scroll-reveal.html',
  cursorHighlight: 'components/cursor-highlight.html',
  commandPalette: 'components/command-palette.html',
  progressBar: 'components/progress-bar.html',
  skeleton: 'components/skeleton.html',
  segmentedControl: 'components/segmented-control.html',
  popover: 'components/popover.html',
  pagination: 'components/pagination.html',
  breadcrumbs: 'components/breadcrumbs.html',
  drawer: 'components/drawer.html',
  animatedDock: 'components/dock.html',
  githubActivity: 'components/github-activity.html'
};

export function getComponentPath(name) {
  if (!Object.hasOwn(components, name)) throw new RangeError(`Unknown ANIMATION component: ${name}`);
  return components[name];
}
