import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // {
      //   find: /^~(.+)/,
      //   replacement: path.join(process.cwd(), 'node_modules/$1'),
      // },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), "src/$1"),
      },
    ],
  },
  server: {
    port: 3006,
    open: true,
  },
  preview: {
    port: 3006,
  },
});
