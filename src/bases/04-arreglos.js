
// Arreglos en Js
// const arreglo = new Array();
const arreglo = [1,2,3,4];
// arreglo.push(1);  El push modifica el objeto principal
// arreglo.push(2);    
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];  // Extrae la información 
// arreglo2.push(5);

// Arreglo.map() => crea un nuevo arreglo
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);




