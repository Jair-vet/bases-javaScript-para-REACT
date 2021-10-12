
// Desestructuración 

const persona = {
    nombre: 'Tony',
    edad: 44,
    clave: 'Ironman',
};

// const {nombre:nombre2} = persona;  // En dado caso de que exista un nombre similar asi se renombra
// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({clave, nombre, edad, rango = 'Capitan'}) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad, 
        latlng: {
            lat: 123.4634,
            lng: 12.1234
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} =  retornaPersona( persona );
console.log(nombreClave, anios);
console.log(lat, lng);



