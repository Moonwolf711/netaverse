import { build } from 'esbuild';
import { copyFile, access } from 'fs/promises';

try {
  await build({
    entryPoints: ['assets/src/main.js'],
    bundle: true,
    outfile: 'assets/dist/theme.js',
    format: 'esm',
   minify: true
  });

  // Check if the output file exists before copying
  try {
    await access('assets/dist/theme.js');
    await copyFile('assets/dist/theme.js', 'assets/theme.js');
  } catch {
    console.error('Error: Output file "assets/dist/theme.js" does not exist or cannot be accessed.');
  }
} catch (err) {
  console.error('Build failed:', err);
}
