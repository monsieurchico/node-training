import 'colors'
import Assert from '../../lib/assert'
import arrayToString from './correction'

console.log('Array > exo3'.blue)
console.log(`Convertir le contenu d\'un tableau en chaîne de caractères`.green)
console.log(`
Exemples :

const arr = [ '12', 'test', 13 ]

0 => 12
1 => test
2 => 13
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
    source: arrayToString(['12', 'test', 13]),
    expected: `0 => 12
1 => test
2 => 13`
})