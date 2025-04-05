/*  
    📌 Resumen corto: 
        - Las variables son espacios en memoria que nos permiten almacenar valores para reutilizarlos
        - Se declaran con: 
            cost: Separa un espacio en memoria para almacenar un valor que no va a modificarse durante la 
                ejecución del programa, pero puede ser accedido
            let: Define variables que tienen ámbito de bloque y son la forma recomendada
            var: Define variables que tienen ámbito global y no son recomendadas
        - Tipos básicos: 
            string: Representa una cadena de texto
            number: Representa un número, ya sea entero o decimal
            booleans: Representa el resultado de una opración lógica y es verdaro o falso
            undefined: Representa el valor de una variable que fue declara pero no asignada
            null: Representa el valor nulo, no es vacio pero no equivale a nada
*/

/*  💡 Ejemplos: */
var fechaIngreso = '2025-01-01'
let nombre = 'Ana'
const edad = 25
let esEstudiante = true

if (edad == 25) {
    var fechaIngreso = '2025-01-31'
    let nombre = 'María'
}

nombre = 'Fernanda'

console.log(fechaIngreso)
console.log(nombre)

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esEstudiante)

/* ⚠️ Preguntas frecuentes/errores comunes: 
    ❌ Usar const y luego intentar cambiar el valor
    ❌ Confundir la asignacion = con == o === que son de comparación
    ❌ Confundir los ámbitos de las variables declaradas
    ❌ Tratar de acceder a una variable no declarada (generar error)
*/
