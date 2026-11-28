import { defineConfig } from 'vite'
import { reactRouter} from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  // imagetools : génère à la compilation des versions réduites des images (ex. « photo.webp?w=640;1280&format=webp&as=srcset »)
  plugins: [reactRouter(), tailwindcss(), imagetools()],
  base:"/"
})
