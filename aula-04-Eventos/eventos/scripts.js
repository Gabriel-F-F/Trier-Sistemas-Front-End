function alerta() {
    alert("ALERTA!");
}

function loga() {
    console.log("LOGA");
}

function teste(event) {
    console.log(event)
    console.log("submit")
    event.preventDefault();

    console.log(document);
}