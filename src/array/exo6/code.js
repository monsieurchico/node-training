import 'colors'
import Assert from '../../lib/assert'
import sum from './correction'

console.log('Array > exo5'.blue)
console.log(`Filtrer un tableau afin d'en extraire uniquement les valeurs numériques. Calculer la somme des valeurs.`.green)
console.log(`
Exemples :

const arr = [ '12', 57, 'test', 13, {}, [] ]

sum(arr) => 70
`)
console.log(`@see
Array.prototype.filter
Array.prototype.reduce
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
    source: sum(['toto', 57, 32, {}, [], 12]),
    expected: 101
})