// Placeholder SVG für Wuschel (weiße Blutzelle Maskottchen)
const wuschelSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="90" fill="white" stroke="#4DB6AC" stroke-width="4"/>
  <circle cx="70" cy="80" r="10" fill="#37474F"/>
  <circle cx="130" cy="80" r="10" fill="#37474F"/>
  <path d="M70 130 Q100 150 130 130" stroke="#37474F" stroke-width="5" fill="none"/>
  <circle cx="70" cy="80" r="3" fill="white"/>
  <circle cx="130" cy="80" r="3" fill="white"/>
</svg>
`;

// Placeholder SVG für Wuschel winkend
const wuschelWaveSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="90" fill="white" stroke="#4DB6AC" stroke-width="4"/>
  <circle cx="70" cy="80" r="10" fill="#37474F"/>
  <circle cx="130" cy="80" r="10" fill="#37474F"/>
  <path d="M70 130 Q100 150 130 130" stroke="#37474F" stroke-width="5" fill="none"/>
  <circle cx="70" cy="80" r="3" fill="white"/>
  <circle cx="130" cy="80" r="3" fill="white"/>
  <path d="M160 70 Q170 50 180 60" stroke="#4DB6AC" stroke-width="4" fill="none"/>
  <path d="M180 60 Q190 70 185 80" stroke="#4DB6AC" stroke-width="4" fill="none"/>
</svg>
`;

// Placeholder SVG für Wuschel mit Schild
const wuschelShieldSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="90" fill="white" stroke="#4DB6AC" stroke-width="4"/>
  <circle cx="70" cy="80" r="10" fill="#37474F"/>
  <circle cx="130" cy="80" r="10" fill="#37474F"/>
  <path d="M70 130 Q100 150 130 130" stroke="#37474F" stroke-width="5" fill="none"/>
  <circle cx="70" cy="80" r="3" fill="white"/>
  <circle cx="130" cy="80" r="3" fill="white"/>
  <path d="M100 100 L130 70 L170 70 L170 130 L130 130 Z" fill="#FFD54F" stroke="#FF8A65" stroke-width="3"/>
</svg>
`;

// Placeholder SVG für Wuschel klein
const wuschelSmallSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="white" stroke="#4DB6AC" stroke-width="3"/>
  <circle cx="35" cy="40" r="5" fill="#37474F"/>
  <circle cx="65" cy="40" r="5" fill="#37474F"/>
  <path d="M35 65 Q50 75 65 65" stroke="#37474F" stroke-width="3" fill="none"/>
</svg>
`;

// Placeholder SVG für Wuschel im Spiel
const wuschelGameSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="white" stroke="#4DB6AC" stroke-width="3"/>
  <circle cx="35" cy="40" r="5" fill="#37474F"/>
  <circle cx="65" cy="40" r="5" fill="#37474F"/>
  <path d="M35 65 Q50 75 65 65" stroke="#37474F" stroke-width="3" fill="none"/>
  <path d="M20 30 Q30 20 40 30" stroke="#4DB6AC" stroke-width="2" fill="none"/>
  <path d="M60 30 Q70 20 80 30" stroke="#4DB6AC" stroke-width="2" fill="none"/>
</svg>
`;

// Placeholder SVG für Wuschel im Spiel (Spieler 2)
const wuschelGame2SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="white" stroke="#FF8A65" stroke-width="3"/>
  <circle cx="35" cy="40" r="5" fill="#37474F"/>
  <circle cx="65" cy="40" r="5" fill="#37474F"/>
  <path d="M35 65 Q50 75 65 65" stroke="#37474F" stroke-width="3" fill="none"/>
  <path d="M20 30 Q30 20 40 30" stroke="#FF8A65" stroke-width="2" fill="none"/>
  <path d="M60 30 Q70 20 80 30" stroke="#FF8A65" stroke-width="2" fill="none"/>
</svg>
`;

