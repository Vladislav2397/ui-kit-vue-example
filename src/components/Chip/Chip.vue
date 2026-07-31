<script setup lang="ts">
import { computed } from 'vue'
import type { ChipProps } from './types'

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  removable: false,
})

const emit = defineEmits<{
  remove: [event: MouseEvent]
}>()

defineOptions({
  name: 'UiChip',
})

const classes = computed(() => [
  'ui-chip',
  `ui-chip--${props.variant}`,
  `ui-chip--${props.size}`,
  {
    'ui-chip--disabled': props.disabled,
    'ui-chip--removable': props.removable,
  },
])

function onRemove(event: MouseEvent) {
  if (props.disabled) return
  emit('remove', event)
}
</script>

<template>
  <span :class="classes" :aria-disabled="disabled || undefined">
    <span class="ui-chip__label">
      <slot />
    </span>

    <button
      v-if="removable"
      type="button"
      class="ui-chip__remove"
      :disabled="disabled"
      aria-label="Remove"
      @click="onRemove"
    >
      <svg
        class="ui-chip__remove-icon"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4.22 4.22a.75.75 0 0 1 1.06 0L8 6.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L9.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L8 9.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L6.94 8 4.22 5.28a.75.75 0 0 1 0-1.06Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </span>
</template>

<style scoped>
.ui-chip {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  border: 1px solid transparent;
  border-radius: 999px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.25;
  vertical-align: middle;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease,
    opacity 0.15s ease;
}

.ui-chip--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.ui-chip__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-chip--sm {
  gap: 0.125rem;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
}

.ui-chip--md {
  gap: 0.25rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.8125rem;
}

.ui-chip--lg {
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.ui-chip--sm.ui-chip--removable {
  padding-right: 0.25rem;
}

.ui-chip--md.ui-chip--removable {
  padding-right: 0.25rem;
}

.ui-chip--lg.ui-chip--removable {
  padding-right: 0.375rem;
}

.ui-chip--primary {
  background-color: #2563eb;
  border-color: #2563eb;
  color: #fff;
}

.ui-chip--secondary {
  background-color: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f172a;
}

.ui-chip--outline {
  background-color: transparent;
  border-color: #cbd5e1;
  color: #0f172a;
}

.ui-chip__remove {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  opacity: 0.75;
  transition:
    background-color 0.15s ease,
    opacity 0.15s ease;
}

.ui-chip__remove:hover:not(:disabled) {
  background-color: rgb(15 23 42 / 12%);
  opacity: 1;
}

.ui-chip--primary .ui-chip__remove:hover:not(:disabled) {
  background-color: rgb(255 255 255 / 18%);
}

.ui-chip__remove:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 1px;
}

.ui-chip__remove:disabled {
  cursor: not-allowed;
}

.ui-chip--sm .ui-chip__remove {
  width: 1rem;
  height: 1rem;
}

.ui-chip--md .ui-chip__remove,
.ui-chip--lg .ui-chip__remove {
  width: 1.125rem;
  height: 1.125rem;
}

.ui-chip__remove-icon {
  width: 100%;
  height: 100%;
}
</style>
