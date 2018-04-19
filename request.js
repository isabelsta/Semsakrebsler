//Weine ausgeben
function showWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var json = JSON.parse(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            for (var i = 0; i < json.list.length; i++) {
                document.getElementById("name").innerHTML = json.list[i].Name + ", " + json.list[i].Jahrgang;
                document.getElementById("jahr").innerHTML = json.list[i].Region + ", " + json.list[i].Land + ", " + json.list[i].Lage;
                document.getElementById("ekpreis").value = json.list[i].Kaufpreis;
                document.getElementById("vkpreis").value = json.list[i].Verkaufspreis;
                document.getElementById("stück").value = json.list[i].Anzahl;
            }
        }
    };
    xhttp.open("GET", "http://localhost:8080/rest/api/getWines", true);
    xhttp.send();
}

//Lieferanten ausgeben
function showLieferanten() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        var json = JSON.parse(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            for (var i = 0; i < json.list.length; i++) {
                document.getElementById("name").innerHTML = json.list[i].Name + ", " + json.list[i].Ort;
                document.getElementById("info").innerHTML = json.list[i].Telefonnummer;
            }
        }
    };
    xhttp.open("GET", "http://localhost:8080/rest/api/getSuppliers", true);
    xhttp.send();
}

//neuen Wein anlegen
function newWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//Wein einkaufen
function buyWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//Wein verkaufen
function sellWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//iFrame anzeigen
function show() {
    var iframe1 = document.getElementById("iframe");
    iframe1.style.display = 'block';
}

//iFrame zum Verkaufen anzeigen
function showVer() {
    var iframe1 = document.getElementById("iframeVer");
    iframe1.style.display = 'block';
}

//iFrame zum Einkaufen anzeigen
function showEin() {
    var iframe1 = document.getElementById("iframeEin");
    iframe1.style.display = 'block';
}

//iFrame zum Kunden auswählen anzeigen
function select() {
    var iframe1 = document.getElementById("iframeVer");
    iframe1.style.display = 'none';
    var iframe1 = document.getElementById("iframeKunde");
    iframe1.style.display = 'block';
}