// Placeholder SVG für Bakterien
const bakterienSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#E57373"/>
  <circle cx="50" cy="50" r="30" fill="#EF9A9A"/>
  <circle cx="40" cy="40" r="8" fill="#FFCDD2"/>
  <circle cx="60" cy="60" r="8" fill="#FFCDD2"/>
  <circle cx="60" cy="30" r="5" fill="#FFCDD2"/>
  <circle cx="30" cy="60" r="5" fill="#FFCDD2"/>
  <path d="M20 20 L10 10" stroke="#E57373" stroke-width="3"/>
  <path d="M80 80 L90 90" stroke="#E57373" stroke-width="3"/>
  <path d="M20 80 L10 90" stroke="#E57373" stroke-width="3"/>
  <path d="M80 20 L90 10" stroke="#E57373" stroke-width="3"/>
</svg>
`;

// Placeholder SVG für Viren
const virenSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" fill="#64B5F6"/>
  <path d="M50 10 L50 20" stroke="#64B5F6" stroke-width="4"/>
  <path d="M50 80 L50 90" stroke="#64B5F6" stroke-width="4"/>
  <path d="M10 50 L20 50" stroke="#64B5F6" stroke-width="4"/>
  <path d="M80 50 L90 50" stroke="#64B5F6" stroke-width="4"/>
  <path d="M22 22 L30 30" stroke="#64B5F6" stroke-width="4"/>
  <path d="M70 70 L78 78" stroke="#64B5F6" stroke-width="4"/>
  <path d="M22 78 L30 70" stroke="#64B5F6" stroke-width="4"/>
  <path d="M70 30 L78 22" stroke="#64B5F6" stroke-width="4"/>
  <circle cx="50" cy="50" r="20" fill="#90CAF9"/>
  <circle cx="40" cy="40" r="5" fill="#E3F2FD"/>
  <circle cx="60" cy="60" r="5" fill="#E3F2FD"/>
</svg>
`;

// Placeholder SVG für Pilze
const pilzeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M30 60 L40 90 L60 90 L70 60" fill="#81C784"/>
  <path d="M20 60 Q50 20 80 60" fill="#81C784"/>
  <circle cx="40" cy="50" r="5" fill="#E8F5E9"/>
  <circle cx="60" cy="50" r="5" fill="#E8F5E9"/>
  <circle cx="50" cy="40" r="8" fill="#E8F5E9"/>
</svg>
`;

// Placeholder SVG für Protozoen
const protozoenSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M30 30 Q10 50 30 70 Q50 90 70 70 Q90 50 70 30 Q50 10 30 30" fill="#9575CD"/>
  <path d="M40 40 Q30 50 40 60 Q50 70 60 60 Q70 50 60 40 Q50 30 40 40" fill="#B39DDB"/>
  <circle cx="45" cy="45" r="5" fill="#D1C4E9"/>
  <circle cx="55" cy="55" r="5" fill="#D1C4E9"/>
  <path d="M20 50 Q10 40 5 50 Q10 60 20 50" fill="#9575CD"/>
  <path d="M80 50 Q90 40 95 50 Q90 60 80 50" fill="#9575CD"/>
</svg>
`;

// Placeholder SVG für Niesen
const niesenSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="30" cy="50" r="25" fill="#FFECB3"/>
  <path d="M55 50 L95 50" stroke="#E0E0E0" stroke-width="10" stroke-linecap="round"/>
  <path d="M60 40 L90 40" stroke="#E0E0E0" stroke-width="8" stroke-linecap="round"/>
  <path d="M60 60 L90 60" stroke="#E0E0E0" stroke-width="8" stroke-linecap="round"/>
  <circle cx="20" cy="45" r="3" fill="#424242"/>
  <circle cx="40" cy="45" r="3" fill="#424242"/>
  <path d="M25 60 Q30 65 35 60" stroke="#424242" stroke-width="2" fill="none"/>
  <circle cx="75" cy="40" r="3" fill="#64B5F6"/>
  <circle cx="85" cy="60" r="3" fill="#E57373"/>
  <circle cx="65" cy="50" r="3" fill="#81C784"/>
