// 1) Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.

// let nombreusuario = prompt("Ingrese su nombre:");

// function saludo(nombre) {
//     return ("Hola " + nombre + "!");
// }

// alert(saludo(nombreusuario).toUpperCase()); // Texto a mayúsculas
// alert(saludo(nombreusuario).toLowerCase()); // Texto a minúsculas

//2)  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.

// let num1 = parseFloat(prompt("Ingrese el primer número:"));
// let num2 = parseFloat(prompt("Ingrese el segundo número:"));
// let suma = 0;
// let resta = 0;

// // // Calcular suma
// suma = num1 + num2;
// // Mostrar suma
// alert("La suma de " + num1 + " y " + num2 + " es: " + suma);

// // Validar mayor entre ambos números.
// if (num1 > num2) {
//     resta = num1 - num2;
//     alert("La resta de " + num1 + " y " + num2 + " es: " + resta); // muestro resultado en base al mayor si el mayor es el número 1.
// } else {
//     resta = num2 - num1;
//     alert("La resta de " + num2 + " y " + num1 + " es: " + resta); // muestro resultado en base al mayor si el mayor es el número 2.
// }

// 3) Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

// let texto = prompt("Ingrese un texto");
// let formaVisualizar = parseInt(prompt("Cómo desea visualizar el texto? Por consola ingrese--> '1' o en pantalla ingrese --> '2'."));

// // Si selecciono la visualización por consola
// if (formaVisualizar === 1) {
//     console.log(texto.toUpperCase());
// } else if (formaVisualizar === 2) { // Si seleccionó la opción por pantalla
//     alert(texto.toUpperCase());
// } else {
//     alert(formaVisualizar + " es incorrecto, solo puede ingresar 1(Por consola) o 2(Por pantalla)");
// }

// 4)  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

// let num1 = parseFloat(prompt("Ingrese el primer número:"));
// let num2 = parseFloat(prompt("Ingrese el segundo número:"));
// let operacion = prompt("Ingrese la operación que desa realizar");
// let total = 0;

// switch (operacion) {
//     case '+':
//         total = num1 + num2;
//         alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//         break;
//     case '-':
//         total = num1 - num2;
//         alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//         break;
//     case '*':
//         total = num1 * num2;
//         alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//         break;
//     case '/':
//         if (num2 === 0) {
//             alert("No se puede dividir por 0");
//         } else {
//             total = num1 / num2;
//         }
//         alert("La división de " + num1 + " y " + num2 + " es: " + total);
//         break;
//     case '^':
//         total = Math.pow(num1, num2);
//         alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//         break;
//     default:
//         alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//         break;
// }

// 5) Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
//Extra: investigar/googlear la función de Javascript "confirm"


// let num1 = parseFloat(prompt("Ingrese el primer número:"));
// let num2 = parseFloat(prompt("Ingrese el segundo número:"));
// let operacion = prompt("Ingrese la operación que desa realizar");
// let total = 0;
// let opcion = true;

