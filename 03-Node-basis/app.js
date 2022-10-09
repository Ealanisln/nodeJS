const { createFile } = require('./helpers/multiply')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

createFile( argv.n, argv.l, argv.u )
    .then( nombreArchivo => console.log('Creado', nombreArchivo.bgBrightYellow))
    .catch( err => console.log('err'));




