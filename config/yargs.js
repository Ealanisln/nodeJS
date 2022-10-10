const argv = require('yargs')
                .option('n', {
                    alias: 'number',
                    type: 'number',
                    demandOption: true,
                    describe: 'Is the base number.'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: true,
                    describe: 'Show a graphical list of the result.'
                })
                .option('u', {
                    alias: 'until',
                    type: 'number',
                    default: 10,
                    describe: 'Specifies the limit for the multiply table.'
                })
                .check((argv, options) => {
                    if( isNaN( argv.n)) {
                        throw 'The first argument should be a number '
                    }
                    return true;
                })
                .argv;

module.exports = argv;