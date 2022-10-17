//Ejercicio 1

document.getElementById("enviarReyes").onclick = function reyesMagos(fecha){

    fecha = document.getElementById("fechaReyes1").value;

    let anoReyes = fecha.getFullYear();

    if (fecha.getMonth() == 00 && fecha.getDate > 6){
        anoReyes += 1;
    }

    let fechaReyes = new Date(anoReyes, 00, 06);
    let milisecDia = 1000 * 60 * 60 * 24;

    let diasFaltantes = Math.ceil((fechaReyes.getTime() - fecha.getTime()) / milisecDia);

    alert("Faltan " + diasFaltantes + " Para que vengan los Reyes Magos!");
}

 //Ejercicio 2

document.getElementById("enviarFecha").onclick = function fechaActual(){
    alert("Hoy es: " + new Date());
}

//Ejercicio 3

document.getElementById("enviarRadio").onclick = function calcularAreaCirculo(radio){

    radio = document.getElementById("radio").value;

    var area = Math.PI * (radio * radio);
    var longitud = 2 * Math.PI * radio;

    alert("El area de su circunferencia es: " + area.toFixed(2) + ", y la longitud es: " + longitud.toFixed(2));

}

//Ejercicio 4

document.getElementById("enviarRandom").onclick = function calcularAleatorio(comienzo, fin){

    comienzo = document.getElementById("comienzo").value;
    fin = document.getElementById("fin").value;

    if(comienzo >= fin){

        alert("Error, intentelo de nuevo");

    }else{

        var random = random = Math.floor(Math.random() * (fin - comienzo) + comienzo);

        alert(random);

    }


}