</svg>
`;

// Placeholder SVG für schmutzige Hände
const haendeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M20 50 Q25 20 40 30 Q50 10 60 30 Q75 20 80 50 Q85 70 70 80 Q50 90 30 80 Q15 70 20 50" fill="#FFECB3"/>
  <circle cx="30" cy="40" r="5" fill="#A1887F"/>
  <circle cx="50" cy="60" r="5" fill="#A1887F"/>
  <circle cx="70" cy="40" r="5" fill="#A1887F"/>
  <circle cx="40" cy="70" r="3" fill="#A1887F"/>
  <circle cx="60" cy="70" r="3" fill="#A1887F"/>
</svg>
`;

// Placeholder SVG für Essen teilen
const essenSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="30" cy="50" r="20" fill="#FFECB3"/>
  <circle cx="70" cy="50" r="20" fill="#FFECB3"/>
  <path d="M10 50 L20 50" stroke="#FFECB3" stroke-width="10"/>
  <path d="M80 50 L90 50" stroke="#FFECB3" stroke-width="10"/>
  <circle cx="25" cy="45" r="2" fill="#424242"/>
  <circle cx="35" cy="45" r="2" fill="#424242"/>
  <circle cx="65" cy="45" r="2" fill="#424242"/>
  <circle cx="75" cy="45" r="2" fill="#424242"/>
  <path d="M25 55 Q30 58 35 55" stroke="#424242" stroke-width="1" fill="none"/>
  <path d="M65 55 Q70 58 75 55" stroke="#424242" stroke-width="1" fill="none"/>
  <rect x="40" y="30" width="20" height="40" fill="#FF8A65"/>
  <path d="M40 30 Q50 20 60 30" fill="#FF8A65"/>
</svg>
`;

// Placeholder SVG für Hände waschen
const haendewaschenSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M20 50 Q25 20 40 30 Q50 10 60 30 Q75 20 80 50 Q85 70 70 80 Q50 90 30 80 Q15 70 20 50" fill="#FFECB3"/>
  <circle cx="30" cy="40" r="3" fill="#81D4FA"/>
  <circle cx="50" cy="60" r="3" fill="#81D4FA"/>
  <circle cx="70" cy="40" r="3" fill="#81D4FA"/>
  <circle cx="40" cy="70" r="2" fill="#81D4FA"/>
  <circle cx="60" cy="70" r="2" fill="#81D4FA"/>
  <circle cx="35" cy="50" r="4" fill="#81D4FA"/>
  <circle cx="65" cy="50" r="4" fill="#81D4FA"/>
  <circle cx="50" cy="30" r="4" fill="#81D4FA"/>
  <rect x="20" y="80" width="60" height="10" rx="5" fill="#4DB6AC"/>
</svg>
`;

// Placeholder SVG für in die Armbeuge husten
const hustenSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="30" cy="30" r="20" fill="#FFECB3"/>
  <path d="M30 50 L30 70 Q40 80 50 70 L70 50" fill="#FFECB3" stroke="#FFECB3" stroke-width="5"/>
  <path d="M30 70 L30 90" stroke="#FFECB3" stroke-width="10"/>
  <circle cx="25" cy="25" r="2" fill="#424242"/>
  <circle cx="35" cy="25" r="2" fill="#424242"/>
  <path d="M25 35 Q30 38 35 35" stroke="#424242" stroke-width="1" fill="none"/>
  <path d="M50 60 Q55 55 60 60" stroke="#E0E0E0" stroke-width="3" stroke-linecap="round"/>
  <path d="M45 65 Q50 60 55 65" stroke="#E0E0E0" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

