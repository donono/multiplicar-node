const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El límite ingresado: ${limite} no es un número.`)
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ingresada: ${base} no es un número.`);
        }
        if (!Number(limite)) {
            reject(`El límite ingresado: ${limite} no es un número.`)
        }

        console.log("===============".america);
        console.log(`Tabla de base ${base}`.green);
        console.log("===============".america);
        let data = '';

        for (i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}