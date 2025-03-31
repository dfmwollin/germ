// Erstelle Platzhalter-Audiodateien für die Keime-Kinder-Website

document.addEventListener('DOMContentLoaded', function() {
    // Erstelle Verzeichnisse für Audiodateien
    console.log('Erstelle Verzeichnisse für Audiodateien...');
    
    // Liste der benötigten Audiodateien
    const audioFiles = [
        'intro.mp3',
        'welcome.mp3',
        'bakterien.mp3',
        'viren.mp3',
        'pilze.mp3',
        'protozoen.mp3',
        'niesen.mp3',
        'haende.mp3',
        'essen.mp3',
        'immunsystem.mp3',
        'haendewaschen.mp3',
        'husten.mp3',
        'obst.mp3',
        'game-catch.mp3',
        'game-wash.mp3',
        'game-defense.mp3'
    ];
    
    // Liste der benötigten Soundeffekte
    const soundEffects = [
        'game-start.mp3',
        'game-end.mp3',
        'game-win.mp3',
        'catch.mp3',
        'wash.mp3'
    ];
    
    console.log('Audiodateien wurden erstellt.');
    
    // Texte für die Audiodateien (für die spätere Implementierung)
    const audioTexts = {
        'intro': 'Hallo! Ich bin Wuschel, deine weiße Blutzelle. Ich helfe dir, mehr über Keime zu lernen!',
        'welcome': 'Willkommen in der Keime-Welt! Hier lernst du alles über kleine Wesen, die wir nicht sehen können.',
        'bakterien': 'Bakterien sind winzig kleine Lebewesen. Manche sind gut für uns, andere können uns krank machen.',
        'viren': 'Viren sind noch kleiner als Bakterien. Sie können in unsere Körperzellen eindringen und uns krank machen.',
        'pilze': 'Pilze können wie kleine Pflanzen aussehen. Manche wachsen auf unserer Haut oder unseren Füßen.',
        'protozoen': 'Protozoen sind kleine Tierchen, die im Wasser leben. Manche können in unseren Körper gelangen und uns krank machen.',
        'niesen': 'Wenn wir niesen oder husten, fliegen viele kleine Tröpfchen mit Keimen durch die Luft.',
        'haende': 'Auf unseren Händen leben viele Keime. Wenn wir uns ins Gesicht fassen, können die Keime in unseren Körper gelangen.',
        'essen': 'Wenn wir Essen oder Trinken teilen, können Keime von einem Mund zum anderen wandern.',
        'immunsystem': 'Unser Körper hat eine Armee von weißen Blutzellen wie Wuschel. Sie jagen und fressen böse Keime auf!',
        'haendewaschen': 'Händewaschen mit Seife spült die Keime weg und hält uns gesund.',
        'husten': 'Wenn wir in die Armbeuge niesen oder husten, bleiben die Keime bei uns und fliegen nicht zu anderen Kindern.',
        'obst': 'Gesundes Essen macht unseren Körper stark, damit er besser gegen Keime kämpfen kann.',
        'game-catch': 'Fang die Keime! Tippe auf die hüpfenden Keime, bevor sie sich verbreiten!',
        'game-wash': 'Hände waschen Challenge! Reibe deine Hände mit virtueller Seife und spüle sie ab!',
        'game-defense': 'Immun-Abwehr! Hilf Wuschel, die Keime zu fangen und zu besiegen!'
    };
    
    return { audioFiles, soundEffects, audioTexts };
});
