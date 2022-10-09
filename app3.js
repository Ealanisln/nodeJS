console.log('Inicio de programa'); // 1ero. 

setTimeout( () => {
    console.log('Primer TimeOut'); // 5to. 
}, 3000 );

setTimeout( () => {
    console.log('Segundo TimeOut'); // 3ero. 
}, 0 );

setTimeout( () => {
    console.log('Tercero TimeOut'); // 4to.
}, 0 );




console.log('Fin de programa'); // 2do. 