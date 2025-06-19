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
            'projects/libs/flex-layout/core/**/*.spec.ts',
            'projects/libs/flex-layout/_private-utils/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/breakpoints/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/match-media/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/media-observer/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/media-trigger/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/style-utils/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/media-marshaller/**/*.spec.ts',
            // 'projects/libs/flex-layout/core/basis-validator/basis-validator.spec.ts',
            // 'projects/libs/flex-layout/core/media-marshaller/**/*.spec.ts',
        ],
        coverage: {
            reporter: ['text', 'html'],
        },
    }
});
