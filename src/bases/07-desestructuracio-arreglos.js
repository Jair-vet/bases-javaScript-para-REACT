
// Desestructuracion en Arreglos
const personajes = ['Goku','Vegeta','Trunks'];

const [ , ,p3 ] = personajes;  // Trabajan con posición 

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}
const [l, n] = retornaArreglo();
console.log(l,n);


//  -- Tarea --
const usesState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}


const [nombre, setNombre] = usesState('Goku');

console.log(nombre);
setNombre();


