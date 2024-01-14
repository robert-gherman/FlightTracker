import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            shadcn: '/src/shadcn',
            pages: '/src/pages',
            components: '/src/components'
        }
    }
});
