// 1) Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.

let nombreusuario = prompt("Ingrese su nombre:");

function saludo(nombre) {
    return ("Hola " + nombre + "!");
}

alert(saludo(nombreusuario).toUpperCase()); // Texto a mayúsculas
alert(saludo(nombreusuario).toLowerCase()); // Texto a minúsculas

//2)  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let suma = 0;
let resta = 0;

// // Calcular suma
suma = num1 + num2;
// Mostrar suma
alert("La suma de " + num1 + " y " + num2 + " es: " + suma);

// Validar mayor entre ambos números.
if (num1 > num2) {
    resta = num1 - num2;
    alert("La resta de " + num1 + " y " + num2 + " es: " + resta); // muestro resultado en base al mayor si el mayor es el número 1.
} else {
    resta = num2 - num1;
    alert("La resta de " + num2 + " y " + num1 + " es: " + resta); // muestro resultado en base al mayor si el mayor es el número 2.
}

// 3) Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

let texto = prompt("Ingrese un texto");
let formaVisualizar = parseInt(prompt("Cómo desea visualizar el texto? Por consola ingrese--> '1' o en pantalla ingrese --> '2'."));

// Si selecciono la visualización por consola
if (formaVisualizar === 1) {
    console.log(texto.toUpperCase());
} else if (formaVisualizar === 2) { // Si seleccionó la opción por pantalla
    alert(texto.toUpperCase());
} else {
    alert(formaVisualizar + " es incorrecto, solo puede ingresar 1(Por consola) o 2(Por pantalla)");
}

// 4)  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación que desa realizar");
let total = 0;

switch (operacion) {
    case '+':
        total = num1 + num2;
        alert("La suma de " + num1 + " y " + num2 + " es: " + total);
        break;
    case '-':
        total = num1 - num2;
        alert("La resta de " + num1 + " y " + num2 + " es: " + total);
        break;
    case '*':
        total = num1 * num2;
        alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
        break;
    case '/':
        if (num2 === 0) {
            alert("No se puede dividir por 0");
        } else {
            total = num1 / num2;
        }
        alert("La división de " + num1 + " y " + num2 + " es: " + total);
        break;
    case '^':
        total = Math.pow(num1, num2);
        alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
        break;
    default:
        alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
        break;
}

// 5) Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
//Extra: investigar/googlear la función de Javascript "confirm"

let num1 = 0,
    num2 = 0;
let operacion = "";
let total = 0;
let opcion = true;

while (opcion) {

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación que desa realizar");

    if (operacion === "+") {
        total = num1 + num2;
        alert("La suma de " + num1 + " y " + num2 + " es: " + total);
    } else if (operacion === "-") {
        total = num1 - num2;
        alert("La resta de " + num1 + " y " + num2 + " es: " + total);
    } else if (operacion === "*") {
        total = num1 * num2;
        alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
    } else if (operacion === "/") {
        if (num2 === 0) {
            alert("No se puede dividir por 0");
        } else {
            total = num1 / num2;
        }
        alert("La división de " + num1 + " y " + num2 + " es: " + total);
    } else if (operacion === "^") {
        total = Math.pow(num1, num2);
        alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
    } else {
        alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
    }

    opcion = confirm("Desea continuar realizando operaciones?");
}

// 6) Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.

let stop = true;
let respuesta = "";
let alumnos = [];

while (stop) {
    respuesta = prompt("Ingrese el nombre del alumno o 'SALIR' para terminar.");
    if (respuesta.toUpperCase() === "SALIR") {
        stop = false;
    } else {
        alumnos.push(respuesta);
    }
}

alert("Los alumnos del curso son: " + alumnos);

// 7)  Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

const ej7Nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];

for (let i = 0; i < ej7Nombres.length; i++) {
    alert("Posición: " + i + " Nombre: " + ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1));
}

// 8) Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
// const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];

const ej8Mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];

for (let i = 0; i < ej8Mascotas.length; i++) {
    if (ej8Mascotas[i].length > 6) {
        alert("El nombre " + ej8Mascotas[i] + " es un Nombre largo");
        if (ej8Mascotas[i] === "Gertrudis") {
            alert("A " + ej8Mascotas[i] + " hay que vacunar contra la rabia");
        }
    } else if (ej8Mascotas[i].length <= 3) {
        alert("El nombre " + ej8Mascotas[i] + " es un Nombre corto");
    } else if (ej8Mascotas[i] === "Fido" || ej8Mascotas[i] === "Gertrudis") {
        alert("A " + ej8Mascotas[i] + " hay que vacunar contra la rabia");
    } else if (ej8Mascotas[i] === "Tuerca") {
        alert("A " + ej8Mascotas[i] + " entregar alimento balanceado");
    }
}

