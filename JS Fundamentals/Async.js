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

const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${ salario}`;
    } catch (error) {
        throw error;

    }

}


const id = 3;

getInfoUsuario( id )
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// Transforma la funcion en asincrona y devuelve una promesa. 