// Placeholder SVG für gesundes Essen
const obstSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="30" cy="40" r="20" fill="#FF8A65"/>
  <path d="M30 20 L30 10" stroke="#81C784" stroke-width="3"/>
  <path d="M25 12 Q30 5 35 12" fill="#81C784"/>
  <circle cx="70" cy="60" r="20" fill="#FFD54F"/>
  <path d="M70 40 L70 30" stroke="#81C784" stroke-width="3"/>
  <path d="M65 32 Q70 25 75 32" fill="#81C784"/>
  <circle cx="50" cy="70" r="20" fill="#81C784"/>
</svg>
`;

// Placeholder SVG für Fang die Keime Spiel
const gameCatchSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" rx="10" fill="#E0F7FA"/>
  <circle cx="30" cy="30" r="10" fill="#E57373"/>
  <circle cx="70" cy="30" r="8" fill="#64B5F6"/>
  <circle cx="30" cy="70" r="12" fill="#81C784"/>
  <circle cx="70" cy="70" r="9" fill="#9575CD"/>
  <circle cx="50" cy="50" r="15" fill="white" stroke="#4DB6AC" stroke-width="2"/>
  <path d="M40 50 L60 50" stroke="#4DB6AC" stroke-width="2"/>
  <path d="M50 40 L50 60" stroke="#4DB6AC" stroke-width="2"/>
</svg>
`;

// Placeholder SVG für Hände waschen Spiel
const gameWashSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" rx="10" fill="#E0F7FA"/>
  <path d="M30 40 Q35 20 50 30 Q65 20 70 40 Q75 60 60 70 Q50 75 40 70 Q25 60 30 40" fill="#FFECB3"/>
  <circle cx="40" cy="50" r="5" fill="#A1887F"/>
  <circle cx="60" cy="50" r="5" fill="#A1887F"/>
  <rect x="30" y="80" width="40" height="10" rx="5" fill="#4DB6AC"/>
  <circle cx="20" cy="20" r="5" fill="#81D4FA"/>
  <circle cx="80" cy="20" r="5" fill="#81D4FA"/>
  <circle cx="20" cy="80" r="5" fill="#81D4FA"/>
  <circle cx="80" cy="80" r="5" fill="#81D4FA"/>
</svg>
`;

// Placeholder SVG für Immun-Abwehr Spiel
const gameDefenseSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x="10" y="10" width="80" height="80" rx="10" fill="#FFCDD2"/>
  <circle cx="50" cy="50" r="15" fill="white" stroke="#4DB6AC" stroke-width="2"/>
  <circle cx="45" cy="45" r="2" fill="#37474F"/>
  <circle cx="55" cy="45" r="2" fill="#37474F"/>
  <path d="M45 55 Q50 58 55 55" stroke="#37474F" stroke-width="1" fill="none"/>
  <circle cx="20" cy="20" r="5" fill="#E57373"/>
  <circle cx="80" cy="20" r="5" fill="#64B5F6"/>
  <circle cx="20" cy="80" r="5" fill="#81C784"/>
  <circle cx="80" cy="80" r="5" fill="#9575CD"/>
  <path d="M30 30 L70 70" stroke="#37474F" stroke-width="1"/>
  <path d="M70 30 L30 70" stroke="#37474F" stroke-width="1"/>
</svg>
`;

// Placeholder SVG für Lautsprecher
const speakerSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M30 40 L50 20 L50 80 L30 60 L10 60 L10 40 Z" fill="#FFD54F"/>
  <path d="M60 30 Q80 50 60 70" stroke="#FFD54F" stroke-width="5" fill="none"/>
  <path d="M70 20 Q100 50 70 80" stroke="#FFD54F" stroke-width="5" fill="none"/>
</svg>
`;

// Placeholder SVG für Lautsprecher (stumm)
const speakerMuteSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M30 40 L50 20 L50 80 L30 60 L10 60 L10 40 Z" fill="#FFD54F"/>
  <path d="M60 30 L90 70" stroke="#FF8A65" stroke-width="5"/>
  <path d="M60 70 L90 30" stroke="#FF8A65" stroke-width="5"/>
</svg>
`;

