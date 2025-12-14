#!/bin/bash

# Script to convert TTF/OTF font files to WOFF and WOFF2
# Requires: fonttools (pip install fonttools[woff]) and woff2 tools

FONTS_DIR="public/fonts"
SOURCE_DIR="${1:-./fonts-source}"

echo "Font Conversion Script"
echo "======================"
echo ""

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Source directory not found: $SOURCE_DIR"
    echo ""
    echo "Usage:"
    echo "  ./convert-fonts.sh [source-directory]"
    echo ""
    echo "Place your TTF or OTF font files in the source directory, then run this script."
    echo ""
    echo "Required tools:"
    echo "  - fonttools: pip install fonttools[woff]"
    echo "  - woff2: Install woff2 tools (https://github.com/google/woff2)"
    exit 1
fi

# Ensure fonts directory exists
mkdir -p "$FONTS_DIR"

# Check for required tools
if ! command -v pyftsubset &> /dev/null; then
    echo "Error: fonttools not found. Install with: pip install fonttools[woff]"
    exit 1
fi

if ! command -v woff2_compress &> /dev/null; then
    echo "Warning: woff2_compress not found. WOFF2 files will not be created."
    echo "Install woff2 tools from: https://github.com/google/woff2"
    WOFF2_AVAILABLE=false
else
    WOFF2_AVAILABLE=true
fi

# Convert fonts
for font_file in "$SOURCE_DIR"/*.{ttf,otf,TTF,OTF} 2>/dev/null; do
    if [ -f "$font_file" ]; then
        filename=$(basename "$font_file")
        name="${filename%.*}"
        
        echo "Processing: $filename"
        
        # Convert to WOFF
        echo "  Converting to WOFF..."
        pyftsubset "$font_file" --flavor=woff --output-file="$FONTS_DIR/${name}.woff" 2>/dev/null || {
            echo "  Error converting to WOFF"
        }
        
        # Convert to WOFF2
        if [ "$WOFF2_AVAILABLE" = true ]; then
            echo "  Converting to WOFF2..."
            woff2_compress "$font_file" 2>/dev/null && {
                mv "${font_file}.woff2" "$FONTS_DIR/${name}.woff2" 2>/dev/null || true
            } || {
                echo "  Error converting to WOFF2"
            }
        fi
        
        echo "  ✓ Done"
        echo ""
    fi
done

echo "Conversion complete!"
echo "Font files are in: $FONTS_DIR"

