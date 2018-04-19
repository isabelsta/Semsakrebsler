function newClient() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function newWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function buyWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function sellWine() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showWine(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("name").innerHTML = this.responseText.list[0].Name;
           document.getElementById("jahr").innerHTML = this.responseText.list[0].Jahr;
        }
    };
    xhttp.open("GET", "http://localhost:8080/rest/api/getWines", true);
    xhttp.send();
}

function showLieferanten(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("h4").innerHTML = this.responseText.list[0].Name;
        }
    };
    xhttp.open("GET", "http://localhost:8080/rest/api/", true);
    xhttp.send();
}