function Ertek(){
    let kiir = document.getElementById("meret").value;
    let hova = document.getElementById("szam");
    hova.innerText = kiir;
}

function Feltolt(){
    let meret = document.getElementById("meret").value;
    let bele = document.getElementById("container");
    bele.innerText = '';
    for (i = 0; i < meret; i++){
        let sor = document.createElement("div");
        for (j = 0; j < meret; j++){
            let kulon = document.createElement("div");
            sor.appendChild(kulon);
        }
        bele.appendChild(sor);
    }
}

function Lerak(){
    let radioV = document.getElementById("mi");
    let div = document.querySelector("div");
    if (radioV == "X") {
        div.innerText = "X";
    }
    if (radioV == "O") {
        div.innerText = "O";
    }
}