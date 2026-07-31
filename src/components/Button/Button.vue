<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
})

defineOptions({
  name: 'UiButton',
})

const classes = computed(() => [
  'ui-button',
  `ui-button--${props.variant}`,
  `ui-button--${props.size}`,
])
</script>

<template>
  <button :type="type" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.25;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease,
    opacity 0.15s ease;
}

.ui-button:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.ui-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-button--sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
}

.ui-button--md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.ui-button--lg {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
}

.ui-button--primary {
  background-color: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.ui-button--primary:hover:not(:disabled) {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

.ui-button--secondary {
  background-color: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f172a;
}

.ui-button--secondary:hover:not(:disabled) {
  background-color: #e2e8f0;
  border-color: #94a3b8;
}

.ui-button--ghost {
  background-color: transparent;
  border-color: transparent;
  color: #2563eb;
}

.ui-button--ghost:hover:not(:disabled) {
  background-color: #eff6ff;
}
</style>
