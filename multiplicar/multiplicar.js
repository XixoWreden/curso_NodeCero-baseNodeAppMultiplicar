//Requires 
const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('==========================='.red);
        console.log(`===== Tabla de ${base} ========`.rainbow);
        console.log('==========================='.red);
        //Validación
        if(!Number(base)){
            reject('Base: no es un número'.red.inverse);
            return;
        }else if(!Number(limite)){
            reject('Limite: no es un número'.red.inverse);
            return;
        }
        let data = '';
        for(let j = 0; j < limite; j++) {
            data += `${base}*${j}= ${base * j}\n`;
        }
        //IMPRIMIR
        resolve(`Listado de la tabla del ${base}:`);
        console.log(data);
        return;
         
    });
};

// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        
        //Validacion
        if(!Number(base)){
            reject('Base: No es un número.'.red.inverse);
            return;
        }

        let data = '';

        for(let j = 0; j < limite; j++) {
            data += `${base}*${j}= ${base * j}\n`;
        }

        //ESCRIBIR EN UN ARCHIVO
        fs.writeFile(`../04_basesNode/tablas/tabla-${base}.txt`, data, (err) => {
            if(err) reject(err.red.inverse);
            resolve(`El archivo tabla-${base}.txt, se guardo correctamente.`.green.inverse);
        });
    });
};//Fin de funcion crearArchivo

module.exports = {
    crearArchivo : crearArchivo,
    listarTabla
}
