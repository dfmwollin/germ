// Fang die Keime Spiel - Ein einfaches Spiel für Kinder zum Fangen von Keimen

document.addEventListener('DOMContentLoaded', function() {
    // Spielbereich
    const gameArea = document.getElementById('catch-game-area');
    // Start-Button
    const startButton = document.getElementById('start-catch-game');
    
    // Spielvariablen
    let gameActive = false;
    let score = 0;
    let timeLeft = 30;
    let germs = [];
    let gameTimer;
    let countdownTimer;
    let bestScore = 0;
    
    // Germ-Typen mit verschiedenen Farben und Punkten
    const germTypes = [
        { type: 'bakterien', color: '#E57373', points: 10, size: 50 },
        { type: 'viren', color: '#64B5F6', points: 15, size: 40 },
        { type: 'pilze', color: '#81C784', points: 20, size: 60 },
        { type: 'protozoen', color: '#9575CD', points: 25, size: 45 }
    ];
    
    // Spielbereich-Dimensionen
    let gameWidth;
    let gameHeight;
    
    // Spiel initialisieren
    function initGame() {
        // Spielbereich-Dimensionen aktualisieren
        gameWidth = gameArea.clientWidth;
        gameHeight = gameArea.clientHeight;
        
        // Spielbereich leeren
        gameArea.innerHTML = '';
        
        // Punkteanzeige erstellen
        const scoreDisplay = document.createElement('div');
        scoreDisplay.id = 'score-display';
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
        timeDisplay.id = 'time-display';
        timeDisplay.style.position = 'absolute';
        timeDisplay.style.top = '10px';
        timeDisplay.style.right = '10px';
        timeDisplay.style.fontSize = '20px';
        timeDisplay.style.fontWeight = 'bold';
        timeDisplay.style.zIndex = '10';
        timeDisplay.textContent = 'Zeit: 30';
        gameArea.appendChild(timeDisplay);

        // Beste Punktzahl aus dem lokalen Speicher
        bestScore = parseInt(localStorage.getItem('catchHighScore') || '0');

        const bestDisplay = document.createElement('div');
        bestDisplay.id = 'catch-best-display';
        bestDisplay.style.position = 'absolute';
        bestDisplay.style.bottom = '10px';
        bestDisplay.style.left = '10px';
        bestDisplay.style.fontSize = '18px';
        bestDisplay.style.fontWeight = 'bold';
        bestDisplay.style.zIndex = '10';
        bestDisplay.textContent = `Rekord: ${bestScore}`;
        gameArea.appendChild(bestDisplay);
        
        // Spielvariablen zurücksetzen
        score = 0;
        timeLeft = 30;
        germs = [];
        
        // Anzeigen aktualisieren
        updateScore();
        updateTime();
    }
    
    // Spiel starten
    function startGame() {
        if (gameActive) return;
        
        gameActive = true;
        initGame();
        
        // Keime regelmäßig erstellen
        gameTimer = setInterval(createGerm, 1000);
        
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
        clearInterval(gameTimer);
        clearInterval(countdownTimer);
        
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
        if (score >= 200) {
            resultText = 'Super! Du bist ein Keimejäger-Meister!';
        } else if (score >= 100) {
            resultText = 'Gut gemacht! Du hast viele Keime gefangen!';
        } else {
            resultText = 'Versuche es noch einmal! Übe, um mehr Keime zu fangen!';
        }
        
        // Rekord aktualisieren
        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('catchHighScore', bestScore);
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
        
        // Keim-Stil festlegen
        germ.style.position = 'absolute';
        germ.style.width = `${germType.size}px`;
        germ.style.height = `${germType.size}px`;
        germ.style.borderRadius = '50%';
        germ.style.backgroundColor = germType.color;
        germ.style.cursor = 'pointer';
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
        
        // Zufällige Position
        const posX = Math.random() * (gameWidth - germType.size);
        const posY = Math.random() * (gameHeight - germType.size);
        germ.style.left = `${posX}px`;
        germ.style.top = `${posY}px`;
        
        // Zufällige Bewegungsrichtung
        const speedX = (Math.random() - 0.5) * 4;
        const speedY = (Math.random() - 0.5) * 4;
        germ.dataset.speedX = speedX;
        germ.dataset.speedY = speedY;
        
        // Keim zum Spielbereich hinzufügen
        gameArea.appendChild(germ);
        
        // Keim zur Liste hinzufügen
        germs.push(germ);
        
        // Event-Listener für Klick auf Keim
        germ.addEventListener('click', function() {
            catchGerm(this);
        });
        
        // Keim-Animation starten
        moveGerm(germ);
    }
    
    // Keim bewegen
    function moveGerm(germ) {
        if (!gameActive) return;
        
        // Aktuelle Position
        let posX = parseFloat(germ.style.left);
        let posY = parseFloat(germ.style.top);
        
        // Geschwindigkeit
        const speedX = parseFloat(germ.dataset.speedX);
        const speedY = parseFloat(germ.dataset.speedY);
        
        // Größe
        const size = parseFloat(germ.style.width);
        
        // Neue Position berechnen
        posX += speedX;
        posY += speedY;
        
        // Kollision mit Rändern prüfen
        if (posX <= 0 || posX >= gameWidth - size) {
            germ.dataset.speedX = -speedX;
        }
        
        if (posY <= 0 || posY >= gameHeight - size) {
            germ.dataset.speedY = -speedY;
        }
        
        // Position aktualisieren
        germ.style.left = `${posX}px`;
        germ.style.top = `${posY}px`;
        
        // Animation fortsetzen
        requestAnimationFrame(() => moveGerm(germ));
    }
    
    // Keim fangen
    function catchGerm(germ) {
        if (!gameActive) return;
        
        // Punkte hinzufügen
        score += parseInt(germ.dataset.points);
        updateScore();
        
        // Keim aus Liste entfernen
        germs = germs.filter(g => g !== germ);
        
        // Fang-Animation
        germ.style.transform = 'scale(0)';
        germ.style.opacity = '0';
        germ.style.transition = 'all 0.3s ease';
        
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
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Punkte: ${score}`;
        }

        if (score > bestScore) {
            bestScore = score;
            const bestDisplay = document.getElementById('catch-best-display');
            if (bestDisplay) {
                bestDisplay.textContent = `Rekord: ${bestScore}`;
            }
        }
    }
    
    // Zeitanzeige aktualisieren
    function updateTime() {
        const timeDisplay = document.getElementById('time-display');
        if (timeDisplay) {
            timeDisplay.textContent = `Zeit: ${timeLeft}`;
        }
    }
    
    // Event-Listener für Start-Button
    startButton.addEventListener('click', startGame);
    
    // Spiel zurücksetzen (für externe Aufrufe)
    window.resetCatchGame = function() {
        gameActive = false;
        clearInterval(gameTimer);
        clearInterval(countdownTimer);
        startButton.disabled = false;
        gameArea.innerHTML = '';
    };
});
