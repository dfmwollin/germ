// Immun-Abwehr Spiel - Ein interaktives Spiel für Kinder, in dem sie als weiße Blutzelle Keime bekämpfen

document.addEventListener('DOMContentLoaded', function() {
    // Spielbereich
    const gameArea = document.getElementById('defense-game-area');
    // Start-Button
    const startButton = document.getElementById('start-defense-game');
    
    // Spielvariablen
    let gameActive = false;
    let score = 0;
    let timeLeft = 45;
    let germs = [];
    let gameTimer;
    let countdownTimer;
    let germCreationTimer;
    let playerMode = 1; // Standard: 1 Spieler
    let bestScore = 0;
    
    // Spielbereich-Dimensionen
    let gameWidth;
    let gameHeight;
    
    // Wuschel (weiße Blutzelle) Eigenschaften
    let wuschel = {
        element: null,
        x: 0,
        y: 0,
        width: 60,
        height: 60,
        speed: 5
    };
    
    // Zweiter Spieler (wenn aktiviert)
    let wuschel2 = {
        element: null,
        x: 0,
        y: 0,
        width: 60,
        height: 60,
        speed: 5
    };
    
    // Tasten-Status
    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
        w: false,
        a: false,
        s: false,
        d: false
    };
    
    // Germ-Typen mit verschiedenen Eigenschaften
    const germTypes = [
        { type: 'bakterien', color: '#E57373', points: 10, size: 40, speed: 2 },
        { type: 'viren', color: '#64B5F6', points: 15, size: 30, speed: 3 },
        { type: 'pilze', color: '#81C784', points: 20, size: 50, speed: 1.5 },
        { type: 'protozoen', color: '#9575CD', points: 25, size: 35, speed: 2.5 }
    ];
    
    // Spiel initialisieren
    function initGame() {
        // Spielbereich-Dimensionen aktualisieren
        gameWidth = gameArea.clientWidth;
        gameHeight = gameArea.clientHeight;
        
        // Spielbereich leeren
        gameArea.innerHTML = '';
        
        // Hintergrund erstellen (Körper-Inneres)
        gameArea.style.backgroundColor = '#FFCDD2';
        
        // Punkteanzeige erstellen
        const scoreDisplay = document.createElement('div');
        scoreDisplay.id = 'defense-score-display';
        scoreDisplay.style.position = 'absolute';
        scoreDisplay.style.top = '10px';
        scoreDisplay.style.left = '10px';
        scoreDisplay.style.fontSize = '20px';
        scoreDisplay.style.fontWeight = 'bold';
        scoreDisplay.style.zIndex = '10';
        scoreDisplay.textContent = 'Punkte: 0';
        gameArea.appendChild(scoreDisplay);
        
        // Zeitanzeige erstellen
        const timeDisplay = document.createElement('div');
        timeDisplay.id = 'defense-time-display';
        timeDisplay.style.position = 'absolute';
        timeDisplay.style.top = '10px';
        timeDisplay.style.right = '10px';
        timeDisplay.style.fontSize = '20px';
        timeDisplay.style.fontWeight = 'bold';
        timeDisplay.style.zIndex = '10';
        timeDisplay.textContent = 'Zeit: 45';
        gameArea.appendChild(timeDisplay);

        // Beste Punktzahl aus dem lokalen Speicher
        bestScore = parseInt(localStorage.getItem('defenseHighScore') || '0');

        const bestDisplay = document.createElement('div');
        bestDisplay.id = 'defense-best-display';
        bestDisplay.style.position = 'absolute';
        bestDisplay.style.bottom = '10px';
        bestDisplay.style.left = '10px';
        bestDisplay.style.fontSize = '18px';
        bestDisplay.style.fontWeight = 'bold';
        bestDisplay.style.zIndex = '10';
        bestDisplay.textContent = `Rekord: ${bestScore}`;
        gameArea.appendChild(bestDisplay);
        
        // Wuschel erstellen (Spieler 1)
        createWuschel();
        
        // Zweiten Wuschel erstellen (Spieler 2, falls aktiviert)
        if (playerMode === 2) {
            createWuschel2();
        }
        
        // Spielvariablen zurücksetzen
        score = 0;
        timeLeft = 45;
        germs = [];
        
        // Anzeigen aktualisieren
        updateScore();
        updateTime();
        
        // Tastatur-Events registrieren
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    }
    
    // Wuschel erstellen (Spieler 1)
    function createWuschel() {
        const wuschel_element = document.createElement('div');
        wuschel_element.id = 'wuschel-player';
        wuschel_element.style.position = 'absolute';
        wuschel_element.style.width = `${wuschel.width}px`;
        wuschel_element.style.height = `${wuschel.height}px`;
        wuschel_element.style.borderRadius = '50%';
        wuschel_element.style.backgroundColor = 'white';
        wuschel_element.style.border = '2px solid #4DB6AC';
        wuschel_element.style.zIndex = '5';
        wuschel_element.style.backgroundImage = 'url("images/wuschel-game.png")';
        wuschel_element.style.backgroundSize = 'contain';
        wuschel_element.style.backgroundPosition = 'center';
        wuschel_element.style.backgroundRepeat = 'no-repeat';
        
        // Startposition (Mitte des Spielbereichs)
        wuschel.x = gameWidth / 2 - wuschel.width / 2;
        wuschel.y = gameHeight / 2 - wuschel.height / 2;
        wuschel_element.style.left = `${wuschel.x}px`;
        wuschel_element.style.top = `${wuschel.y}px`;
        
        gameArea.appendChild(wuschel_element);
        wuschel.element = wuschel_element;
    }
    
    // Zweiten Wuschel erstellen (Spieler 2)
    function createWuschel2() {
        const wuschel2_element = document.createElement('div');
        wuschel2_element.id = 'wuschel-player2';
        wuschel2_element.style.position = 'absolute';
        wuschel2_element.style.width = `${wuschel2.width}px`;
        wuschel2_element.style.height = `${wuschel2.height}px`;
        wuschel2_element.style.borderRadius = '50%';
        wuschel2_element.style.backgroundColor = 'white';
        wuschel2_element.style.border = '2px solid #FF8A65';
        wuschel2_element.style.zIndex = '5';
        wuschel2_element.style.backgroundImage = 'url("images/wuschel-game2.png")';
        wuschel2_element.style.backgroundSize = 'contain';
        wuschel2_element.style.backgroundPosition = 'center';
        wuschel2_element.style.backgroundRepeat = 'no-repeat';
        
        // Startposition (etwas versetzt von Spieler 1)
        wuschel2.x = gameWidth / 2 - wuschel2.width / 2 + 100;
        wuschel2.y = gameHeight / 2 - wuschel2.height / 2;
        wuschel2_element.style.left = `${wuschel2.x}px`;
        wuschel2_element.style.top = `${wuschel2.y}px`;
        
        gameArea.appendChild(wuschel2_element);
        wuschel2.element = wuschel2_element;
    }
    
    // Tastendruck verarbeiten
    function handleKeyDown(e) {
        if (!gameActive) return;
        
        if (e.key in keys) {
            keys[e.key] = true;
            e.preventDefault();
        }
    }
    
    // Tastenloslassen verarbeiten
    function handleKeyUp(e) {
        if (e.key in keys) {
            keys[e.key] = false;
        }
    }
    
    // Spieler bewegen
    function movePlayer() {
        if (!gameActive) return;
        
        // Spieler 1 bewegen (Pfeiltasten)
        if (keys.ArrowUp) {
            wuschel.y = Math.max(0, wuschel.y - wuschel.speed);
        }
        if (keys.ArrowDown) {
            wuschel.y = Math.min(gameHeight - wuschel.height, wuschel.y + wuschel.speed);
        }
        if (keys.ArrowLeft) {
            wuschel.x = Math.max(0, wuschel.x - wuschel.speed);
        }
        if (keys.ArrowRight) {
            wuschel.x = Math.min(gameWidth - wuschel.width, wuschel.x + wuschel.speed);
        }
        
        // Position aktualisieren
        wuschel.element.style.left = `${wuschel.x}px`;
        wuschel.element.style.top = `${wuschel.y}px`;
        
        // Spieler 2 bewegen (WASD), falls aktiviert
        if (playerMode === 2) {
            if (keys.w) {
                wuschel2.y = Math.max(0, wuschel2.y - wuschel2.speed);
            }
            if (keys.s) {
                wuschel2.y = Math.min(gameHeight - wuschel2.height, wuschel2.y + wuschel2.speed);
            }
            if (keys.a) {
                wuschel2.x = Math.max(0, wuschel2.x - wuschel2.speed);
            }
            if (keys.d) {
                wuschel2.x = Math.min(gameWidth - wuschel2.width, wuschel2.x + wuschel2.speed);
            }
            
            // Position aktualisieren
            wuschel2.element.style.left = `${wuschel2.x}px`;
            wuschel2.element.style.top = `${wuschel2.y}px`;
        }
        
        // Kollisionen prüfen
        checkPlayerCollisions();
        
        // Animation fortsetzen
        requestAnimationFrame(movePlayer);
    }
    
    // Keim erstellen
    function createGerm() {
        if (!gameActive) return;
        
        // Zufälligen Keim-Typ auswählen
        const germType = germTypes[Math.floor(Math.random() * germTypes.length)];
        
        // Keim-Element erstellen
        const germ = document.createElement('div');
        germ.className = 'germ';
        germ.dataset.type = germType.type;
        germ.dataset.points = germType.points;
        germ.dataset.speed = germType.speed;
        
        // Keim-Stil festlegen
        germ.style.position = 'absolute';
        germ.style.width = `${germType.size}px`;
        germ.style.height = `${germType.size}px`;
        germ.style.borderRadius = '50%';
        germ.style.backgroundColor = germType.color;
        germ.style.zIndex = '3';
        germ.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        germ.style.display = 'flex';
        germ.style.justifyContent = 'center';
        germ.style.alignItems = 'center';
        germ.style.fontSize = `${germType.size / 3}px`;
        germ.style.fontWeight = 'bold';
        germ.style.color = 'white';
        germ.style.userSelect = 'none';
        
        // Emoji basierend auf Keim-Typ
        let emoji = '';
        switch (germType.type) {
            case 'bakterien':
                emoji = '🦠';
                break;
            case 'viren':
                emoji = '🧫';
                break;
            case 'pilze':
                emoji = '🍄';
                break;
            case 'protozoen':
                emoji = '🦠';
                break;
        }
        germ.textContent = emoji;
        
        // Zufällige Startposition (am Rand des Spielbereichs)
        let posX, posY;
        const side = Math.floor(Math.random() * 4); // 0: oben, 1: rechts, 2: unten, 3: links
        
        switch (side) {
            case 0: // oben
                posX = Math.random() * gameWidth;
                posY = -germType.size;
                break;
            case 1: // rechts
                posX = gameWidth;
                posY = Math.random() * gameHeight;
                break;
            case 2: // unten
                posX = Math.random() * gameWidth;
                posY = gameHeight;
                break;
            case 3: // links
                posX = -germType.size;
                posY = Math.random() * gameHeight;
                break;
        }
        
        germ.style.left = `${posX}px`;
        germ.style.top = `${posY}px`;
        
        // Ziel berechnen (Mitte des Spielbereichs)
        const targetX = gameWidth / 2;
        const targetY = gameHeight / 2;
        
        // Richtung zum Ziel berechnen
        const dx = targetX - posX;
        const dy = targetY - posY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Normalisierte Richtung
        const dirX = dx / distance;
        const dirY = dy / distance;
        
        // Geschwindigkeit speichern
        germ.dataset.dirX = dirX;
        germ.dataset.dirY = dirY;
        
        // Keim zum Spielbereich hinzufügen
        gameArea.appendChild(germ);
        
        // Keim zur Liste hinzufügen
        germs.push(germ);
        
        // Keim-Animation starten
        moveGerm(germ);
    }
    
    // Keim bewegen
    function moveGerm(germ) {
        if (!gameActive || !germ.parentNode) return;
        
        // Aktuelle Position
        let posX = parseFloat(germ.style.left);
        let posY = parseFloat(germ.style.top);
        
        // Richtung und Geschwindigkeit
        const dirX = parseFloat(germ.dataset.dirX);
        const dirY = parseFloat(germ.dataset.dirY);
        const speed = parseFloat(germ.dataset.speed);
        
        // Größe
        const size = parseFloat(germ.style.width);
        
        // Neue Position berechnen
        posX += dirX * speed;
        posY += dirY * speed;
        
        // Position aktualisieren
        germ.style.left = `${posX}px`;
        germ.style.top = `${posY}px`;
        
        // Prüfen, ob Keim außerhalb des Spielbereichs ist
        if (posX < -size || posX > gameWidth + size || posY < -size || posY > gameHeight + size) {
            // Keim entfernen
            if (germ.parentNode) {
                germ.parentNode.removeChild(germ);
            }
            
            // Aus Liste entfernen
            germs = germs.filter(g => g !== germ);
            
            return;
        }
        
        // Animation fortsetzen
        requestAnimationFrame(() => moveGerm(germ));
    }
    
    // Kollisionen zwischen Spieler und Keimen prüfen
    function checkPlayerCollisions() {
        if (!gameActive) return;
        
        // Spieler 1 Rechteck
        const player1Rect = {
            left: wuschel.x,
            top: wuschel.y,
            right: wuschel.x + wuschel.width,
            bottom: wuschel.y + wuschel.height
        };
        
        // Spieler 2 Rechteck (falls aktiviert)
        let player2Rect = null;
        if (playerMode === 2) {
            player2Rect = {
                left: wuschel2.x,
                top: wuschel2.y,
                right: wuschel2.x + wuschel2.width,
                bottom: wuschel2.y + wuschel2.height
            };
        }
        
        // Alle Keime prüfen
        for (let i = germs.length - 1; i >= 0; i--) {
            const germ = germs[i];
            
            if (!germ.parentNode) continue;
            
            const germSize = parseInt(germ.style.width);
            const germRect = {
                left: parseInt(germ.style.left),
                top: parseInt(germ.style.top),
                right: parseInt(germ.style.left) + germSize,
                bottom: parseInt(germ.style.top) + germSize
            };
            
            // Kollision mit Spieler 1 prüfen
            if (player1Rect.left < germRect.right &&
                player1Rect.right > germRect.left &&
                player1Rect.top < germRect.bottom &&
                player1Rect.bottom > germRect.top) {
                
                // Keim fangen
                catchGerm(germ, i, 1);
            }
            // Kollision mit Spieler 2 prüfen (falls aktiviert)
            else if (playerMode === 2 && player2Rect &&
                     player2Rect.left < germRect.right &&
                     player2Rect.right > germRect.left &&
                     player2Rect.top < germRect.bottom &&
                     player2Rect.bottom > germRect.top) {
                
                // Keim fangen
                catchGerm(germ, i, 2);
            }
        }
    }
    
    // Keim fangen
    function catchGerm(germ, index, playerNum) {
        if (!gameActive) return;
        
        // Punkte hinzufügen
        score += parseInt(germ.dataset.points);
        updateScore();
        
        // Keim aus Liste entfernen
        germs.splice(index, 1);
        
        // Fang-Animation
        germ.style.transform = 'scale(0)';
        germ.style.opacity = '0';
        germ.style.transition = 'all 0.3s ease';
        
        // Spieler-Animation (kurzes Aufblinken)
        const player = playerNum === 1 ? wuschel.element : wuschel2.element;
        player.style.boxShadow = '0 0 15px white';
        setTimeout(() => {
            player.style.boxShadow = 'none';
        }, 300);
        
        // Soundeffekt abspielen
        if (window.playSoundEffect) {
            window.playSoundEffect('catch');
        }
        
        // Keim nach Animation entfernen
        setTimeout(() => {
            if (germ.parentNode) {
                germ.parentNode.removeChild(germ);
            }
        }, 300);
    }
    
    // Spiel starten
    function startGame() {
        if (gameActive) return;
        
        gameActive = true;
        initGame();
        
        // Spieler-Bewegung starten
        movePlayer();
        
        // Keime regelmäßig erstellen
        germCreationTimer = setInterval(createGerm, 1500);
        
        // Countdown starten
        countdownTimer = setInterval(updateCountdown, 1000);
        
        // Start-Button deaktivieren
        startButton.disabled = true;
        
        // Soundeffekt abspielen
        if (window.playSoundEffect) {
            window.playSoundEffect('game-start');
        }
    }
    
    // Spiel beenden
    function endGame() {
        gameActive = false;
        
        // Timer stoppen
        clearInterval(germCreationTimer);
        clearInterval(countdownTimer);
        
        // Tastatur-Events entfernen
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        
        // Start-Button wieder aktivieren
        startButton.disabled = false;
        
        // Ergebnis anzeigen
        showResult();
        
        // Soundeffekt abspielen
        if (window.playSoundEffect) {
            window.playSoundEffect('game-end');
        }
    }
    
    // Ergebnis anzeigen
    function showResult() {
        // Spielbereich leeren
        gameArea.innerHTML = '';
        
        // Ergebnisanzeige erstellen
        const resultDisplay = document.createElement('div');
        resultDisplay.style.position = 'absolute';
        resultDisplay.style.top = '50%';
        resultDisplay.style.left = '50%';
        resultDisplay.style.transform = 'translate(-50%, -50%)';
        resultDisplay.style.textAlign = 'center';
        resultDisplay.style.fontSize = '24px';
        resultDisplay.style.fontWeight = 'bold';
        resultDisplay.style.color = '#4DB6AC';
        
        // Ergebnistext basierend auf Punktzahl
        let resultText = '';
        if (score >= 300) {
            resultText = 'Super! Du bist ein Immun-Abwehr-Meister!';
        } else if (score >= 200) {
            resultText = 'Gut gemacht! Du hast viele Keime besiegt!';
        } else if (score >= 100) {
            resultText = 'Nicht schlecht! Aber du kannst noch besser werden!';
        } else {
            resultText = 'Versuche es noch einmal! Übe, um mehr Keime zu fangen!';
        }
        
        // Rekord aktualisieren
        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('defenseHighScore', bestScore);
        }

        resultDisplay.innerHTML = `
            <p>Spiel vorbei!</p>
            <p>Deine Punkte: ${score}</p>
            <p>Rekord: ${bestScore}</p>
            <p>${resultText}</p>
            <p>Klicke auf "Start", um noch einmal zu spielen!</p>
        `;
        
        gameArea.appendChild(resultDisplay);
    }
    
    // Countdown aktualisieren
    function updateCountdown() {
        timeLeft--;
        updateTime();
        
        if (timeLeft <= 0) {
            endGame();
        }
    }
    
    // Punkteanzeige aktualisieren
    function updateScore() {
        const scoreDisplay = document.getElementById('defense-score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Punkte: ${score}`;
        }

        if (score > bestScore) {
            bestScore = score;
            const bestDisplay = document.getElementById('defense-best-display');
            if (bestDisplay) {
                bestDisplay.textContent = `Rekord: ${bestScore}`;
            }
        }
    }
    
    // Zeitanzeige aktualisieren
    function updateTime() {
        const timeDisplay = document.getElementById('defense-time-display');
        if (timeDisplay) {
            timeDisplay.textContent = `Zeit: ${timeLeft}`;
        }
    }
    
    // Event-Listener für Start-Button
    startButton.addEventListener('click', startGame);
    
    // Spielmodus aktualisieren (für externe Aufrufe)
    window.updatePlayerMode = function(mode) {
        playerMode = mode;
    };
    
    // Spiel zurücksetzen (für externe Aufrufe)
    window.resetDefenseGame = function() {
        gameActive = false;
        clearInterval(germCreationTimer);
        clearInterval(countdownTimer);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        startButton.disabled = false;
        gameArea.innerHTML = '';
    };
});
