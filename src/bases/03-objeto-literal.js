
const persona = {
    nombre: 'Carlos',
    apellido: 'Aceves',
    edad: 45,
    direccion: {
        ciudad: 'NewYork',
        zip: 4434342343,
        lat: 14.23234,
        lng: 13.33334
    }
};

// console.table({persona})

const persona2 = {...persona};  // copia del objeto, Pero este ya se puede modificar
persona2.nombre = 'Sara';
persona2.apellido= 'Daniella';

console.log(persona);
console.log(persona2);


