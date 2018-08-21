// const argv = require('yargs').argv; //SIN EL ./ ENTIENDE QUE NO ES UN PAQUETE RELATIVO, SI UN PAQUEKE DE NODE
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//PAra recibir el parametro num 2
let argv2 = process.argv;
// console.log(argv2);
// console.log(argv);
//Variable de argv
let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado ${archivo}`) )
        .catch(e => console.log(e));
        break;
    
    default:
        console.log('Comando no reconocido');
        break;
}

