let categoria = '';

run()
async function run() {
    let data;

    await fetch("./assets/data/dati.json")
        .then(function(r) { return r.json() })
        .then(json => {
            data = json;
    });


     //CATEGORIE
    let categorie = [];
    for (let i = 0; i < data.length; i++) {
        if (!categorie.includes(data[i][categoria])) {
            categorie.push(data[i][categoria]);
        }
    }

    console.log(categorie);

    let cats = "";
    categorie.sort();
    for (let i = 0; i < categorie.length; i++) {
        cats += "<div class='categoria' id='" + categorie[i] + "'></div>";
    }

    document.querySelector('main').innerHTML = cats;
    

    //METADATI
    for (let i = 0; i < data.length; i++) {
        let container = document.getElementById(data[i][categoria]);
        let output = "";
        output += "<div class='info'>";
        output += "<div class='metadata'>";
        output += "<span>" + data[i].binary_code + "</span>";
        output += "<span>" + data[i].rule + "</span>";
        output += "<img src='../regole/assets/imgs/" + data[i].file + ".png'>";
        output += "</div>";
        output += "</div>";
        container.innerHTML += output;
    }
}


//CATEGORIA STANDARD PAGINA
window.onload = function() {
    document.getElementById('ruleButton').classList.add('active');
};
