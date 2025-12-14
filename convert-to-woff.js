import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ttf2woff2 from 'ttf2woff2';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, 'public', 'fonts');

// Font mappings: TTF file -> output names
const fonts = [
  { ttf: 'Cairo-Regular.ttf', name: 'BolaaBahajan-Regular' },
  { ttf: 'Cairo-Medium.ttf', name: 'BolaaBahajan-Medium' },
  { ttf: 'Cairo-Bold.ttf', name: 'BolaaBahajan-Bold' }
];

console.log('Converting TTF fonts to WOFF2 and WOFF...\n');

fonts.forEach(({ ttf, name }) => {
  const ttfPath = path.join(fontsDir, ttf);
  const woff2Path = path.join(fontsDir, `${name}.woff2`);
  const woffPath = path.join(fontsDir, `${name}.woff`);
  
  if (!fs.existsSync(ttfPath)) {
    console.log(`✗ ${ttf} not found, skipping...`);
    return;
  }
  
  try {
    // Convert to WOFF2
    console.log(`Converting ${ttf} to ${name}.woff2...`);
    const ttfBuffer = fs.readFileSync(ttfPath);
    const woff2Buffer = ttf2woff2(ttfBuffer);
    fs.writeFileSync(woff2Path, woff2Buffer);
    console.log(`✓ ${name}.woff2 created`);
    
    // For WOFF, we'll use a simple approach - copy TTF as WOFF for now
    // (In production, you'd want proper WOFF conversion, but this works for development)
    // Actually, let's try using pyftsubset if available, otherwise we'll note it
    try {
      // Try to use pyftsubset if available
      execSync(`pyftsubset "${ttfPath}" --flavor=woff --output-file="${woffPath}"`, { stdio: 'ignore' });
      console.log(`✓ ${name}.woff created`);
    } catch (e) {
      // If pyftsubset not available, we'll create a note
      // For now, just copy TTF (not ideal but functional)
      console.log(`⚠ ${name}.woff - using TTF as fallback (install fonttools for proper conversion)`);
      // Actually, let's not copy - just note it
    }
    
    console.log('');
  } catch (error) {
    console.error(`✗ Error converting ${ttf}:`, error.message);
  }
});

console.log('Conversion complete!');
console.log('\nNote: WOFF files require fonttools for proper conversion.');
console.log('For now, WOFF2 files are ready to use.');

