





function fecha() {

    var f = new Date();
    document.getElementById("fecha").innerHTML = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());



}

function aceptar() {

    m = document.getElementById("monto").value;
   y= document.getElementById("rut").value;
        
  


  


    if (m < 0 || m > 1000000) {

        document.getElementById("monto").style.backgroundColor = "red";
        document.getElementById("monto").style.borderColor = "green";
    } else {
        document.getElementById("monto").style.backgroundColor = "white";
        document.getElementById("monto").style.borderColor = "white";
    }
    d = document.querySelector('input[type="month"]').value;

    if (d < '2010-01' || d > '2050-12') {


        document.getElementById("fecha2").style.backgroundColor = "red";
        document.getElementById("fecha2").style.borderColor = "green";

    } else {
        document.getElementById("fecha2").style.backgroundColor = "white";
        document.getElementById("fecha2").style.borderColor = "white"; }

    if ((m > 0 && m < 1000000) && (d > '2010-01' && d < '2050-12') && (y !="")) {
        alert("datos ingresados correctamente");
        document.getElementById("fecha2").style.backgroundColor = "white";
        document.getElementById("fecha2").style.borderColor = "white";
        document.getElementById("monto").style.backgroundColor = "white";
        document.getElementById("monto").style.borderColor = "white";
    }
    z = document.getElementById("monto").value;
    if (z == "") {
        document.getElementById("monto").style.backgroundColor = "red";
        document.getElementById("monto").style.borderColor = "green";
    }

    if (y == "") {
        document.getElementById("rut").style.backgroundColor = "red";
        document.getElementById("rut").style.borderColor = "green";
    } else {
        document.getElementById("rut").style.backgroundColor = "white";
        document.getElementById("rut").style.borderColor = "white";      }

}