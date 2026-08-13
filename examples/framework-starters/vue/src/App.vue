<script setup>
import { version, getComponentPath } from '@tejas-mk2/animation';
</script>
<template>
  <main><h1>ANIMATION + Vue</h1><p>v{{ version }} · {{ getComponentPath('magneticButton') }}</p><button class="animation-button">Animate</button></main>
</template>
