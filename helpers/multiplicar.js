const fs = require('fs');
const colors = require('colors')

const crearArchivoTabla = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = ''
        let nombreArchivo = '';



        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar == true) {
            console.log('========================='.green);
            console.log('     tabla del:'.green + colors.blue(base));
            console.log('========================='.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        nombreArchivo = `tabla-${base}.txt`;
        return (nombreArchivo)

    } catch (err) {
        throw err
    }


}

module.exports = {
    crearArchivoTabla
}