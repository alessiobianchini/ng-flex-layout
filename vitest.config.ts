import path from 'path';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths({
            projects: [
                path.resolve(__dirname, 'tsconfig.vitest.json'),
            ]
        })
    ],
    test: {
        globals: true,
        watch: false,
        environment: 'jsdom',
        setupFiles: './projects/libs/flex-layout/test.ts',
        include: [
            'projects/libs/flex-layout/core/breakpoints/**/*.spec.ts',
            'projects/libs/flex-layout/core/match-media/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/media-marshaller/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/**/*.spec.ts',
        ],
        coverage: {
            reporter: ['text', 'html'],
        },
    }
});
