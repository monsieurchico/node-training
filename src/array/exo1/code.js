import 'colors'
import Assert from '../../lib/assert'
import { loopWithFor, loopWithForEach, loopWithMap } from './correction'

console.log('Array::exo1'.blue)
console.log('Boucler à travers un tableau de 3 façons différentes'.green)
console.log(' > en utilisant une boucle for')
console.log(' > en utilisant un Array.prototype.forEach')
console.log(' > en utilisant un Array.prototype.map')
console.log('')

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */


/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: convertToLowerCase('ma super Chaîne de Caractères'),
    expected: 'ma super chaîne de caractères'
})











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