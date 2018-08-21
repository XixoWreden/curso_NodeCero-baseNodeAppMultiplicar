/**
 * ESTE PROGRAMA SE USA PONIENDO UN PARAMETRO QUE ES LA BASE, SE USA PARA CREAR EL ARCHIVO DE TABLA
 * EJEMPLO:
 *  node app --base=4
 */

// const multiplicar = require('./multiplicar/multiplicar'); //DESTRUCTURAR EL OBJETO MULTIPLICAR
const { crearArchivo } = require('./multiplicar'); //IMPORTA OTRO JS QUE ESTA DENTRO DEL PROYECTO

// let base = "5";

//Objetos globales de Node
// console.log(module);
// console.log(process);
console.log(process.argv);

//PAra recibir el parametro num 2
let argv = process.argv;
let parametro = argv[2];
console.log(parametro);
let base = parametro.split("=");
console.log(base);

crearArchivo(base[1])
.then(archivo => console.log(`Archivo creado ${archivo}`) )
.catch(e => console.log(e));