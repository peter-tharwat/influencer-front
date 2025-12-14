# Bolaa Bahajan Font Setup

To use the Bolaa Bahajan font, you need to add the font files to the `public/fonts/` directory.

## Required Font Files

Place the following files in `public/fonts/`:

- `BolaaBahajan-Regular.woff2`
- `BolaaBahajan-Regular.woff`
- `BolaaBahajan-Medium.woff2`
- `BolaaBahajan-Medium.woff`
- `BolaaBahajan-Bold.woff2`
- `BolaaBahajan-Bold.woff`

## Download Methods

### Method 1: Using the Download Script

If you have a URL where the font files are hosted:

```bash
node download-font.js https://your-font-url.com/fonts
```

### Method 2: Converting TTF/OTF Files

If you have the font files in TTF or OTF format:

1. Place your TTF/OTF files in a `fonts-source` directory (or specify a custom path)
2. Install required tools:
   ```bash
   pip install fonttools[woff]
   # Install woff2 tools from: https://github.com/google/woff2
   ```
3. Run the conversion script:
   ```bash
   ./convert-fonts.sh [source-directory]
   ```

### Method 3: Manual Installation

Simply copy the WOFF and WOFF2 files directly to `public/fonts/` directory.

## Alternative: Using Google Fonts or CDN

If you have the font hosted elsewhere, you can update `app/globals.css` to use a different source:

```css
@import url('https://your-font-cdn.com/bolaa-bahajan.css');
```

Or if using Google Fonts or similar service, update the font-family in `components/ThemeProvider.tsx`.

## Font Weights

The font supports:
- 400 (Regular)
- 500 (Medium)
- 700 (Bold)

These are configured in `app/globals.css` and used throughout the application.

## Getting the Font Files

The Bolaa Bahajan font may be available from:
- Font foundries or official distributors
- Design asset marketplaces
- Your design team or brand guidelines

If you have the font files or a download URL, use the scripts provided above to set them up.