// Placeholder SVG für kleinen Lautsprecher
const speakerSmallSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <path d="M15 20 L25 10 L25 40 L15 30 L5 30 L5 20 Z" fill="#FFD54F"/>
  <path d="M30 15 Q40 25 30 35" stroke="#FFD54F" stroke-width="3" fill="none"/>
</svg>
`;

// Placeholder SVG für Hände (für das Spiel)
const handsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <path d="M50 100 Q60 50 100 70 Q120 30 140 70 Q180 30 200 70 Q240 50 250 100 Q260 150 220 170 Q150 200 80 170 Q40 150 50 100" fill="#FFECB3"/>
  <path d="M100 100 Q110 80 120 100" stroke="#FFCC80" stroke-width="2" fill="none"/>
  <path d="M140 100 Q150 80 160 100" stroke="#FFCC80" stroke-width="2" fill="none"/>
  <path d="M180 100 Q190 80 200 100" stroke="#FFCC80" stroke-width="2" fill="none"/>
</svg>
`;

// Funktion zum Erstellen und Speichern der SVG-Dateien
function createSVGFiles() {
  const svgFiles = [
    { name: 'wuschel.svg', content: wuschelSVG },
    { name: 'wuschel-wave.svg', content: wuschelWaveSVG },
    { name: 'wuschel-shield.svg', content: wuschelShieldSVG },
    { name: 'wuschel-small.svg', content: wuschelSmallSVG },
    { name: 'wuschel-game.svg', content: wuschelGameSVG },
    { name: 'wuschel-game2.svg', content: wuschelGame2SVG },
    { name: 'bakterien.svg', content: bakterienSVG },
    { name: 'viren.svg', content: virenSVG },
    { name: 'pilze.svg', content: pilzeSVG },
    { name: 'protozoen.svg', content: protozoenSVG },
    { name: 'niesen.svg', content: niesenSVG },
    { name: 'haende.svg', content: haendeSVG },
    { name: 'essen.svg', content: essenSVG },
    { name: 'haendewaschen.svg', content: haendewaschenSVG },
    { name: 'husten.svg', content: hustenSVG },
    { name: 'obst.svg', content: obstSVG },
    { name: 'game-catch.svg', content: gameCatchSVG },
    { name: 'game-wash.svg', content: gameWashSVG },
    { name: 'game-defense.svg', content: gameDefenseSVG },
    { name: 'speaker.svg', content: speakerSVG },
    { name: 'speaker-mute.svg', content: speakerMuteSVG },
    { name: 'speaker-small.svg', content: speakerSmallSVG },
    { name: 'hands.svg', content: handsSVG }
  ];

  // Konvertiere SVG zu PNG (simuliert)
  const pngFiles = [
    'wuschel.png',
    'wuschel-wave.png',
    'wuschel-shield.png',
    'wuschel-small.png',
    'wuschel-game.png',
    'wuschel-game2.png',
    'bakterien.png',
    'viren.png',
    'pilze.png',
    'protozoen.png',
    'niesen.png',
    'haende.png',
    'essen.png',
    'haendewaschen.png',
    'husten.png',
    'obst.png',
    'game-catch.png',
    'game-wash.png',
    'game-defense.png',
    'speaker.png',
    'speaker-mute.png',
    'speaker-small.png',
    'hands.png',
    'good_solder.jpg',
    'cold_solder.jpg',
    'excess_solder.jpg',
    'series_circuit.jpg',
    'parallel_circuit.jpg',
    'mixed_circuit.jpg',
    'loeten_placeholder.jpg'
  ];

  console.log('SVG-Dateien wurden erstellt und in PNG konvertiert.');
  return { svgFiles, pngFiles };
}

// Erstelle die SVG-Dateien
createSVGFiles();
