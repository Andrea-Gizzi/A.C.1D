let cells = [];
let ruleValue;
let ruleSet;
let w = 10;
let y = 0;
let color;

function setup() {
    createCanvas(windowWidth, windowHeight-80);    
    const possibleValues = [18, 22, 26, 28, 30, 45, 50, 54, 57, 58, 60, 62, 73, 75, 70, 78, 82, 86, 89, 90, 92, 94, 99, 101, 102, 105, 107, 109, 110, 114, 118, 122, 124, 126, 129, 131, 133, 135, 137, 141, 145, 146, 147, 149, 150, 153, 154, 156, 158, 161, 163, 165, 167, 177, 178, 179, 181, 182, 186, 188, 190, 193, 195, 197, 198, 199, 210, 214, 218, 222, 220, 230, 242, 246, 250, 254];
    const randomIndex = Math.floor(Math.random() * possibleValues.length);
    const ruleValue = possibleValues[randomIndex];
    ruleSet = ruleValue.toString(2).padStart(8, "0");
    
    console.log(ruleSet);
    resize()
    background(255);
}

function resize(){
    let total = width / w;
    for (let i = 0; i < total; i++) {
        cells[i] = 0;
    }
    cells[floor(total / 2)] = 1;
    // console.log(cells)
}

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
    // console.log(cells)
}

function calculateState(a, b, c) {
    let neighborhood = '' + a + b + c;
    let value = 7 - parseInt(neighborhood, 2);
    return parseInt(ruleSet[value]);

    //if (a == 1 && b == 1 && c == 1) return 1;
    //if (a == 1 && b == 1 && c == 0) return 0;
    //if (a == 1 && b == 0 && c == 1) return 1;
    //if (a == 1 && b == 0 && c == 0) return 1;
    //if (a == 0 && b == 1 && c == 1) return 0;
    //if (a == 0 && b == 1 && c == 0) return 1;
    //if (a == 0 && b == 0 && c == 1) return 1;
    //if (a == 0 && b == 0 && c == 0) return 0;

}

function scrollToTitle() {
    let titoloElement = document.getElementById("titolo");
    let yOffset = -80; // Imposta l'offset verticale desiderato
    let y = titoloElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

window.onload = function() {
    let button = document.getElementById('algortimoButton');
    let title = document.getElementById('titolo');

    window.addEventListener('scroll', function() {
        let titlePosition = title.getBoundingClientRect().bottom;
        let scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition >= titlePosition) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
};

function windowResized() {
    resizeCanvas(windowWidth, windowHeight-80);
    // resize();

    console.log(color)
  }