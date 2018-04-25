//Formular in JSON
function toJSONString(form) {
    var obj = {};
    var elements = form.querySelectorAll("input, select, textarea");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;
        if (name) {
            obj[name] = value;
        }
    }
    return JSON.stringify(obj);
}

function JSONkunde() {
    var kunde = document.getElementById("kunde");
    kunde.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:8080/rest/api", true);
        xhttp.send();
    }, false);
}

function JSONlieferant() {
    var lieferant = document.getElementById("lieferant");
    lieferant.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        var name = document.getElementById("Name");
        var phone = document.getElementById("Telefon");
        var region = document.getElementById("Ort");
        var street = document.getElementById("Strasse");
        var Plz = document.getElementById("PLZ");
        var hnum = document.getElementById("Hausnummer");
        xhttp.open("GET", "http://localhost:8080/rest/api/addSupplier/name/phone/street/region/Plz/hnum", true);
        xhttp.send();
    }, false);
}

function JSONneuerWein() {
    var wein = document.getElementById("neuerwein");
    var json = toJSONString(wein);
    var xhttp = new XMLHttpRequest();
    var Bezeichnung = document.getElementById("Bezeichnung");
    var Jahr = document.getElementById("Jahr");
    var Region = document.getElementById("Region");
    var Lage = document.getElementById("Lage");
    var Herkunftsland = document.getElementById("Herkunftsland");
    var Anzahl = document.getElementById("Anzahl");
    var Einkauf = document.getElementById("Einkauf");
    var Verkauf = document.getElementById("Verkauf");
    xhttp.open("GET", "http://localhost:8080/rest/api/addWine/Bezeichnung/Jahr/Region/Lage/Herkunftsland/Anzahl/1/Einkauf/Verkauf", true);
    xhttp.send();
}

function JSONeinkaufen() {
    var einkaufen = document.getElementById("einkaufen");
    einkaufen.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:8080/rest/api", true);
        xhttp.send();
    }, false);
}

function JSONverkaufen() {
    var verkaufen = document.getElementById("verkaufen");
    verkaufen.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:8080/rest/api", true);
        xhttp.send();
    }, false);
}

//Weine ausgeben
function showWine() {
        var xhttp = new XMLHttpRequest();
        var i, txt = "";
        xhttp.onreadystatechange = function () {
            var json = JSON.parse(this.responseText);
            if (this.readyState == 4 && this.status == 200) {
                for (i in json.list) {
                    txt += "<div class='row'><div class='col-md-4'><h4>" + json.list[i].Name + ", " + json.list[i].Jahrgang + "</h4>"
                        + "<h4 style='opacity: .7'>" + json.list[i].Region + ", " + json.list[i].Land + ", " + json.list[i].Lage
                        + "</h4></div>" + "<div class='col-md-2'><input class='center-block' size='4' value='" + json.list[i].Kaufpreis + "'></div>"
                        + "<div class='col-md-2'><input class='center-block' size='4' value='" + json.list[i].Verkaufspreis + "'></div>"
                        + "<div class='col-md-2'><input class='center-block' size='4' value='" + json.list[i].Anzahl + "'></div>"
                        + "<div class='icons col-md-2'><span onclick='editWine()' class='glyphicon glyphicon-edit'></span>"
                        + "<div id='modal1' class='modal'>"
                        + "<div class='modal-content'>"
                          + " <span class='close'>&times;</span><p><form id='neuerwein' action='#' method='post'>"
                          + "<h1>Wein bearbeiten</h1><table><td><tr><td><input id='Bezeichnung' type='text' placeholder="+json.list[i].Name+"></td></tr>"
                          + "<tr><td><input id='Jahr' type='text' placeholder="+json.list[i].Jahr+"></td></tr>"
                          + "<tr><td><input id='Herkunftsland' type='text' placeholder="+json.list[i].Land+"></td></tr>"
                          + "<tr><td><input id='Region' type='text' placeholder="+json.list[i].Region+"></td></tr>"
                          + "<tr><td><input id='Lage' type='text' placeholder="+json.list[i].Lage+"></td></tr>"
                          + "<tr><td><input id='Einkauf' type='text' placeholder="+json.list[i].Kaufpreis+"></td></tr>"
                          + "<tr><td><input id='Verkauf' type='text' placeholder="+json.list[i].Verkaufspreis+"></td></tr>"
                          + "<tr><td><input id='Anzahl' type='text' placeholder="+json.list[i].Anzahl+"></td></tr>"
                          + "<tr><td><select id='Lieferant' type='text' placeholder='Lieferant' style=' width: -webkit-fill-available;'>"
                          + "<option>lieferant1</option><option>lieferant2</option><option>lieferant3</option></select>"
                          + "</td></tr></tr><tr><td><input onclick='JSONneuerWein()' id='Speichern' type='submit' value='Speichern'></td>"
                          + "</tr></table></form></p></div></div>"
                          + "<script>var modal = document.getElementById('modal1');"
                          + "var btn = document.getElementById('button1');"
                          + "var span = document.getElementsByClassName('close')[0];"
                          + "btn.onclick = function () { modal.style.display = 'block'; }"
                          + "span.onclick = function () { modal.style.display = 'none'; }"
                          + "</script><span onclick='deleteWine()' class='glyphicon glyphicon-trash'></span></div></div>"
                }
                document.getElementById("infos").innerHTML = txt;
            }
        };
        xhttp.open("GET", "http://localhost:8080/rest/api/getWines", true);
        xhttp.send();
    }

