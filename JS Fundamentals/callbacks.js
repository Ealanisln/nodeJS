// setTimeout( () => {
//     console.log('Hola mundo')
// }, 1000 );


const getUsuarioByID = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Alaniso'
    }
    setTimeout( () => {
        callback(usuario)
    }, 1500)

}

getUsuarioByID( 20, ( usuario ) => {
    console.log(usuario);
    console.log( usuario.nombre.toUpperCase());
} );

// El callback es una funcion que se manda como argumento. 