import path from 'path';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { angularJitForVitestPlugin } from './vitest.angular-jit';

export default defineConfig({
    plugins: [
        angularJitForVitestPlugin(),
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
        setupFiles: './vitest.setup.ts',
        include: [
            // 'projects/libs/flex-layout/core/**/*.spec.ts',
            // 'projects/libs/flex-layout/_private-utils/**/*.spec.ts',
            'projects/**/*.spec.ts',
        ],
        exclude: [
            'dist/**',
            'out-tsc/**',
        ],
        coverage: {
            reporter: ['text', 'html'],
        },
    }
});
