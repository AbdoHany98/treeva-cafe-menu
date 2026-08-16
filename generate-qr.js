const QRCode = require('qrcode');
const fs = require('fs');

async function main() {
  // Target URL (Change this to your actual deployed URL e.g., https://treevacafe.netlify.app)
  const menuUrl = process.argv[2] || 'https://treevacafe.netlify.app';

  console.log(`Generating QR code for URL: ${menuUrl}`);

  // High Resolution PNG output (1000px x 1000px suitable for crisp printing)
  await QRCode.toFile('treeva_cafe_qr.png', menuUrl, {
    errorCorrectionLevel: 'H',
    width: 1000,
    margin: 2,
    color: {
      dark: '#1c1a17',
      light: '#ffffff'
    }
  });

  // Also SVG vector output for printing designers / illustrator
  await QRCode.toFile('treeva_cafe_qr.svg', menuUrl, {
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#1c1a17',
      light: '#ffffff'
    }
  });

  console.log('✅ Success! Generated files:');
  console.log(' - treeva_cafe_qr.png (1000x1000 PNG)');
  console.log(' - treeva_cafe_qr.svg (Vector SVG)');
}

main().catch(err => {
  console.error('Error generating QR code:', err);
});
