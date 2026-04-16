const { spawnSync } = require('node:child_process');
const path = require('node:path');

const eslintPackageJson = require.resolve('eslint/package.json');
const eslintBin = path.join(path.dirname(eslintPackageJson), 'bin', 'eslint.js');
const result = spawnSync(process.execPath, [eslintBin, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: {
    ...process.env,
    ESLINT_USE_FLAT_CONFIG: 'false',
  },
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
