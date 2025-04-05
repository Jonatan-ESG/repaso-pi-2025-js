const readline = require('readline-sync')
/*  
    📌 Resumen corto: 
    - El for se utiliza para reptir un bloque de código un número específico de veces
        for(let nombreVariable; nombreVariebla <= 100; nombreVariable++){
        }
    - Los arreglos (arrays) almacenan una colección ordenada de elementos
        [1, 2, 3, "texto", 2.5, [1, 2, 3]]
    - Los elementos de una arreglo se acceden mediante un índice numérico, que empieza en 0
         0    1   2   3  4
        [24, 35, 64, 1, 9]
    - Combinando, for y arreglos, podemos recorrerlos y procesar sus elementos
*/

/*  💡 Ejemplos: */
// Recorrer un arreglo

// const frutas = ['Mango', 'Fresa', 'Coco']

// for (let posicion = 0; posicion < frutas.length; posicion++) {
//     console.log(`Fruta ${posicion + 1}: ${frutas[posicion]}`)
// }

// Sumar todos los números de un arreglo

const notas = [75, 88, 90, 45, 38, 100]
const nombresNota = ['Edison', 'Josué', 'José', 'Kenneth', 'Jennifer', 'Diego']
let promedio = 0
let suma = 0

for (let posicion = 0; posicion < notas.length; posicion++) {
    suma += notas[posicion]
}

promedio = suma / notas.length

console.log(`El promedio de notas de los estudiantes es: ${promedio}`)

// Obtener la nota de un estudiante por su nombre

function obtenerValorPorPosicion(nombre) {
    const posicionNota = nombresNota.indexOf(nombre)
    return notas[posicionNota]
}

const nombreEstudiante = readline.prompt({ prompt: 'Ingrese el nombre del estudiante: ' })

const notaEstudiante = obtenerValorPorPosicion(nombreEstudiante)

console.log(`El estudiante ${nombreEstudiante} tiene la nota: ${notaEstudiante}`)

/* 
    ⚠️ Preguntas frecuentes/errores comunes: 
    ❌ Intentar acceder a un índice que esté fuera del rango notas[100] -> undefined
    ❌ No utilizar el .length en el for, que se recorra más o menos de los elementos necesarios
    ❌ Confundir un índice `posicion` con el valor `notas[posicion]` 
    ❌ Declar como const el índice del for, cuando debe ser un let
*/
