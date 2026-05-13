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
            div.onclick = function(){
                if(div.innerText != ""){
                    return;
                }
                let valasztott =
                document.querySelector('input[name="jel"]:checked').value;
                div.innerText = valasztott;
                Ellenoriz();
            }
            container.appendChild(div);
        }
    }
}

function Ellenoriz(){
    let mezok = document.querySelectorAll(".mezo");
    for(let mezo of mezok){
        if(mezo.innerText != ""){
            document.getElementById("uzenet").innerText =
            "Van már lerakott jel!";
        }
    }
}