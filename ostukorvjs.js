const ostukorv = {
    tooted: [
        { nimi: "porgand", hind: 7, kogus: 7 },
        { nimi: "kapsas", hind: 6, kogus: 72 },
        { nimi: "maasikas", hind: 5, kogus: 27 },
    ],
};

function uuendaOstukorvi() {
    const ostukorviElement = document.getElementById("ostukorv");
    ostukorviElement.innerHTML = "";

    ostukorv.tooted.forEach((toode) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`;
        ostukorviElement.appendChild(listItem);
    });

    document.getElementById("summa").textContent = `Ostukorvi summa: ${koguSumma()} EUR`;
}

function koguSumma() {
    let summa = 0;
    for (const toode of ostukorv.tooted) {
        summa += toode.hind * toode.kogus;
    }
    return summa;
}

function lisaToode(nimi, hind, kogus) {
    ostukorv.tooted.push({ nimi, hind, kogus });
    uuendaOstukorvi();
}


document.getElementById("lisaToodeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const nimi = document.getElementById("nimi").value;
    const hind = parseFloat(document.getElementById("hind").value);
    const kogus = parseInt(document.getElementById("kogus").value);
    if (!isNaN(hind) && !isNaN(kogus)) {
        lisaToode(nimi, hind, kogus);
    }
});

uuendaOstukorvi();