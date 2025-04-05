const readline = require('readline-sync')
/*  
    📌 Resumen corto: 
    - JavaScript incluye métodos para manipular, transformar y recorrer arreglos fácilmente. 
        Algunos modifican el arreglo original y otros devuelven uno nuevo.
    - Métodos más importantes:
        push() -> Agrega al final, muta al arreglo original (es decir cambia sus valores)
        unshift() -> Agrega al inicio, muta al arreglo original (es decir cambia sus valores)
        pop() -> Elimina el último elemento, muta al arreglo original (es decir cambia sus valores)
        shift() -> Elimina el primer elemento, muta al arreglo original (es decir cambia sus valores)
        map() -> Crea un nuevo arreglo transformando elementos, no muta al arreglo original (es decir no cambia sus valores)
        filter() -> Crea un nuevo arreglo con elementos que cumplen una condición, no muta al arreglo original (es decir no cambia sus valores)
        reduce() -> Reduce el arreglo a un solo valor, no muta al arreglo original (es decir no cambia sus valores)
        sort() -> Ordena los elementos del arreglo, muta al arreglo original (es decir cambia sus valores)
        includes() -> Verifica si un elemento existe, no muta al arreglo original (es decir no cambia sus valores)
        indexOf() -> Devuelve la posición de un elemento, no muta al arreglo original (es decir no cambia sus valores)
        forEach() -> Ejecuta una acción por cada elemento, no muta al arreglo original (es decir no cambia sus valores)
        concat() -> Une dos arreglos en uno nuevo, no muta al arreglo original (es decir no cambia sus valores)
        slice() -> Devuelve una parte del arreglo, no muta al arreglo original (es decir no cambia sus valores)
        splice() -> Agrega, elimina o reemplaza elementos, muta al arreglo original (es decir cambia sus valores)
*/

/*  💡 Ejemplos: */
// map() + filter():

const precios = [100, 200, 300]

const preciosConIVA = precios.map((p) => p * 1.21) // Agregar IVA

const mayores = preciosConIVA.filter((p) => p > 250) // Filtrar precios mayores a 250

console.log(mayores) // [363]

// reduce()
const notas = [80, 70, 90]
const promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length

console.log('Promedio:', promedio) // 80

//push() y pop():
const pila = []
pila.push('Tarea 1')
console.log(pila)
pila.push('Tarea 2')
console.log(pila)
pila.pop() // Elimina "Tarea 2"
console.log(pila) // ["Tarea 1"]

/* 
    ⚠️ Preguntas frecuentes/errores comunes: 
    ❌ Usar map() sin return → genera arreglo de undefined.
    ❌ Usar sort() con números sin función de comparación (a - b).
    ❌ Confundir push (final) con unshift (inicio).
    ❌ Creer que forEach() devuelve algo (no lo hace).
*/
