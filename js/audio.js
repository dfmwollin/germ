// Audio-Funktionalität für die Keime-Kinder-Website
// Dieses Skript verwaltet die Audio-Wiedergabe für die Narration und Soundeffekte

document.addEventListener('DOMContentLoaded', function() {
    // Audio-Trigger-Buttons
    const audioTriggers = document.querySelectorAll('.audio-trigger');
    
    // Audio-Dateien
    const audioFiles = {
        'intro': 'audio/intro.mp3',
        'welcome': 'audio/welcome.mp3',
        'bakterien': 'audio/bakterien.mp3',
        'viren': 'audio/viren.mp3',
        'pilze': 'audio/pilze.mp3',
        'protozoen': 'audio/protozoen.mp3',
        'niesen': 'audio/niesen.mp3',
        'haende': 'audio/haende.mp3',
        'essen': 'audio/essen.mp3',
        'immunsystem': 'audio/immunsystem.mp3',
        'haendewaschen': 'audio/haendewaschen.mp3',
        'husten': 'audio/husten.mp3',
        'obst': 'audio/obst.mp3',
        'game-catch': 'audio/game-catch.mp3',
        'game-wash': 'audio/game-wash.mp3',
        'game-defense': 'audio/game-defense.mp3'
    };
    
    // Soundeffekte
    const soundEffects = {
        'game-start': 'audio/effects/game-start.mp3',
        'game-end': 'audio/effects/game-end.mp3',
        'game-win': 'audio/effects/game-win.mp3',
        'catch': 'audio/effects/catch.mp3',
        'wash': 'audio/effects/wash.mp3'
    };
    
    // Audio-Texte (für die Entwicklung und Dokumentation)
    const audioTexts = {
        'intro': 'Hallo! Ich bin Wuschel, deine weiße Blutzelle. Ich helfe dir, mehr über Keime zu lernen!',
        'welcome': 'Willkommen in der Keime-Welt! Hier lernst du alles über kleine Wesen, die wir nicht sehen können.',
        'bakterien': 'Bakterien sind winzig kleine Lebewesen. Sie sind so klein, dass wir sie nicht sehen können! Manche Bakterien sind unsere Freunde und helfen unserem Bauch, Essen zu verdauen. Andere Bakterien sind frech und können uns krank machen, wenn sie in unseren Körper kommen.',
        'viren': 'Viren sind noch winziger als Bakterien - wie kleine Zauberer! Sie können sich nicht alleine bewegen, sondern müssen in unsere Körperzellen schlüpfen, um sich zu vermehren. Wenn sie das tun, können wir Schnupfen, Husten oder Fieber bekommen.',
        'pilze': 'Pilze sind wie kleine Pflanzen, aber sie sind auch Keime! Manche Pilze sind lecker und können gegessen werden, wie die Pilze auf der Pizza. Andere Pilze können auf unserer Haut oder zwischen unseren Zehen wachsen und uns jucken lassen.',
        'protozoen': 'Protozoen sind winzige Tierchen, die im Wasser schwimmen können. Sie sind wie kleine Wassertierchen mit lustigen Formen! Manche können in unseren Körper gelangen, wenn wir schmutziges Wasser trinken.',
        'niesen': 'Wenn wir niesen oder husten, fliegen viele kleine Tröpfchen mit Keimen durch die Luft wie winzige Regentropfen. Diese Tröpfchen können auf andere Menschen landen und sie krank machen.',
        'haende': 'Unsere Hände berühren viele Dinge jeden Tag - Spielzeug, Türklinken, Tische. Dabei sammeln sie viele Keime. Wenn wir dann unsere Augen, Nase oder Mund berühren, können die Keime in unseren Körper gelangen.',
        'essen': 'Wenn wir unsere Trinkflasche oder unser Essen mit anderen teilen, können Keime von einem Mund zum anderen hüpfen. Das ist wie ein Keim-Taxi direkt in den Körper!',
        'immunsystem': 'Unser Körper hat eine tolle Armee, die uns beschützt! Diese Armee besteht aus weißen Blutzellen wie Wuschel. Sie sind wie kleine Superhelden, die durch unseren Körper reisen und nach bösen Keimen suchen.',
        'haendewaschen': 'Wasche deine Hände mit Seife und Wasser, besonders vor dem Essen und nach dem Toilettengang. Zähle dabei bis 20 oder singe zweimal "Alle meine Entchen" - so lange solltest du deine Hände waschen!',
        'husten': 'Huste und niese immer in deine Armbeuge, nicht in deine Hand! So können die Keime nicht auf deine Hände und dann auf Spielzeug oder andere Kinder gelangen. Das ist wie ein Keim-Gefängnis in deinem Ärmel!',
        'obst': 'Iss viel Obst und Gemüse! Sie enthalten Vitamine, die Wuschel und seine Freunde stärker machen. Auch genug Schlaf hilft deiner Körperarmee, stark zu bleiben und gegen Keime zu kämpfen.',
        'game-catch': 'Fang die Keime! Tippe schnell auf die hüpfenden Keime, bevor sie sich verbreiten können! Je mehr Keime du fängst, desto mehr Punkte bekommst du. Aber sei schnell, die Zeit läuft!',
        'game-wash': 'Hände waschen Challenge! Ziehe die Seife über deine Hände, um alle Schmutzflecken zu entfernen! Versuche, alle Keime abzuwaschen, bevor die Zeit abläuft. Saubere Hände halten dich gesund!',
        'game-defense': 'Immun-Abwehr! Hilf Wuschel, die Keime zu fangen! Bewege Wuschel mit den Pfeiltasten und fange so viele Keime wie möglich. Du kannst auch mit einem Freund zusammen spielen!'
    };
    
    // Audio-Objekt für die Wiedergabe
    let currentAudio = null;
    
    // Event-Listener für Audio-Trigger
    audioTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Nur abspielen, wenn Audio aktiviert ist
            if (window.isAudioEnabled && window.isAudioEnabled()) {
                const audioId = this.getAttribute('data-audio');
                playAudio(audioId);
                
                // Visuelles Feedback für den Button
                this.classList.add('audio-active');
                setTimeout(() => {
                    this.classList.remove('audio-active');
                }, 300);
            }
        });
    });
    
    // Funktion zum Abspielen von Audio
    function playAudio(audioId) {
        // Wenn bereits Audio abgespielt wird, stoppen
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        
        // Neues Audio erstellen und abspielen
        if (audioFiles[audioId]) {
            currentAudio = new Audio(audioFiles[audioId]);
            
            // Fallback: Wenn keine Audio-Datei vorhanden ist, Text-to-Speech verwenden
            currentAudio.onerror = function() {
                if ('speechSynthesis' in window && audioTexts[audioId]) {
                    const utterance = new SpeechSynthesisUtterance(audioTexts[audioId]);
                    utterance.lang = 'de-DE';
                    utterance.rate = 0.9; // Etwas langsamer für Kinder
                    speechSynthesis.speak(utterance);
                }
            };
            
            currentAudio.play();
        } else if ('speechSynthesis' in window && audioTexts[audioId]) {
            // Direkt Text-to-Speech verwenden, wenn keine Audio-Datei definiert ist
            const utterance = new SpeechSynthesisUtterance(audioTexts[audioId]);
            utterance.lang = 'de-DE';
            utterance.rate = 0.9; // Etwas langsamer für Kinder
            speechSynthesis.speak(utterance);
        }
    }
    
    // Globale Funktion zum Aktualisieren des Audio-Status
    window.updateAudioStatus = function(enabled) {
        // Wenn Audio deaktiviert wird, laufendes Audio stoppen
        if (!enabled && currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
        
        // Auch Text-to-Speech stoppen
        if (!enabled && 'speechSynthesis' in window) {
            speechSynthesis.cancel();
        }
    };
    
    // Globale Funktion zum Abspielen von Soundeffekten
    window.playSoundEffect = function(soundName) {
        // Nur abspielen, wenn Audio aktiviert ist
        if (window.isAudioEnabled && window.isAudioEnabled()) {
            if (soundEffects[soundName]) {
                const sound = new Audio(soundEffects[soundName]);
                sound.play();
            }
        }
    };
    
    // Automatisches Abspielen der Begrüßung beim ersten Laden
    setTimeout(() => {
        if (window.isAudioEnabled && window.isAudioEnabled()) {
            playAudio('intro');
        }
    }, 1000);
});
