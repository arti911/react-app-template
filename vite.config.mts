import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigpPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    base: '',
    build: { outDir: 'build' },
    plugins: [react(), viteTsconfigpPaths()],
  };
});
