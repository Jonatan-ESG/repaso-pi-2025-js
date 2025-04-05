const readline = require('readline-sync')

/*  
    📌 Resumen corto: 
    - while, se utiliza cuando no sabemos cuantas veces se debe repetir un bloque de código
    - La condicion o clausula de escape del while se evalúa antes de cada repetición
    -do while, se utiliza cuando sabemos que el bloque de código debe ejecutarse al menos una vez
    - La condicion o clausla de escape del do while se evalúa al después de cada repetición
*/

/*  💡 Ejemplos: */
// Simular un temporizador configurado por el usuario
let segundosTexto = readline.prompt({ prompt: 'Ingrese los segundos que quiere temporizar: ' })
let segundos = parseInt(segundosTexto)

let contador = segundos

while (contador >= 0) {
    if (contador === 0) {
        console.log(`El tiempo finalizó`)
    } else {
        console.log(`Faltan ${contador} segundos.`)
    }
    contador--
}

// Menú interactivo
let opcion = 0

do {
    let opcionTexto = readline.prompt({
        prompt: `
        1. Ver saldo
        2. Retirar dinero
        3. Salir
        `,
    })

    opcion = parseInt(opcionTexto)

    switch (opcion) {
        case 1:
            console.log('Su saldo es de Q.100.00')
            break
        case 2:
            console.log('Usted retiró Q.100.00')
            break
        case 3:
            console.log('Gracias por usar el servicio del ATM')
            break
    }
} while (opcion != 3)

/* 
    ⚠️ Preguntas frecuentes/errores comunes:
    ❌ Bucle infinito: No actualizar la variable que se evalua en el while provoca una repetición infinita del código 
    ❌ Olvida que do ... while siempre se ejecuta una vez, incluso si la condicion es falsa desde el principio
    ❌ Usar while(true) al no tener una control de la salida (no hay clausula de escape) generamos un bucle infinito
    ❌ Declarar la variable de la clausula de escape dentro del ciclo, genera error, porque no se puede evaluar nunca
*/
