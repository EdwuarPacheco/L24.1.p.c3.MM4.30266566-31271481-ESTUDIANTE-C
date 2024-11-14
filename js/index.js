/* Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
inserte un estudiante en una posición dada (siendo 0 la primera posición).
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: insertarEstudEnPosicion.
Parámetros: estudiantes (array de objetos estudiante), nombre, semestre, nota y posición
Retorno: array de objetos estudiante con el estudiante insertado en la posición indicada
(siendo 0 la primera posición). 
*/

let estudiantes = [
    { nombre: 'Pablito', semestre: 5, nota: 14 },
    { nombre: 'Pepito', semestre: 5, nota: 16 },
    { nombre: 'Pedrito', semestre: 3, nota: 12 },
    { nombre: 'Javier', semestre: 3, nota: 20 },
    { nombre: 'Jorge', semestre: 6, nota: 18 },
    { nombre: 'Kevin', semestre: 3, nota: 15 },
    { nombre: 'Ricardo', semestre: 2, nota: 10 },
];

function insertarEstudEnPosicion(estudiantes, nombre, semestre, nota, posicion) {
    estudiantes.splice(posicion, 0, {nombre: nombre, semestre: semestre, nota: nota});
    return estudiantes;
}

let estudiantesPosicion = insertarEstudEnPosicion(estudiantes, "Mariano", 3, 11, 0);
let estudiantesPosicion2 = insertarEstudEnPosicion(estudiantes, "Ariannis", 7, 15, 3);

let salida = document.getElementById("salida");

for (let i = 0; i < estudiantesPosicion.length; i++) {
    salida.innerHTML+= "<br> Nombre: " +estudiantesPosicion[i].nombre;
    salida.innerHTML+= "<br> Semestre: " +estudiantesPosicion[i].semestre;
    salida.innerHTML+= "<br> Nota: " +estudiantesPosicion[i].nota;
    salida.innerHTML+= "<br> <br>";
}