// switch (operacion) {
//     case '+':
//         total = num1 + num2;
//         alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//         opcion = confirm("Desea continuar realizando operaciones?");
//         while (opcion) {
//             num1 = parseFloat(prompt("Ingrese el primer número:"));
//             num2 = parseFloat(prompt("Ingrese el segundo número:"));
//             operacion = prompt("Ingrese la operación que desa realizar");
//             if (operacion === "+") {
//                 total = num1 + num2;
//                 alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "-") {
//                 total = num1 - num2;
//                 alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "*") {
//                 total = num1 * num2;
//                 alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "/") {
//                 if (num2 === 0) {
//                     alert("No se puede dividir por 0");
//                 } else {
//                     total = num1 / num2;
//                 }
//                 alert("La división de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "^") {
//                 total = Math.pow(num1, num2);
//                 alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//             } else {
//                 alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//             }
//             opcion = confirm("Desea continuar realizando operaciones?");
//         }
//         break;
//     case '-':
//         total = num1 - num2;
//         alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//         while (opcion) {
//             num1 = parseFloat(prompt("Ingrese el primer número:"));
//             num2 = parseFloat(prompt("Ingrese el segundo número:"));
//             operacion = prompt("Ingrese la operación que desa realizar");
//             if (operacion === "+") {
//                 total = num1 + num2;
//                 alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "-") {
//                 total = num1 - num2;
//                 alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "*") {
//                 total = num1 * num2;
//                 alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "/") {
//                 if (num2 === 0) {
//                     alert("No se puede dividir por 0");
//                 } else {
//                     total = num1 / num2;
//                 }
//                 alert("La división de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "^") {
//                 total = Math.pow(num1, num2);
//                 alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//             } else {
//                 alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//             }
//             opcion = confirm("Desea continuar realizando operaciones?");
//         }
//         break;
//     case '*':
//         total = num1 * num2;
//         alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//         while (opcion) {
//             num1 = parseFloat(prompt("Ingrese el primer número:"));
//             num2 = parseFloat(prompt("Ingrese el segundo número:"));
//             operacion = prompt("Ingrese la operación que desa realizar");
//             if (operacion === "+") {
//                 total = num1 + num2;
//                 alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "-") {
//                 total = num1 - num2;
//                 alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "*") {
//                 total = num1 * num2;
//                 alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "/") {
//                 if (num2 === 0) {
//                     alert("No se puede dividir por 0");
//                 } else {
//                     total = num1 / num2;
//                 }
//                 alert("La división de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "^") {
//                 total = Math.pow(num1, num2);
//                 alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//             } else {
//                 alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//             }
//             opcion = confirm("Desea continuar realizando operaciones?");
//         }
//         break;
//     case '/':
//         if (num2 === 0) {
//             alert("No se puede dividir por 0");
//         } else {
//             total = num1 / num2;
//         }
//         alert("La división de " + num1 + " y " + num2 + " es: " + total);
//         while (opcion) {
//             num1 = parseFloat(prompt("Ingrese el primer número:"));
//             num2 = parseFloat(prompt("Ingrese el segundo número:"));
//             operacion = prompt("Ingrese la operación que desa realizar");
//             if (operacion === "+") {
//                 total = num1 + num2;
//                 alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "-") {
//                 total = num1 - num2;
//                 alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "*") {
//                 total = num1 * num2;
//                 alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "/") {
//                 if (num2 === 0) {
//                     alert("No se puede dividir por 0");
//                 } else {
//                     total = num1 / num2;
//                 }
//                 alert("La división de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "^") {
//                 total = Math.pow(num1, num2);
//                 alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//             } else {
//                 alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//             }

//             opcion = confirm("Desea continuar realizando operaciones?");
//         }

//         break;
//     case '^':
//         total = Math.pow(num1, num2);
//         alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//         while (opcion) {
//             num1 = parseFloat(prompt("Ingrese el primer número:"));
//             num2 = parseFloat(prompt("Ingrese el segundo número:"));
//             operacion = prompt("Ingrese la operación que desa realizar");
//             if (operacion === "+") {
//                 total = num1 + num2;
//                 alert("La suma de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "-") {
//                 total = num1 - num2;
//                 alert("La resta de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "*") {
//                 total = num1 * num2;
//                 alert("La multiplicación de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "/") {
//                 if (num2 === 0) {
//                     alert("No se puede dividir por 0");
//                 } else {
//                     total = num1 / num2;
//                 }
//                 alert("La división de " + num1 + " y " + num2 + " es: " + total);
//             } else if (operacion === "^") {
//                 total = Math.pow(num1, num2);
//                 alert("La potencia con base " + num1 + " y exponente " + num2 + " es: " + total);
//             } else {
//                 alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//             }
//             opcion = confirm("Desea continuar realizando operaciones?");
//         }
//         break;
//     default:
//         alert("La operación ingresada: " + operacion + " es incorrecta. Solo puede ingresar Suma(+), Resta(-), Multiplicación(*), División(/) o Potencia(^)");
//         break;
// }

// 6) Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.

// let stop = true;
// let respuesta = "";
// let alumnos = [];

// while (stop) {
//     respuesta = prompt("Ingrese el nombre del alumno o 'SALIR' para terminar.");
//     if (respuesta.toUpperCase() === "SALIR") {
//         stop = false;
//     } else {
//         alumnos.push(respuesta);
//     }
// }

// alert("Los alumnos del curso son: " + alumnos);

// 7)  Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.
// const ej7Nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];

// for (let i = 0; i < ej7Nombres.length; i++) {
//     alert("Posición: " + i + " Nombre: " + ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1));
// }