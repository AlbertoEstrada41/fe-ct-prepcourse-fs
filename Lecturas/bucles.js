// ejemplo sin usar bucles o ciclos

var suma = 0
suma = suma + 1
suma = suma + 2
suma = suma + 3
suma = suma + 4
suma = suma + 5

console.log(suma)

console.log('-------------------------------------------------------')

// bucle FOR - este bucle se usa cuando sabemos el numero de iteraciones exactas que queremos ejecutar

for (var i=0; i < 5; i++) {
    suma = suma + i
    console.log('Variable de iteracion: ', i)
}
console.log('Variable Suma: ', suma)

console.log('-------------------------------------------------------')
// bucle WHILE - usar cuando no sabemos con certeza cuantas iteraciones necesitaremos hasta finalizar el bucle.

var sum = 0

while (sum < 3) {
    sum =  sum + 1
    console.log(sum)
}