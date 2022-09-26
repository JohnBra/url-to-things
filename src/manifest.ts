import pkg from '../package.json'
import { ManifestType } from '@src/manifest-type'

const manifest: ManifestType = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  permissions: [
    "background",
    "activeTab",
    "scripting"
  ],
  background: {
    service_worker: 'src/pages/background/index.js',
  },
  action: {
    default_icon: 'icon-34.png',
    default_title: 'Send URL to Things3'
  },
  icons: {
    "128": 'icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/content/index.js'],
      css: ['contentStyle.css'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['contentStyle.css', 'icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
}

export default manifest
