import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        react(),
    ],
    server: {
        // ... other server settings
        cors: {
            origin: ['http://127.0.0.1:8000','https://78fb-66-96-225-114.ngrok-free.app'], // Allow traffic from your main server
            // If your server needs more complex cors settings, you can set it here.
        },
    },
});
