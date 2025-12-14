const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'public', 'fonts');

// Ensure fonts directory exists
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Font files needed
const fontFiles = [
  'BolaaBahajan-Regular.woff2',
  'BolaaBahajan-Regular.woff',
  'BolaaBahajan-Medium.woff2',
  'BolaaBahajan-Medium.woff',
  'BolaaBahajan-Bold.woff2',
  'BolaaBahajan-Bold.woff'
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function downloadFonts(baseUrl) {
  console.log('Downloading Bolaa Bahajan font files...\n');
  
  for (const fontFile of fontFiles) {
    const url = `${baseUrl}/${fontFile}`;
    const dest = path.join(fontsDir, fontFile);
    
    try {
      console.log(`Downloading ${fontFile}...`);
      await downloadFile(url, dest);
      console.log(`✓ ${fontFile} downloaded successfully\n`);
    } catch (error) {
      console.error(`✗ Failed to download ${fontFile}: ${error.message}\n`);
    }
  }
  
  console.log('Download complete!');
}

// Get base URL from command line argument or use default
const baseUrl = process.argv[2];

if (!baseUrl) {
  console.log('Usage: node download-font.js <base-url>');
  console.log('\nExample:');
  console.log('  node download-font.js https://example.com/fonts');
  console.log('\nOr provide individual URLs for each font file.');
  console.log('\nIf you have the font files locally, you can manually copy them to:');
  console.log(`  ${fontsDir}`);
  process.exit(1);
}

downloadFonts(baseUrl).catch(console.error);

