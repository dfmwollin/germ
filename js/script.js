// Hauptskript für die Keime-Kinder-Website

// DOM-Elemente laden, wenn das Dokument bereit ist
document.addEventListener('DOMContentLoaded', function() {
    // Audio-Steuerung
    const toggleAudioButton = document.getElementById('toggle-audio');
    let audioEnabled = true;
    
    // Spiel-Overlays
    const catchGameOverlay = document.getElementById('game-catch-overlay');
    const washGameOverlay = document.getElementById('game-wash-overlay');
    const defenseGameOverlay = document.getElementById('game-defense-overlay');
    
    // Spiel-Buttons
    const gameButtons = document.querySelectorAll('.game-button');
    
    // Schließen-Buttons für Spiele
    const closeCatchGameButton = document.getElementById('close-catch-game');
    const closeWashGameButton = document.getElementById('close-wash-game');
    const closeDefenseGameButton = document.getElementById('close-defense-game');
    
    // Spieler-Auswahl-Buttons
    const onePlayerButton = document.getElementById('one-player');
    const twoPlayerButton = document.getElementById('two-player');
    
    // Spielmodus (Standard: 1 Spieler)
    let playerMode = 1;
    
    // Audio-Steuerung
    toggleAudioButton.addEventListener('click', function() {
        audioEnabled = !audioEnabled;
        
        // Audio-Icon ändern
        const audioIcon = toggleAudioButton.querySelector('.audio-icon');
        if (audioEnabled) {
            audioIcon.src = 'images/speaker.png';
        } else {
            audioIcon.src = 'images/speaker-mute.png';
        }
        
        // Audio-Status in allen Skripten aktualisieren
        if (window.updateAudioStatus) {
            window.updateAudioStatus(audioEnabled);
        }
    });
    
    // Spiel-Buttons Eventlistener
    gameButtons.forEach(button => {
        button.addEventListener('click', function() {
            const game = this.getAttribute('data-game');
            
            // Entsprechendes Spiel-Overlay anzeigen
            if (game === 'catch') {
                catchGameOverlay.style.display = 'flex';
            } else if (game === 'wash') {
                washGameOverlay.style.display = 'flex';
            } else if (game === 'defense') {
                defenseGameOverlay.style.display = 'flex';
            }
        });
    });
    
    // Schließen-Buttons für Spiele
    closeCatchGameButton.addEventListener('click', function() {
        catchGameOverlay.style.display = 'none';
        // Spiel zurücksetzen, falls nötig
        if (window.resetCatchGame) {
            window.resetCatchGame();
        }
    });
    
    closeWashGameButton.addEventListener('click', function() {
        washGameOverlay.style.display = 'none';
        // Spiel zurücksetzen, falls nötig
        if (window.resetWashGame) {
            window.resetWashGame();
        }
    });
    
    closeDefenseGameButton.addEventListener('click', function() {
        defenseGameOverlay.style.display = 'none';
        // Spiel zurücksetzen, falls nötig
        if (window.resetDefenseGame) {
            window.resetDefenseGame();
        }
    });
    
    // Spieler-Auswahl
    onePlayerButton.addEventListener('click', function() {
        playerMode = 1;
        onePlayerButton.classList.add('active');
        twoPlayerButton.classList.remove('active');
        
        // Spielmodus in Defense-Spiel aktualisieren
        if (window.updatePlayerMode) {
            window.updatePlayerMode(playerMode);
        }
    });
    
    twoPlayerButton.addEventListener('click', function() {
        playerMode = 2;
        twoPlayerButton.classList.add('active');
        onePlayerButton.classList.remove('active');
        
        // Spielmodus in Defense-Spiel aktualisieren
        if (window.updatePlayerMode) {
            window.updatePlayerMode(playerMode);
        }
    });
    
    // Smooth Scrolling für Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Globale Funktionen exportieren
    window.isAudioEnabled = function() {
        return audioEnabled;
    };
    
    window.getPlayerMode = function() {
        return playerMode;
    };
});
