
const nombre = 'Carlos';
const apellido = 'Aceves';

// const nombreCompleto = nombre + ' ' + apellido;  // Concatenación
const nombreCompleto = `Hola 
${nombre }
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un Texto: ${getSaludo( nombre ) }`);


