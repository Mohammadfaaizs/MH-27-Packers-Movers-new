const fs = require('fs');
const path = require('path');

// Create a simple HTML file to generate the logo
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; padding: 20px; background: #f0f0f0; }
        .logo-container { display: inline-block; }
    </style>
</head>
<body>
    <div class="logo-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="200" height="60">
            <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Background matching navbar -->
            <rect x="0" y="0" width="200" height="60" rx="12" fill="url(#navGradient)" />
            
            <!-- Truck icon -->
            <g transform="translate(15, 15)">
                <path d="M5 15 L5 20 L7 20 L7 18 L9 18 L9 20 L11 20 L11 15 Z" fill="white" />
                <rect x="2" y="8" width="12" height="7" rx="1" fill="white" />
                <circle cx="4" cy="20" r="1.5" fill="#0f172a" />
                <circle cx="12" cy="20" r="1.5" fill="#0f172a" />
            </g>
            
            <!-- Text -->
            <text x="40" y="38" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">MH27 Packers</text>
            <text x="40" y="50" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">& Movers</text>
        </svg>
    </div>
    
    <script>
        // Instructions for manual export
        console.log('Right-click the logo above and save as PNG or SVG');
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'logo-generator.html'), htmlContent);
console.log('Logo generator HTML file created. Open it in a browser to export the logo.');
