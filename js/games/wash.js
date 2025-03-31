// Hände waschen Challenge Spiel - Ein interaktives Spiel für Kinder zum Lernen der richtigen Händehygiene

document.addEventListener('DOMContentLoaded', function() {
    // Spielbereich
    const gameArea = document.getElementById('wash-game-area');
    // Start-Button
    const startButton = document.getElementById('start-wash-game');
    
    // Spielvariablen
    let gameActive = false;
    let score = 0;
    let timeLeft = 30;
    let dirtSpots = [];
    let gameTimer;
    let countdownTimer;
    
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
        
        // Hintergrundbild (Hände) erstellen
        const hands = document.createElement('div');
        hands.className = 'hands';
        hands.style.position = 'absolute';
        hands.style.width = '100%';
        hands.style.height = '100%';
        hands.style.backgroundImage = 'url("images/hands.png")';
        hands.style.backgroundSize = 'contain';
        hands.style.backgroundPosition = 'center';
        hands.style.backgroundRepeat = 'no-repeat';
        hands.style.zIndex = '1';
        gameArea.appendChild(hands);
        
        // Punkteanzeige erstellen
        const scoreDisplay = document.createElement('div');
        scoreDisplay.id = 'wash-score-display';
        scoreDisplay.style.position = 'absolute';
        scoreDisplay.style.top = '10px';
        scoreDisplay.style.left = '10px';
        scoreDisplay.style.fontSize = '20px';
        scoreDisplay.style.fontWeight = 'bold';
        scoreDisplay.style.zIndex = '10';
        scoreDisplay.textContent = 'Sauberkeit: 0%';
        gameArea.appendChild(scoreDisplay);
        
        // Zeitanzeige erstellen
        const timeDisplay = document.createElement('div');
        timeDisplay.id = 'wash-time-display';
        timeDisplay.style.position = 'absolute';
        timeDisplay.style.top = '10px';
        timeDisplay.style.right = '10px';
        timeDisplay.style.fontSize = '20px';
        timeDisplay.style.fontWeight = 'bold';
        timeDisplay.style.zIndex = '10';
        timeDisplay.textContent = 'Zeit: 30';
        gameArea.appendChild(timeDisplay);
        
        // Seife erstellen
        const soap = document.createElement('div');
        soap.id = 'soap';
        soap.style.position = 'absolute';
        soap.style.width = '60px';
        soap.style.height = '40px';
        soap.style.backgroundColor = '#FFD54F';
        soap.style.borderRadius = '10px';
        soap.style.cursor = 'pointer';
        soap.style.zIndex = '5';
        soap.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        soap.style.userSelect = 'none';
        soap.style.display = 'flex';
        soap.style.justifyContent = 'center';
        soap.style.alignItems = 'center';
        soap.style.fontSize = '12px';
        soap.style.fontWeight = 'bold';
        soap.style.color = '#37474F';
        soap.textContent = 'Seife';
        soap.style.left = `${gameWidth / 2 - 30}px`;
        soap.style.top = `${gameHeight - 60}px`;
        gameArea.appendChild(soap);
        
        // Schmutzflecken erstellen
        createDirtSpots(15);
        
        // Spielvariablen zurücksetzen
        score = 0;
        timeLeft = 30;
        
        // Anzeigen aktualisieren
        updateScore();
        updateTime();
        
        // Seife ziehbar machen
        makeSoapDraggable(soap);
    }
    
    // Schmutzflecken erstellen
    function createDirtSpots(count) {
        dirtSpots = [];
        
        for (let i = 0; i < count; i++) {
            // Schmutzfleck erstellen
            const dirt = document.createElement('div');
            dirt.className = 'dirt-spot';
            
            // Zufällige Größe (15-30px)
            const size = 15 + Math.random() * 15;
            
            // Zufällige Position (innerhalb der Hände)
            const posX = 100 + Math.random() * (gameWidth - 200);
            const posY = 50 + Math.random() * (gameHeight - 100);
            
            // Schmutzfleck-Stil festlegen
            dirt.style.position = 'absolute';
            dirt.style.width = `${size}px`;
            dirt.style.height = `${size}px`;
            dirt.style.borderRadius = '50%';
            dirt.style.backgroundColor = 'rgba(139, 69, 19, 0.7)';
            dirt.style.left = `${posX}px`;
            dirt.style.top = `${posY}px`;
            dirt.style.zIndex = '2';
            
            // Schmutzfleck zum Spielbereich hinzufügen
            gameArea.appendChild(dirt);
            
            // Schmutzfleck zur Liste hinzufügen
            dirtSpots.push(dirt);
        }
    }
    
    // Seife ziehbar machen
    function makeSoapDraggable(soap) {
        let isDragging = false;
        let offsetX, offsetY;
        
        // Mausevents
        soap.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        
        // Touch-Events
        soap.addEventListener('touchstart', startDragTouch);
        document.addEventListener('touchmove', dragTouch);
        document.addEventListener('touchend', endDrag);
        
        function startDrag(e) {
            if (!gameActive) return;
            
            isDragging = true;
            offsetX = e.clientX - soap.getBoundingClientRect().left;
            offsetY = e.clientY - soap.getBoundingClientRect().top;
            
            // Seife hervorheben
            soap.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
        }
        
        function startDragTouch(e) {
            if (!gameActive) return;
            
            isDragging = true;
            const touch = e.touches[0];
            offsetX = touch.clientX - soap.getBoundingClientRect().left;
            offsetY = touch.clientY - soap.getBoundingClientRect().top;
            
            // Seife hervorheben
            soap.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
        }
        
        function drag(e) {
            if (!isDragging || !gameActive) return;
            
            // Neue Position berechnen
            const gameRect = gameArea.getBoundingClientRect();
            let newX = e.clientX - gameRect.left - offsetX;
            let newY = e.clientY - gameRect.top - offsetY;
            
            // Innerhalb des Spielbereichs bleiben
            newX = Math.max(0, Math.min(newX, gameWidth - 60));
            newY = Math.max(0, Math.min(newY, gameHeight - 40));
            
            // Position aktualisieren
            soap.style.left = `${newX}px`;
            soap.style.top = `${newY}px`;
            
            // Kollision mit Schmutzflecken prüfen
            checkCollisions(soap);
            
            // Schaum-Effekt erstellen
            createBubble(newX + 30, newY + 20);
        }
        
        function dragTouch(e) {
            if (!isDragging || !gameActive) return;
            
            // Touch-Bewegung verhindern
            e.preventDefault();
            
            const touch = e.touches[0];
            
            // Neue Position berechnen
            const gameRect = gameArea.getBoundingClientRect();
            let newX = touch.clientX - gameRect.left - offsetX;
            let newY = touch.clientY - gameRect.top - offsetY;
            
            // Innerhalb des Spielbereichs bleiben
            newX = Math.max(0, Math.min(newX, gameWidth - 60));
            newY = Math.max(0, Math.min(newY, gameHeight - 40));
            
            // Position aktualisieren
            soap.style.left = `${newX}px`;
            soap.style.top = `${newY}px`;
            
            // Kollision mit Schmutzflecken prüfen
            checkCollisions(soap);
            
            // Schaum-Effekt erstellen
            createBubble(newX + 30, newY + 20);
        }
        
        function endDrag() {
            isDragging = false;
            
            // Seife zurücksetzen
            if (soap) {
                soap.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
            }
        }
    }
    
    // Schaum-Effekt erstellen
    function createBubble(x, y) {
        if (!gameActive) return;
        
        // Zufällige Größe (5-10px)
        const size = 5 + Math.random() * 5;
        
        // Blase erstellen
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.position = 'absolute';
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.borderRadius = '50%';
        bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        bubble.style.left = `${x - size/2 + (Math.random() - 0.5) * 20}px`;
        bubble.style.top = `${y - size/2 + (Math.random() - 0.5) * 20}px`;
        bubble.style.zIndex = '3';
        
        // Blase zum Spielbereich hinzufügen
        gameArea.appendChild(bubble);
        
        // Blase nach kurzer Zeit entfernen
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 1000);
    }
    
    // Kollision mit Schmutzflecken prüfen
    function checkCollisions(soap) {
        if (!gameActive) return;
        
        const soapRect = {
            left: parseInt(soap.style.left),
            top: parseInt(soap.style.top),
            right: parseInt(soap.style.left) + 60,
            bottom: parseInt(soap.style.top) + 40
        };
        
        // Alle Schmutzflecken prüfen
        for (let i = dirtSpots.length - 1; i >= 0; i--) {
            const dirt = dirtSpots[i];
            
            if (!dirt.parentNode) continue;
            
            const dirtSize = parseInt(dirt.style.width);
            const dirtRect = {
                left: parseInt(dirt.style.left),
                top: parseInt(dirt.style.top),
                right: parseInt(dirt.style.left) + dirtSize,
                bottom: parseInt(dirt.style.top) + dirtSize
            };
            
            // Kollision prüfen
            if (soapRect.left < dirtRect.right &&
                soapRect.right > dirtRect.left &&
                soapRect.top < dirtRect.bottom &&
                soapRect.bottom > dirtRect.top) {
                
                // Schmutzfleck entfernen
                cleanDirt(dirt, i);
            }
        }
    }
    
    // Schmutzfleck reinigen
    function cleanDirt(dirt, index) {
        // Reinigungsanimation
        dirt.style.opacity = '0';
        dirt.style.transform = 'scale(0)';
        dirt.style.transition = 'all 0.3s ease';
        
        // Soundeffekt abspielen
        if (window.playSoundEffect) {
            window.playSoundEffect('wash');
        }
        
        // Schmutzfleck nach Animation entfernen
        setTimeout(() => {
            if (dirt.parentNode) {
                dirt.parentNode.removeChild(dirt);
            }
        }, 300);
        
        // Schmutzfleck aus Liste entfernen
        dirtSpots.splice(index, 1);
        
        // Punkte aktualisieren
        updateCleanliness();
        
        // Prüfen, ob alle Schmutzflecken entfernt wurden
        if (dirtSpots.length === 0) {
            // Bonus für schnelles Reinigen
            const timeBonus = timeLeft * 2;
            score += timeBonus;
            
            // Spiel beenden
            endGame(true);
        }
    }
    
    // Sauberkeit aktualisieren
    function updateCleanliness() {
        // Prozentsatz der gereinigten Schmutzflecken berechnen
        const totalDirt = 15; // Gesamtzahl der Schmutzflecken
        const cleanedDirt = totalDirt - dirtSpots.length;
        score = Math.round((cleanedDirt / totalDirt) * 100);
        
        // Anzeige aktualisieren
        updateScore();
    }
    
    // Spiel starten
    function startGame() {
        if (gameActive) return;
        
        gameActive = true;
        initGame();
        
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
    function endGame(completed = false) {
        gameActive = false;
        
        // Timer stoppen
        clearInterval(countdownTimer);
        
        // Start-Button wieder aktivieren
        startButton.disabled = false;
        
        // Ergebnis anzeigen
        showResult(completed);
        
        // Soundeffekt abspielen
        if (window.playSoundEffect) {
            window.playSoundEffect(completed ? 'game-win' : 'game-end');
        }
    }
    
    // Ergebnis anzeigen
    function showResult(completed) {
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
        
        // Ergebnistext basierend auf Sauberkeit
        let resultText = '';
        if (completed) {
            resultText = 'Super! Du hast alle Schmutzflecken entfernt!';
        } else if (score >= 75) {
            resultText = 'Gut gemacht! Deine Hände sind fast sauber!';
        } else if (score >= 50) {
            resultText = 'Nicht schlecht! Aber du kannst noch besser werden!';
        } else {
            resultText = 'Versuche es noch einmal! Wasche deine Hände gründlicher!';
        }
        
        resultDisplay.innerHTML = `
            <p>Spiel vorbei!</p>
            <p>Sauberkeit: ${score}%</p>
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
            endGame(false);
        }
    }
    
    // Punkteanzeige aktualisieren
    function updateScore() {
        const scoreDisplay = document.getElementById('wash-score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `Sauberkeit: ${score}%`;
        }
    }
    
    // Zeitanzeige aktualisieren
    function updateTime() {
        const timeDisplay = document.getElementById('wash-time-display');
        if (timeDisplay) {
            timeDisplay.textContent = `Zeit: ${timeLeft}`;
        }
    }
    
    // Event-Listener für Start-Button
    startButton.addEventListener('click', startGame);
    
    // Spiel zurücksetzen (für externe Aufrufe)
    window.resetWashGame = function() {
        gameActive = false;
        clearInterval(countdownTimer);
        startButton.disabled = false;
        gameArea.innerHTML = '';
    };
});
