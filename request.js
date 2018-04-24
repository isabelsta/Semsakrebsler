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
        xhttp.open("POST", "http://localhost:8080/rest/api", true);
        xhttp.send(json);
    }, false);
}

function JSONlieferant() {
    var lieferant = document.getElementById("lieferant");
    lieferant.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:8080/rest/api", true);
        xhttp.send(json);
    }, false);
}

function JSONneuerWein() {
    var neuerwein = document.getElementById("neuerwein");
    neuerwein.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:8080/rest/api", true);
        xhttp.send(json);
    }, false);
}

function JSONeinkaufen() {
    var einkaufen = document.getElementById("einkaufen");
    einkaufen.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:8080/rest/api", true);
        xhttp.send(json);
    }, false);
}

function JSONverkaufen() {
    var verkaufen = document.getElementById("verkaufen");
    verkaufen.addEventListener("submit", function (e) {
        e.preventDefault();
        var json = toJSONString(this);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:8080/rest/api", true);
        xhttp.send(json);
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
                        + "<div class='icons col-md-2'><span class='glyphicon glyphicon-edit'></span><span class='glyphicon glyphicon-trash'></span></div></div>";
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
                        + "<div class='icons col-md-2'><span class='glyphicon glyphicon-edit'></span><span class='glyphicon glyphicon-trash'></span></div></div>";
                }
                document.getElementById("infos").innerHTML = txt;
            }
        };
        xhttp.open("GET", "http://localhost:8080/rest/api/getSuppliers", true);
        xhttp.send();
    }