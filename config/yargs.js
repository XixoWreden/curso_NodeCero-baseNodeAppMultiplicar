const opts = {
    base : {
        demand : true,
        alias : 'b',
    },
    limite :{
        alias : 'l',
        default : 10
    }
};
const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar, la cual se le pasen los valores de parametros base y limite',opts)
.command('crear', 'Crea un archivo de texto donde se guarda la tabla de multiplicar a partir de los parametros dados en base y en limite',opts)
.help().argv;

module.exports = {
    argv
};