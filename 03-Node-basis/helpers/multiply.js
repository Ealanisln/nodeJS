const fs = require('fs');
const colors = require('colors');

const createFile = async( number = 5, list = false, until = 10 ) => {

    try {

        let salida = '';

        //creating a multiplication table
        for(let i = 1; i <= until; i++) {
        // multiply i with number
        const result = i * number;
        // display the result
        salida += `${number} * ${i} = ${result}\n`
        }

        if ( list ) {
            console.log('========================'.green)
            console.log('Table number'.white.bgBlack, colors.bgCyan( number))
            console.log('========================'.red)
            console.log(colors.green(salida));
        }

    fs.writeFileSync( `./output/tabla-${ number }.txt`, salida ); 

    return(`tabla-${number}.txt`);

    } catch ( error ) {
        throw error
    }

        
}

module.exports = {
    createFile
}