const readline = require('readline-sync')
/*  
    📌 Resumen corto: 
        - switch se usa cuando hay varios posibles valores exactos para comprar
        - Evalúa una expresión y ejecuta el bloque que coincida con un caso (case)
        -Se utiliza break para salir del bloque y evitar que siga ejecutando los demás casos
*/

/*  💡 Ejemplos: */

//Identificar días de la semana por el numero de día
let numeroDiaText = readline.prompt({ prompt: 'Ingrese el numero del día de la semana: ' })
let numeroDia = parseInt(numeroDiaText)

switch (numeroDia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miércoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sábado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Día inválido')
}

//Interprete de Semáforo
let senalSemaforo = readline.prompt({ prompt: 'Ingrese la señal del semáforo: ' })

switch (senalSemaforo) {
    case 'verde':
        console.log('Puede avanzar')
        break
    case 'amarillo':
        console.log('Pase rápido')
        break
    case 'rojo':
        console.log('Pase pero lo pueden chocar')
        break
    default:
        console.log('Color no válido')
}

/* 
    ⚠️ Preguntas frecuentes/errores comunes:
    ❌ Olvidar el break esto hace que se ejecuten todos los case siguientes (efecto en cascada)
    ❓ ¿Switch evalua rangos y condiciones complejas? NO, solo valores exactos
    ❌ Confundir switch con if cuando la lógica requiere una comparación de >, <, etc.
    ❌ Comparar tipos diferentes
        switch(5) -> case "5":
*/
