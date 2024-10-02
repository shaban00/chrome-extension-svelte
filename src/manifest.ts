import { defineManifest } from '@crxjs/vite-plugin'
import package_data from '../package.json'

//@ts-ignore
const isDev = process.env.NODE_ENV == 'development'

export default defineManifest({
  name: `${package_data.displayName || package_data.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: package_data.description,
  version: package_data.version,
  manifest_version: 3,
  icons: {
    16: 'icons/icon16.png',
    32: 'icons/icon32.png',
    48: 'icons/icon48.png',
    128: 'icons/icon128.png',
  },
  action: {
    default_popup: 'src/popup/popup.html',
    default_icon: 'icons/icon48.png',
  },
  options_page: 'src/options/options.html',
  devtools_page: 'src/devtools/devtools.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content_script/index.ts'],
    },
  ],
  side_panel: {
    default_path: 'src/sidepanel/sidepanel.html',
  },
  web_accessible_resources: [
    {
      resources: ['icons/icon16.png', 'icons/icon32.png', 'icons/icon48.png', 'icons/icon128.png'],
      matches: [],
    },
  ],
  permissions: ['sidePanel', 'storage', 'activeTab'],
  chrome_url_overrides: {
    newtab: 'src/newtab/newtab.html',
  },
})
