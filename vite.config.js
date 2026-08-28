import basicSsl from '@vitejs/plugin-basic-ssl'
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = resolve(import.meta.dirname)

function copyArAssets() {
  return {
    name: 'copy-ar-assets',
    closeBundle() {
      const assets = [
        ['bundle.js', 'bundle.js'],
        [
          'aframe-image-targets-example-main/external',
          'aframe-image-targets-example-main/external',
        ],
        ['image-targets', 'image-targets'],
      ]

      for (const [source, destination] of assets) {
        const sourcePath = resolve(projectRoot, source)
        if (existsSync(sourcePath)) {
          cpSync(sourcePath, resolve(projectRoot, 'dist', destination), {
            recursive: true,
          })
        }
      }
    },
  }
}

export default {
  base: '/ARfoodmenu/',
  plugins: [
    basicSsl(),
    copyArAssets(),
  ],
  server: {
    host: '0.0.0.0'
  }
}