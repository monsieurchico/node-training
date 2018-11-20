import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des tableaux
 */

/*
Parcourir un tableau et afficher ses éléments
*/

/*
Utiliser boucle for
*/
const loopWithFor = (array) => {
    for (let i = 0 ; i < array.length ; i++) {
        console.log(array[i])
    }
}

/*
Utiliser Array.forEach
*/
const loopWithForeach = (array) => {
    array.forEach(element => {
        console.log(element)
    })
}

/*
Utiliser Array.map
*/
const loopWithMap = (array) => {
    array.map(element => {
        console.log(element)
    })
}

console.log('loopWithFor'.blue)
loopWithFor([1, 345, 'toto', 34])
console.log(' ')

console.log('loopWithForeach'.blue)
loopWithForeach([1, 345, 'toto', 34])
console.log(' ')

console.log('loopWithMap'.blue)
loopWithMap([1, 345, 'toto', 34])
console.log(' ')