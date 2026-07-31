<script setup lang="ts">
import { UiButton } from './components/Button'
import { UiChip } from './components/Chip'
</script>

<template>
  <main class="demo">
    <h1>UI Kit</h1>
    <p>Базовый playground для компонентов</p>

    <section class="demo__section">
      <h2>Button</h2>

      <div class="demo__row">
        <UiButton>Primary</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
      </div>

      <div class="demo__row">
        <UiButton size="sm">Small</UiButton>
        <UiButton size="md">Medium</UiButton>
        <UiButton size="lg">Large</UiButton>
      </div>

      <div class="demo__row">
        <UiButton disabled>Disabled</UiButton>
        <UiButton variant="secondary" disabled>Disabled</UiButton>
      </div>
    </section>

    <section class="demo__section">
      <h2>Chip</h2>

      <div class="demo__row">
        <UiChip>Primary</UiChip>
        <UiChip variant="secondary">Secondary</UiChip>
        <UiChip variant="outline">Outline</UiChip>
      </div>

      <div class="demo__row">
        <UiChip size="sm">Small</UiChip>
        <UiChip size="md">Medium</UiChip>
        <UiChip size="lg">Large</UiChip>
      </div>

      <div class="demo__row">
        <UiChip removable>Removable</UiChip>
        <UiChip variant="secondary" removable>Tag</UiChip>
        <UiChip disabled removable>Disabled</UiChip>
      </div>
    </section>
  </main>
</template>

<style>
:root {
  color: #0f172a;
  background: #f8fafc;
  font-family:
    'Segoe UI',
    system-ui,
    -apple-system,
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.demo {
  max-width: 48rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.demo h1 {
  margin: 0 0 0.5rem;
  font-size: 2rem;
}

.demo > p {
  margin: 0 0 2.5rem;
  color: #64748b;
}

.demo__section {
  margin-bottom: 2.5rem;
}

.demo__section h2 {
  margin: 0 0 1rem;
  font-size: 1.125rem;
}

.demo__row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
</style>
