const readline = require('readline-sync')
/*  
    📌 Resumen corto: 
    - Una función es un bloque de código reutilizable que puede recibir datos (parámetros) y devolver un resultado (return)
    - Un procedimiento es una función que no devuelve un resultado, es decir, solo ejecuta instrucciones (no tiene return)
    - Input (parametros) -> Process (código dentro del bloque) -> Output (el resultado que se devuelve con return)
    - Javascript permite crear funciones de varias formas: 
        declaradas
            function nombreFuncion (parametros){
                código
                return resultado
            }

        funciona anonimas
            (parametros){
                código
                return resultado
            }
        flecha
            (parametros)=>{
                código
                return resultado
            }

*/

/*  💡 Ejemplos: */
//Funcion con retorno
function sumar(a, b) {
    const resultado = a + b
    return resultado
}
// const sumar = (a, b) => a + b

let resultado = sumar(5, 4)
console.log(`El resultado de la suma es ${resultado}`)

// Funcion sin retorno o procedimiento
function saludar(nombre) {
    console.log(`Hola ${nombre}, bienvenido`)
}

saludar('José')

//Cláusulas de guarda
function transformarNotaATexto(nota) {
    if (nota > 100 || nota < 0) return 'No válido'
    if (nota < 60) return 'Reprobado'
    if (notaExamen >= 90) return 'A'
    if (notaExamen >= 80 && notaExamen < 90) return 'B'
    if (notaExamen >= 60 && notaExamen < 80) return 'C'
}

let notaExamenTexto = readline.prompt({ prompt: 'Ingrese su nota en formato de número: ' })
let notaExamen = Number(notaExamenTexto)

const notaTransformada = transformarNotaATexto(notaExamen)

console.log(notaTransformada)

/* 
    ⚠️ Preguntas frecuentes/errores comunes: 
    ❌ No usar return cuando se espera un resultado
    ❌ Confundir la ejecución de la función con la referencia de la función
    ❌ Pensar que console.log() devuelve algo, solo siver para mostrar un resultado por consola 
    ❌ Usar return fuera de una función
*/
