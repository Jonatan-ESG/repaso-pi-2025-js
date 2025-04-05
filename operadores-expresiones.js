const readline = require('readline-sync')
/*  
    📌 Resumen corto: 
        - Operadores aritméticos: +, -, *, /, %
        - Comparación: ==, ===, !=, !==, >, <, >=, <=
        - Lógicos: &&, ||, !
        - Asignación: =, +=, -=, *=, /=, %=
        - Módificación de variable: ++, -- 
*/

/*  💡 Ejemplos: */

// Calcular el precio de un producto con su descuento
let precioTexto = readline.prompt({ prompt: 'Ingrese el precio del producto: ' })

let precio = Number(precioTexto)
let descuento = 0.2
let total = precio * (1 - descuento) // total = precio - (descuento * precio)

console.log(`Total a pagar: ${total}`)

//Validar si el usuario puede ingresar al juego mecánico
const ESTATURA_MINIMA = 60
const ESTATURA_MAXIMA = 120

let estaturaTexto = readline.prompt({ prompt: 'Ingrese la estatura del cliente en centímetros: ' })

let estatura = parseInt(estaturaTexto)

let puedePasar = estatura >= ESTATURA_MINIMA && estatura <= ESTATURA_MAXIMA

console.log(`¿El cliente es lo suficientemente alto puede pasar? ${puedePasar}`)

/* ⚠️ Preguntas frecuentes/errores comunes: 
    ❌ Usar un == en lugar de un === no se verifica el tipo
    ❌ Mezclar operadores sin utilizar paréntesis 
    ❌ No entender correctamente las tablas de verdad
*/
