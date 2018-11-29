import 'colors'
import Assert from '../../lib/assert'
import stringToArray from './correction'

console.log('Array > exo3'.blue)
console.log(`Convertir une chaîne de caractères en tableau de caractères.`.green)
console.log(`
Exemples :

const str = 'ma chaîne'

=> ['m', 'a', ' ', 'c', 'h', 'a', 'î', 'n', 'e']
`)

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
    source: stringToArray('ma chaîne de caractères'),
    expected: ['m', 'a', ' ', 'c', 'h', 'a', 'î', 'n', 'e', ' ', 'd', 'e', ' ', 'c', 'a', 'r', 'a', 'c', 't', 'è', 'r', 'e', 's']
})