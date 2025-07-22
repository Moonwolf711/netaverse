import { build } from 'esbuild';
import { copyFile } from 'fs/promises';

await build({
  entryPoints: ['assets/src/main.js'],
  bundle: true,
  outfile: 'assets/dist/theme.js',
  format: 'esm',
  minify: true
});

await copyFile('assets/dist/theme.js', 'assets/theme.js');
