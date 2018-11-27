import 'colors'
import Assert from '../../lib/assert'
import filterArray from './correction'

console.log('Array > exo4'.blue)
console.log(`Filtrer un tableau afin d'en extraire uniquement les valeurs numériques. Le résultat doit être trié.`.green)
console.log(`
Exemples :

const arr = [ '12', 57, 'test', 13, {}, [] ]

filter(arr) => [13, 57]
`)
console.log(`@see
Array.prototype.filter
Array.prototype.sort
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
    source: filterArray(['toto', 57, 32, {}, [], 12]),
    expected: [12, 32, 57]
})