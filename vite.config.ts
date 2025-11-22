import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['components'],
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      name: 'EventyrDesign',
      fileName: (format) => `eventyr-design.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact'
        },
      },
    },
  },
});
