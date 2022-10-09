const empleados = [
    {
        id: 1,
        nombre: 'Alaniso',
    },
    {
        id: 2,
        nombre: 'Pancho',
    },
    {
        id: 3,
        nombre: 'Roberta',
    }
]

const salarios = [
    {
        id: 1,
        salario: 700,
    },
    {
        id: 2,
        salario: 800,
    },
]



const getEmpleado = (id) => {

    return new Promise( ( resolve, reject) => {
        const empleado = empleados.find( e =>  e.id === id)?.nombre;
         ( empleado ) 
            ? resolve( empleado ) 
            : reject(`No existe el empleado con el ID ${id}`)
    } );
}

const getSalario = () => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id)?.salario;
        ( salario )
            ? resolve( salario )
            : reject(`El ID ${id} no tiene salario asignado`)
    } );
}


const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch ( error => console.log(error))

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch ( error => console.log(error))

// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El empleado`, empleado, `tiene un salario de:`, salario)
//             })
//             .catch ( err => console.log(err))
//             })
//     .catch ( err => console.log(error))

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    }) 
    .then( salario => console.log( `El empleado:`, nombre, 'tiene un salario de:', salario ))
    .catch( err => console.log( err ));