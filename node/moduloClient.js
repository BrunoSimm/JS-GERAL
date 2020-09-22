const { ola } = require('./moduloB')
const { bemVindo, ateLogo } = require('./moduloA')

const moduloA = require('./moduloA') //Importar módulos e armazenar na constante moduloA
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloB.boaNoite(), moduloB.c)