
//   <--------  Ya no es Recomendado manejar asi las Funciones ---->
// // Funciones en Js
// function saludar(nombre){
//     return `Hola, ${ nombre }`;
// }
// 
// saludar = 30;
// 
// // console.log( saludar('Goku') );
// 
// console.log(saludar);

// 
// const saludar = function( nombre ){
//     return `Hola, ${nombre}`;
// }
// console.log(saludar);

// Funciones de Flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}
// Funcion flecha reducida
const saludar3 = (nombre) => `Hola, ${nombre}`;


console.log(saludar2('Jair'));
console.log(saludar3('Juan'));

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Pai123'
});

const user = getUser();
console.log(user);


// Tarea
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC456',
    username: nombre
 })

const usuarioActivo = getUsuarioActivo('Carlos');
console.log(usuarioActivo);




