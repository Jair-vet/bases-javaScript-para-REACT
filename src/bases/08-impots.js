// import {heroes} from './data/heroes.js';
// import {heroes} from './data/heroes'
import  heroes from "../data/heroes";

const getHeroeById = (id) => {
    return  heroes.find( heroe => heroe.id === id );
}
console.log(getHeroeById(1));


const getHeroesByOwner = ( owner ) =>  heroes.filter( (heroe) => heroe.owner === owner );

console.log( getHeroesByOwner('Marvel') );
