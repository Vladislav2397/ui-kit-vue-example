import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/vue3-vite',
  async viteFinal(config) {
    if (config.build) {
      delete config.build.lib
      config.build.copyPublicDir = true
      delete config.build.rollupOptions
    }

    config.plugins = (config.plugins ?? []).flatMap((plugin) => {
      if (Array.isArray(plugin)) {
        return plugin.filter(
          (item) =>
            !item ||
            typeof item !== 'object' ||
            !('name' in item) ||
            item.name !== 'vite:dts',
        )
      }

      if (
        plugin &&
        typeof plugin === 'object' &&
        'name' in plugin &&
        plugin.name === 'vite:dts'
      ) {
        return []
      }

      return [plugin]
    })

    return config
  },
}

export default config
