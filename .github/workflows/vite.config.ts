import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/', // base must be '/'
});
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
