let balElem = document.getElementById("bal");

balElem.innerHTML = "<h2>Bal part</h2><p><img src='kepek/kecske2.png' id='kecske' class='szereplok' alt='kecske'><img id='kaposzta' src='kepek/kaposzta.png' class='szereplok' alt='kaposzta'><img id='farkas' src='kepek/farkas.png' class='szereplok' alt='farkas'></p>";

let jobbElem = document.getElementById("jobb");
let balGomb = document.getElementById("balra");
let jobbGomb = document.getElementById("jobbra");
let csonak = document.getElementById("csonak");

let tomb = [];

document.querySelector("footer p").innerHTML = "Ponauer Maja";

let kepek = document.getElementsByClassName("szereplok");

for (let i = 0; i < kepek.length; i++) {

    kepek[i].addEventListener("mouseover", function () {
        kepek[i].classList.add("kiemel");
    });

    kepek[i].addEventListener("mouseout", function () {
        kepek[i].classList.remove("kiemel");
    });

    kepek[i].addEventListener("click", function (event) {

        tomb.push(event.target.src);
        console.log(tomb);

        if (csonak.children.length > 0) {
            alert("A csónakban egyszerre csak egy elem lehet!");
            return;
        }

        csonak.appendChild(event.target);
    });
}

jobbGomb.addEventListener("click", function () {

    if (csonak.children.length === 0) {
        alert("Nincs semmi a csónakban!");
        return;
    }

    let kep = csonak.children[0];
    jobbElem.querySelector("p").appendChild(kep);

    ellenorzes();
});

balGomb.addEventListener("click", function () {

    if (csonak.children.length === 0) {
        alert("Nincs semmi a csónakban!");
        return;
    }

    let kep = csonak.children[0];
    balElem.querySelector("p").appendChild(kep);

    ellenorzes();
});

function ellenorzes() {
    let balKepek = balElem.querySelectorAll("img");
    let jobbKepek = jobbElem.querySelectorAll("img");

    let balAltok = [];
    let jobbAltok = [];

    for (let i = 0; i < balKepek.length; i++) {
        balAltok.push(balKepek[i].alt);
    }

    for (let i = 0; i < jobbKepek.length; i++) {
        jobbAltok.push(jobbKepek[i].alt);
    }

    if (balAltok.includes("farkas") && balAltok.includes("kecske")) {
        alert("A farkas megeszi a kecskét!");
    }

    if (balAltok.includes("kecske") && balAltok.includes("kaposzta")) {
        alert("A kecske megeszi a káposztát!");
    }

    if (jobbAltok.includes("farkas") && jobbAltok.includes("kecske")) {
        alert("A farkas megeszi a kecskét!");
    }

    if (jobbAltok.includes("kecske") && jobbAltok.includes("kaposzta")) {
        alert("A kecske megeszi a káposztát!");
    }
}