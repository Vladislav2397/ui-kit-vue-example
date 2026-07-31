# Vue 3 + TypeScript + Vite UI Kit

Базовый UI-kit на Vue 3 с Vite. Компоненты: `UiButton`, `UiChip`.

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
import { UiButton, UiChip } from 'ui-kit-example'
import 'ui-kit-example/style.css'
</script>

<template>
  <UiButton variant="primary" size="md">Нажми</UiButton>
  <UiChip variant="secondary" removable @remove="() => {}">Тег</UiChip>
</template>
```

### Props `UiButton`

| Prop | Тип | По умолчанию |
|------|-----|--------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `disabled` | `boolean` | `false` |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |

### Props `UiChip`

| Prop | Тип | По умолчанию |
|------|-----|--------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `disabled` | `boolean` | `false` |
| `removable` | `boolean` | `false` |

Событие `remove` — клик по кнопке удаления (если `removable`).
