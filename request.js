//Weine ausgeben
function showWine() {
    var xhttp = new XMLHttpRequest();
    var i, txt="";
    xhttp.onreadystatechange = function () {
        var json = JSON.parse(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            for (i in json.list) {
                txt += "<div class='row'><div class='col-md-4'><h4>" + json.list[i].Name + ", " + json.list[i].Jahrgang + "</h4>"
                + "<h4 style='opacity: .7'>" + json.list[i].Region + ", " + json.list[i].Land + ", " + json.list[i].Lage
                + "</h4></div>" + "<div class='col-md-2'><input class='center-block' size='4' value='"+json.list[i].Kaufpreis+"'></div>"
                + "<div class='col-md-2'><input class='center-block' size='4' value='"+json.list[i].Verkaufspreis+"'></div>"
                + "<div class='col-md-2'><input class='center-block' size='4' value='"+json.list[i].Anzahl+"'></div>"
                + "<div class='icons col-md-2'><span class='glyphicon glyphicon-edit'></span><span class='glyphicon glyphicon-trash'></span></div></div>";
            }
            document.getElementById("infos").innerHTML = txt;
        }
    };
    xhttp.open("GET", "http://localhost:8080/rest/api/getWines", true);
    xhttp.send();
}

//Lieferanten ausgeben
function showLieferanten() {
    var xhttp = new XMLHttpRequest();
    var i, txt="";
    xhttp.onreadystatechange = function () {
        var json = JSON.parse(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            for (i in json.list) {
                txt += "<div class='row'><div class='col-md-10'><h4>" + json.list[i].Name + ", " + json.list[i].Ort + "</h4>"
                + "<h4 style='opacity: .7'>" + json.list[i].Telefonnummer + "</h4></div>"
                + "<div class='icons col-md-2'><span class='glyphicon glyphicon-edit'></span><span class='glyphicon glyphicon-trash'></span></div></div>";
            }
            document.getElementById("infos").innerHTML = txt;
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