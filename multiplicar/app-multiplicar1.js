//Requires 
const fs = require('fs');

let base = 6;
let data = '';

for(let j = 0; j < 10; j++) {
    data += `${base}*${j}= ${base * j}\n`;
}

//ESCRIBIR EN UN ARCHIVO
fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
    if(err) throw err;
    console.log(`El archivo tabla-${base}.txt, se guardo correctamente.`);
});


