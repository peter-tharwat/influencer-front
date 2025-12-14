import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ttf2woff2 from 'ttf2woff2';
import ttf2woff from 'ttf2woff';

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
    
    // Convert to WOFF
    console.log(`Converting ${ttf} to ${name}.woff...`);
    const woffBuffer = ttf2woff(ttfBuffer);
    fs.writeFileSync(woffPath, woffBuffer);
    console.log(`✓ ${name}.woff created`);
    
    console.log('');
  } catch (error) {
    console.error(`✗ Error converting ${ttf}:`, error.message);
  }
});

console.log('Conversion complete!');
console.log('\nAll font files (WOFF2 and WOFF) are ready to use.');

