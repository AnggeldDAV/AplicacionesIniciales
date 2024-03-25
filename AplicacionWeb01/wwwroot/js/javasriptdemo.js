/* document.write("I'm <b>learning</b> Javascript ");

nombre = "Anggeld";
numeroDeOrejas = 2;
alumno = false;

numeroDeOrejasPorClase = numeroDeOrejas * 20;

document.write("En la clase de " + nombre + " hay " + numeroDeOrejasPorClase + " orejas ");

if (alumno) {
    document.write("alumno verdadero ");
}

if (numeroDeOrejasPorClase == 20) {
    document.write("orejas 20 ");
} 
if (numeroDeOrejasPorClase > 39 && numeroDeOrejasPorClase < 50) {
    document.write("orejas bien ");
}



function suma(a,b) { //suma parametros y argumentos
    return a+b +arguments[2] ;
}

document.write(suma(3,7,17)+ " ");

function suma2() { //bucle for en argumentos
    total = 0;
    for (contador=0; contador < arguments.length;contador++) {
        total += arguments[contador];
    }
    return total;
}


conjuntoNumeros = [8,6,5,4,6,7,9,1,2]; //array
for (contador=0;contador<conjuntoNumeros.length;contador++) { //bucle en tamaño array
    document.write(conjuntoNumeros[contador]);
}
 */

// Crear una lista de edades tal y como se ha mostrado.
edades = [12, 14, 17, 20, 25, 38];

// Mostrar aquellos que tienen más de 18 años.
document.write("<br>Mayores <br>");
for (contador = 0; contador < edades.length; contador++) {

    if (edades[contador] > 18) {
        document.write(" " + edades[contador]);
    }
}

//Mostrar aquellos cuya edad sea par (elemento % 2 == 0)
document.write("<br>Par <br>");
for (contador = 0; contador < edades.length; contador++) {

    if (edades[contador] % 2 == 0) {
        document.write(" " + edades[contador]);
    }
}

// Mostrar aquellos que sean divisibles por tres.
document.write("<br>Divisibles de tres <br>");
for (contador = 0; contador < edades.length; contador++) {

    if (edades[contador] % 3 == 0) {
        document.write(" " + edades[contador]);
    }
}

// Crear una lista de nombres con el siguient contenido. pepe,juan,ana,maria,luis

nombres = ["pepe", "juan", "ana", "maria", "luis"];

//Mostrar todos los nombres.
document.write("<br>Nombres <br>");
for (contador = 0; contador < nombres.length; contador++) {
    document.write(" " + nombres[contador]);
}

//Mostrar la longitud del array de nombres: nombrearray.length
document.write("<br>Longitud del array de nombres <br>");
document.write(nombres.length);

//Mostrar aquellos nombres que tengan como longitud 4 o más. 
document.write("<br>Nombres que tengan longitud 4 o mas <br>");
for (contador = 0; contador < nombres.length; contador++) {
    if (nombres[contador].length >= 4) {
        document.write(" " + nombres[contador]);
    }
}

//Sacar los nombres pero en mayusculas.
document.write("<br>Nombres pero en mayusculas <br>");
for (contador = 0; contador < nombres.length; contador++) {
    document.write(" " + nombres[contador].toUpperCase());
}