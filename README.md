# Vue 3 + TypeScript + Vite UI Kit

Базовый UI-kit на Vue 3 с Vite. Пока содержит один компонент — `UiButton`.

## Разработка

```bash
npm install
npm run dev
```

Playground откроется на локальном сервере Vite.

## Storybook

```bash
npm run storybook
```

Откроется на http://localhost:6006. Статическая сборка:

```bash
npm run build-storybook
```

## Сборка библиотеки

```bash
npm run build
```

Артефакты появятся в `dist/`.

## Использование

```vue
<script setup lang="ts">
import { UiButton } from 'ui-kit-example'
import 'ui-kit-example/style.css'
</script>

<template>
  <UiButton variant="primary" size="md">Нажми</UiButton>
</template>
```

### Props `UiButton`

| Prop | Тип | По умолчанию |
|------|-----|--------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `disabled` | `boolean` | `false` |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |
