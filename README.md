SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato: Intermedio

# A.C.1D
Autore: Gizzi Andrea  
[A.C.1D](https://andrea-gizzi.github.io/A.C.1D/)

## Introduzione e tema
La consegna consisteva nella realizzazione di una pagina web che mostri come ha avuto origine e come funziona un algoritmo.

Nel mio caso, ho sviluppato un'interfaccia web interattiva che mostrasse la funzionalità e l'origine  dell'automa cellulare 1D. Dopo aver fatto una ricerca approfondita sull'algoritmo, attraverso articoli online ho potutto comprendere le informazioni necessarie ponendomi come obiettivo principale spiegare l'algoritmo in modo chiaro e intuitivo utilizzando testi esplicativi, interazioni e elementi visivi. L'interfaccia permette all'utente di navigare e approfondire attraverso tre diverse sezioni: la spiegazione dell'algoritmo, la sua storia e le regole che lo definiscono.

## Riferimenti progettuali
Nel progetto, non mi sono orientato su un modello specifico come riferimento progettuale; piuttosto, ho dedicato tempo a riflettere e approfondire su come inserire i diversi contenuti in modo chiaro e facilemnte comprensibile seguendo le loro esigenze di impaginazione. L'aspetto principale è stato selezionare un approccio visivo che valorizzasse ogni singolo contenuto in base alla ricerca in corso, rendendolo funzionale e facilmente leggibile.

## Design dell’interfraccia e modalià di interazione
Il design dell'interfaccia risulta semplice, tutte le scelte sono state effettuate per aumentare l'interazione dell'utente, attraverso una buona ergonomia e un buon senso d'orientamento. L'interfaccia presenta una struttura uniforme in tutte le sue pagine:

- Header: situato nella parte superiore, include bottoni intuitivi per la navigazione e per il ritorno alla pagina principale del corso.
- Contenuti: centralizzati al centro della pagina, rendendo facile l'accesso e la comprensione dei materiali informativi.
- Footer: collocato nella parte inferiore, contiene informazioni sul corso, il nome dell'interfaccia e tutta la sitografia.

L'interfaccia supporta diverse modalità di interazione a seconda della pagina selezionata:

- Home: utilizza un'animazione dell'algoritmo per guidare l'utente nello sviluppo della pagina, arricchita da testi alternati con illustrazioni e immagini.
- Storia-Algoritmo: utilizza testi alternati con illustrazioni, immagini e gif per approfondire i contenuti trattati.
- Regole: raccoglie tutte le regole che influenzano l'algoritmo, rendendole interattive mediante effetti di hover per evidenziarle e mostrare il relativo codice binario.

Questa struttura uniforme e le modalità di interazione differenziate contribuiscono a rendere l'interfaccia accattivante e accessibile, promuovendo una navigazione chiara e informativa per gli utenti.


## Tecnologia usata
L'intero sito è strutturato sull'automa cellulare, un concetto matematico che genera pattern complessi da regole semplici. Nella pagina principale, l'algoritmo viene generato in modo visuale per creare un impatto immediato e guidare l'utente attraverso il flusso. La sua struttura piramidale e l'estetica accattivante contribuiscono a rendere l'esperienza più intuitiva e coinvolgente. Questo approccio non solo evidenzia l'aspetto educativo dell'algoritmo, ma anche il suo potenziale estetico nel contesto dell'interfaccia utente.

Setup:
```JavaScript
// Variabili globali
let cells = [];
let ruleValue;
let ruleSet;
let w = 10;
let y = 0;
let color;

// Setup canvas
function setup() {
    createCanvas(windowWidth, windowHeight-80);    
    const possibleValues = [18, 22, 26, 28, 30, 45, 50, 54, 57, 58, 60, 62, 73, 75, 70, 78, 82, 86, 89, 90, 92, 94, 99, 101, 102, 105, 107, 109, 110, 114, 118, 122, 124, 126, 146, 150, 154, 156, 158, 178, 182, 186, 188, 190, 198, 210, 214, 218, 222, 220, 230, 242, 246, 250, 254];
    const randomIndex = Math.floor(Math.random() * possibleValues.length);
    const ruleValue = possibleValues[randomIndex];
    ruleSet = ruleValue.toString(2).padStart(8, "0");
    
    console.log(ruleSet);
    resize()
    background(255);
}
```
Calcolo:
```JavaScript
// Inizializzazione array
function resize(){
    let total = width / w;
    for (let i = 0; i < total; i++) {
        cells[i] = 0;
    }
    cells[floor(total / 2)] = 1;
}

// Creazione celle
function draw() {
    
    for (let i = 0; i < cells.length; i++) {
        let x = i * w;
        noStroke();
        color = 255 - cells[i] * 40
        fill(color);
        square(x, y, w);
    }

    y += w;
    let nextCells = [];
    let len = cells.length;
    for (let i = 0; i < cells.length; i++) {
        let left = cells[(i - 1 + len) % len];
        let right = cells[(i + 1 + len) % len];
        let state = cells[i];
        let newState = calculateState(left, state, right);
        nextCells[i] = newState;
    }

    cells = nextCells;
}

// Stato cella
function calculateState(a, b, c) {
    let neighborhood = '' + a + b + c;
    let value = 7 - parseInt(neighborhood, 2);
    return parseInt(ruleSet[value]);
}
```

## Target e contesto d’uso
L'interfaccia è stata ideata originariamente come parte di una ricerca personale sull'Automa Cellulare 1D, ma si è evoluta per soddisfare le esigenze di una variegata gamma di utenti. È particolarmente adatta per professionisti e appassionati di informatica e matematica che utilizzano l'algoritmo per calcoli specifici, nonché per scienziati che studiano modelli complessi. Inoltre, è progettata per attrarre anche chi è semplicemente incuriosito dall'estetica e dalla dinamica dell'Automa Cellulare.
