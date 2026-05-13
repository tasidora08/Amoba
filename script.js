let amobaHossza = 3;
function Ertek(){
    let meret = document.getElementById("meret").value;
    document.getElementById("szam").innerText = meret;
}

function Feltolt(){
    let meret = document.getElementById("meret").value;
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${meret}, 50px)`;
    for(let i = 0; i < meret; i++){
        for(let j = 0; j < meret; j++){
            let div = document.createElement("div");
            div.className = "mezo";
            div.style.borderLeft = "4px solid black";
            div.style.borderRight = "4px solid black";
            div.onclick = function(){
                if(div.innerText != ""){
                    return;
                }
                let valasztott =
                document.querySelector('input[name="jel"]:checked').value;
                div.innerText = valasztott;
                Ellenoriz();
                if (VanAmoba()) {
                    alert("Amőba van! Játék vége!");
                }
            }
            container.appendChild(div);
        }
    }
}

function Ellenoriz(){
    let mezok = document.querySelectorAll(".mezo");
    for(let mezo of mezok){
        if(mezo.innerText != ""){
            continue;
        }
    }
}

function VanAmoba() {
    const meret = document.getElementById('meret').value;
    const jatekter = document.getElementById('div');
    const tabla = [];
    for (let sorIndex = 0; sorIndex < meret; sorIndex++) {
        const sor = [];
        // Végigiterálunk a sor minden celláján, és meghatározzuk, hogy milyen jel van benne (X, O vagy üres)
        for (let oszlopIndex = 0; oszlopIndex < meret; oszlopIndex++) {
            const cella = jatekter.children[sorIndex].children[oszlopIndex];
            
            if (cella.children.length > 0) {
                sor.push(cella.children[0].src.substr(-5, 1));  // Ha van gyerek elem, akkor a fájlnév első karaktere ( 'X' vagy 'O') alapján tároljuk a jelet
            } else {
                sor.push("");
            }
        }
        tabla.push(sor);  // A sorokat hozzáadjuk a táblához
    }

    return vanAmobaSor(tabla) || vanAmobaOszlop(tabla) || vanAmobaAtlo(tabla);
}

//
function vanAmobaSor(tabla) {
    //Amőba van, ha van olyan sor, amelyben folytonosan AMOBA_HOSSZA számú azonos jel van
    for (let sorIndex = 0; sorIndex < tabla.length; sorIndex++) {
        let jelSzamlalo = 1;
        for (let oszlopIndex = 1; oszlopIndex < tabla[sorIndex].length; oszlopIndex++) {
            // Ellenőrizzük, hogy a jelenlegi cella nem üres-e, és megegyezik-e az előző cellával
            if (tabla[sorIndex][oszlopIndex] !== "" && tabla[sorIndex][oszlopIndex] === tabla[sorIndex][oszlopIndex - 1]) {
                jelSzamlalo++;
                if (jelSzamlalo === amobaHossza) {
                    return true;
                }
            } else {
                jelSzamlalo = 1;
            }
        }
    }
    return false;
}

function vanAmobaOszlop(tabla) {
    //Amőba van, ha van olyan oszlop, amelyben folytonosan AMOBA_HOSSZA számú azonos jel van
    for (let oszlopIndex = 0; oszlopIndex < tabla[0].length; oszlopIndex++) {
        let jelSzamlalo = 1;
        for (let sorIndex = 1; sorIndex < tabla.length; sorIndex++) {
            if (tabla[sorIndex][oszlopIndex] !== "" && tabla[sorIndex][oszlopIndex] === tabla[sorIndex - 1][oszlopIndex]) {
                jelSzamlalo++;
                if (jelSzamlalo === amobaHossza) {
                    return true;
                }
            } else {
                jelSzamlalo = 1;
            }
        }
    }
    return false;
}

// Még nem teljesen kész! Csak az egyik átló ellenőrzése van megírva, a másik átló ellenőrzése még hátravan!
function vanAmobaAtlo(tabla) {
    // Amőba van, ha van olyan átló, amelyben folytonosan AMOBA_HOSSZA számú azonos jel van
    let jelSzamlalo1 = 1;
    let jelSzamlalo2 = 1;
    for (let i = 1; i < tabla.length; i++) {
        if (tabla[i][i] !== "" && tabla[i][i] === tabla[i - 1][i - 1]) {
            jelSzamlalo1++;
            if (jelSzamlalo1 === amobaHossza) {
                return true;
            }
        } else {
            jelSzamlalo1 = 1;
        }
        if (tabla[i][tabla.length - 1 - i] !== "" && tabla[i][tabla.length - 1 - i] === tabla[i - 1][tabla.length - i]) {
            jelSzamlalo2++;
            if (jelSzamlalo2 === amobaHossza) {
                return true;
            }
        } else {
            jelSzamlalo2 = 1;
        }
    }
    return false;
}

/*function Amoba(container){
    const amobaHossz = 3;
    for (let i = 0; i < meret; i++) {

    }
}*/