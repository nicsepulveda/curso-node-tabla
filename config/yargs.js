const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
        describe: 'Muestra la tabla de multiplicar'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que multiplo llega la tabla'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .check((argv, option) => {
        if (isNaN(argv.h)) {
            throw 'El multiplo tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;