// Variabili globali
let categoria = '';

run()
async function run() {
    let data;
 
    // Caricamento dati JSON
    await fetch("./assets/data/dati.json")
        .then(function(r) { return r.json() })
        .then(json => {
            data = json;
    });

    // Creazione categorie
    let categorie = [];
    for (let i = 0; i < data.length; i++) {
        if (!categorie.includes(data[i][categoria])) {
            categorie.push(data[i][categoria]);
        }
    }

    let cats = "";
    categorie.sort();
    for (let i = 0; i < categorie.length; i++) {
        cats += "<div class='categoria' id='" + categorie[i] + "'></div>";
    }

    document.querySelector('main').innerHTML = cats;
    
    // Creazione metadati
    for (let i = 0; i < data.length; i++) {
        let container = document.getElementById(data[i][categoria]);
        let output = "";
        output += "<div class='info'>";
        output += "<div class='metadata'>";
        output += "<div class='code'>" + data[i].rule + " / " + data[i].binary_code + "</div>";
        output += "<span>" + data[i].rule + "</span>";
        output += "<img src='../regole/assets/imgs/" + data[i].file + ".png'>";
        output += "</div>";
        output += "</div>";
        container.innerHTML += output;
    }
}


// Caricamento della finestra
window.onload = function() {
    document.getElementById('ruleButton').classList.add('active');
};