//Wein beim Verkaufen anzeigen
function selectWine() {
        var xhttp = new XMLHttpRequest();
        var i, txt = "";
        xhttp.onreadystatechange = function () {
            var json = JSON.parse(this.responseText);
            txt += "<option value='' disabled selected>Wein auswählen</option>";
            if (this.readyState == 4 && this.status == 200) {
                for (i in json.list) {
                    txt += "<option value='Option " + i + "'>" + json.list[i].Name + "</option>";
                }
                document.getElementById("Wein").innerHTML = txt;
            }
        };
        xhttp.open("GET", "http://localhost:8080/rest/api/getWines", true);
        xhttp.send();
    }

//Lieferanten ausgeben
function showLieferanten() {
        var xhttp = new XMLHttpRequest();
        var i, txt = "";
        xhttp.onreadystatechange = function () {
            var json = JSON.parse(this.responseText);
            if (this.readyState == 4 && this.status == 200) {
                for (i in json.list) {
                    txt += "<div class='row'><div class='col-md-10'><h4>" + json.list[i].Name + ", " + json.list[i].Ort + "</h4>"
                        + "<h4 style='opacity: .7'>" + json.list[i].Telefonnummer + "</h4></div>"
                        + "<div class='icons col-md-2'><span onclick='editSupplier()' class='glyphicon glyphicon-edit'></span><span onclick='deleteSupplier()' class='glyphicon glyphicon-trash'></span></div></div>";
                }
                document.getElementById("infos").innerHTML = txt;
            }
        };
        xhttp.open("GET", "http://localhost:8080/rest/api/getSuppliers", true);
        xhttp.send();
    }

function editWine(){
    var xhttp = new XMLHttpRequest();
    var Bezeichnung = document.getElementById("Bezeichnung");
    var Jahr = document.getElementById("Jahr");
    var Region = document.getElementById("Region");
    var Lage = document.getElementById("Lage");
    var Herkunftsland = document.getElementById("Herkunftsland");
    var Anzahl = document.getElementById("Anzahl");
    var Einkauf = document.getElementById("Einkauf");
    var Verkauf = document.getElementById("Verkauf");
    xhttp.open("GET", "http://localhost:8080/rest/api/updateWine/Bezeichnung/Jahr/Region/Lage/Herkunftsland/Anzahl/1/Einkauf/Verkauf", true);
    xhttp.send();
}

function deleteWine(){
    var xhttp = new XMLHttpRequest();
    var name = document.getElementById("Bezeichnung");
    var year = document.getElementById("Jahr");
    xhttp.open("GET", "http://localhost:8080/rest/api/deleteWine/name/year", true);
    xhttp.send();
}

function editSupplier(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/rest/api/updateSupplier/{name}/{phone}/{street}/{region}/{Plz}/{hnum}", true);
    xhttp.send();
}

function deleteSupplier(){
    var xhttp = new XMLHttpRequest();
    var name = document.getElementById("Name");
    xhttp.open("GET", "http://localhost:8080/rest/api/deleteSupplier/name", true);
    xhttp.send();
}