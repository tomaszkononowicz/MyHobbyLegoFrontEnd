function zamknijStopke () {
    usuwanieStopki = document.getElementById("bodyId").removeChild(document.getElementById("footerId"));
    document.getElementById("bodyId").style.marginBottom = "10px";
}

function startKolor() {
    var kolor = (sessionStorage.getItem("kolor"));
    if (kolor) {
        if (sessionStorage.getItem("kolor") == "zielony") zielony();
        if (sessionStorage.getItem("kolor") == "czerwony") czerwony();
    } 
}

function zmienKolor() {
    var kolor = (sessionStorage.getItem("kolor"));
    if (!kolor) {
        sessionStorage.setItem("kolor", "czerwony");
        zielony();
        sessionStorage.setItem("kolor", "zielony");
    } else if (sessionStorage.getItem("kolor") == "zielony") {
        czerwony()
        sessionStorage.setItem("kolor", "czerwony");
    } else {
        zielony();
        sessionStorage.setItem("kolor", "zielony");
    }
}


function zielony() {
    var nav = document.querySelectorAll(".kolor");
    var th = document.getElementsByTagName("th");
    var td = document.getElementsByTagName("td");
    var h1 = document.getElementsByTagName("h1");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var footer = document.getElementsByTagName("footer");

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundColor = 'green';
    }
    for (var i = 0; i < th.length; i++) {
        th[i].style.border = '3px solid green';
        th[i].style.backgroundColor = 'green';
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.border = '3px solid green';
    }
    for (var i = 0; i < h1.length; i++) {
        h1[i].style.color = 'green';
    }
    for (var i = 0; i < h3.length; i++) {
        h3[i].style.color = 'green';
    }
    for (var i = 0; i < h4.length; i++) {
        h4[i].style.color = 'green';
    }
    for (var i = 0; i < footer.length; i++) {
        footer[i].style.backgroundColor = 'green';
    }
}

function czerwony() {
    var nav = document.querySelectorAll(".kolor");
    var th = document.getElementsByTagName("th");
    var td = document.getElementsByTagName("td");
    var h1 = document.getElementsByTagName("h1");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var footer = document.getElementsByTagName("footer");

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundColor = '#740F12';
    }
    for (var i = 0; i < th.length; i++) {
        th[i].style.border = '3px solid #740F12';
        th[i].style.backgroundColor = '#740F12';
    }
    for (var i = 0; i < td.length; i++) {
        td[i].style.border = '3px solid #740F12';
    }
    for (var i = 0; i < h1.length; i++) {
        h1[i].style.color = '#740F12';
    }
    for (var i = 0; i < h3.length; i++) {
        h3[i].style.color = '#740F12';
    }
    for (var i = 0; i < h4.length; i++) {
        h4[i].style.color = '#740F12';
    }
    for (var i = 0; i < footer.length; i++) {
        footer[i].style.backgroundColor = '#740F12';
    }
}