// 9)  Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 
// const ej9restaurant = [25,17,18,44,12,9,36,50]

const ej9restaurant = [25, 17, 18, 44, 12, 9, 36, 50];
let totalAPagar = 0;
let contarAdultos = 0;
let descuento = 0;

for (let i = 0; i < ej9restaurant.length; i++) {

    // Valido por edades para determinar si se puede aplicar un descuento 
    if (ej9restaurant[i] >= 18) {
        totalAPagar = totalAPagar + 700; // Si son mayores de edad
        contarAdultos++; // Cuento adultos para aplicar descuento
    } else {
        totalAPagar = totalAPagar + 450; // Si son menores de edad
    }
}

// Si el grupo tiene más de 4 adultos, aplicamos un 10% de descuento.
if (contarAdultos > 4) {
    descuento = totalAPagar * 0.10;
    totalAPagar = totalAPagar - descuento;
}

alert("La cantidad de comensales es de: " + ej9restaurant.length + " y el costo total a pagar es de: $" + totalAPagar + " ya que el grupo cuenta con más de " + contarAdultos + " adultos en donde se aplicó un descuento del 10%");

// 10) De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
/*  Para ello:
  - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
  - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
    - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
    - Agregar el código de paciente adelante en la cola (array) de turnos
  - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
    - Agregar el código de paciente al final de la cola (array) de turnos
  - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
    - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
    - Agregar el código de paciente al final de la cola (array) de turnos
    
  - Si todos los pacientes fueron ingresados, informar en pantalla:
    - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
    - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
    - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP
  
  - Nota: Escribir código con funciones para facilitar su lectura. */

let codigoPaciente = parseInt(prompt("Ingrese el código de paciente. De 1 a 999. Ingrese 0 para terminar"));
let valoracion = 0;
let valoracionServicio = []; // Array para puntuación de servicio de paciente VIP.
let turnos = []; // Array donde se van a agregar los códigos de pacientes ingresados.
let nuevoVip = []; // Array de nuevos pacientes que desean pasarse a VIP.
let opcionVip = true;
let suma = 0;
let ordenIngreso = [];

function pacienteVip(codigo) {
    turnos.unshift(codigo); // Agregamos el valor adelante del array de turnos
    return turnos;
}

function pacientePrepaga(codigo) {
    turnos.push(codigo); // Agregamos el valor al final del array de turnos
    return turnos;
}

function pacienteNuevo(codigo) {
    turnos.push(codigo); // Agregamos el valor al final del array de turnos
    return turnos;
}

function validarTipoPaciente(codigo) {

    if (codigo >= 1 && codigo <= 99) { // Es un paciente VIP
        pacienteVip(codigo); // Función para guardar el código del paciente.
        valoracion = parseInt(prompt("Cómo valora la calidad del servicio? (De 1 a 10)."));
        valoracionServicio.push(valoracion); // Guardo en un array la calidad del servicio
        suma = suma + valoracion;
    } else if (codigo >= 100 && codigo <= 500) { // Es un paciente con prepaga
        pacientePrepaga(codigo); // Función para guardar el código del paciente.
    } else if (codigo >= 501 && codigo <= 999) {
        pacienteNuevo(codigo); // Función para guardar el código del paciente.
        opcionVip = confirm("Desea pasarse a VIP?");
        if (opcionVip === true) {
            nuevoVip.push(codigo); // Guardo el código del nuevo paciente VIP
        }
    } else if (codigo >= 1000 || codigo < 0) {
        alert("El código de paciente: " + codigo + "es incorrecto. Debe ser entre 1 y 999");
    }

}

while (codigoPaciente !== 0) {
    validarTipoPaciente(codigoPaciente);
    codigoPaciente = parseInt(prompt("Ingrese el código de paciente. De 1 a 999. Ingrese 0 para terminar"));
}

// CALIDAD DEL SERVICIO VIP
alert("CALIDAD DEL SERVICIO VIP: " + "\n" + "El puntuación promedio es: " + (suma / valoracionServicio.length) + "\n" + "La puntuación más alta es: " + Math.max(...valoracionServicio) + "\n" + "La puntuación más baja es: " + Math.min(...valoracionServicio));

// EL ORDEN DE INGRESO DE LOS PACIENTES
alert("El ingreso de los pacientes es: " + turnos);

// CODIGOS DE PACIENTES QUE DESEAN SER VIP
alert("Códigos de pacientes que desean ser VIP: " + nuevoVip);