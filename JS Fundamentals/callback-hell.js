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



const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e =>  e.id === id)?.nombre
    
    if ( empleado ) {
       callback (null, empleado);
    } else {
        return `Empleado con ID ${id} no existe`;
}
}

const getSalario = ( id, callback) => {
    const salario = salarios.find( s => s.id === id)?.salario;
    if ( salario ) {
        callback ( null, salario);
    }
    else {
        callback (`No existe salario para el id ${id }`)
    }
}

const id = 3;

getEmpleado(id, ( error, empleado )=> {
    if ( error ) {
        console.log('ERROR!');
        return console.log(error);
    }
    getSalario(id, (error, salario) => {

        if (error ) {
            return console.log(error);
        }
    
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })
    
    
} )


