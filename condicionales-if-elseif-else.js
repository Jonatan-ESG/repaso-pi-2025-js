const readline = require('readline-sync')
/*  
    📌 Resumen corto: 
        - Se usa if para tomar deciciones basadas en condiciones lógicas
        - Es una estructura de control de flujo condicional
        - Podemos agregar múltiples condiciones con else if
        - Con else definimos qué haces si ninguna de las condiciones descritas anteriormente se cumple
*/

/*  💡 Ejemplos: */
//Validar la mayoría de edad desde la fecha de nacimiento
let fechaNacimientoTexto = readline.prompt({ prompt: 'Ingrese su fecha de nacimiento en el formato (yyyy-mm-dd): ' })

let fechaNacimiento = new Date(fechaNacimientoTexto)
let anioNacimiento = fechaNacimiento.getFullYear()

let fechaActual = new Date()
let anioActual = fechaActual.getFullYear()

let edad = anioActual - anioNacimiento

let año = 100
let ano = 100
let anio = 100

if (edad >= 18) {
    console.log('Eres mayor de edad')
} else {
    console.log('No eres mayor de edad')
}

//Convertir notas en números a notas en letras
let notaExamenTexto = readline.prompt({ prompt: 'Ingrese su nota en formato de número: ' })
let notaExamen = Number(notaExamenTexto)

if (notaExamen >= 90) {
    console.log('A')
} else if (notaExamen >= 80 && notaExamen < 90) {
    console.log('B')
} else if (notaExamen >= 60 && notaExamen < 80) {
    console.log('C')
} else {
    console.log('Reprobado')
}

/* 
    ⚠️ Preguntas frecuentes/errores comunes:
    ❌ Usar = en vez de usar == o === en condiciones
        if(notaExamen = 50)
    ❌ Pensar que else if es obligatorio
    ❌ No cerrar bien las llaves
    ❌ No ordenar correctamente las condiciones
*/
