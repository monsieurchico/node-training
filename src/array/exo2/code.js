import 'colors'
import Assert from '../../lib/assert'
import { arrayToStringWithLoop, arrayToStringWithJoin } from './correction'

console.log('Array > exo2'.blue)
console.log('Convertir un tableau en chaîne de caractères'.green)
console.log(' > sans utiliser Array.prototype.join'.green)
console.log(' > en utilisant Array.prototype.join'.green)
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

console.log("\n" + 'Test 1'.blue)
Assert.equals({
    source: arrayToStringWithLoop(['ma chaîne', 'de', 'caractères'], ' '),
    expected: 'ma chaîne de caractères'
})

Assert.equals({
    source: arrayToStringWithLoop(['06', '07', '08', '09', '10'], '-'),
    expected: '06-07-08-09-10'
})

console.log("\n" + 'Test 2'.blue)

Assert.equals({
    source: arrayToStringWithJoin(['ma chaîne', 'de', 'caractères'], ' '),
    expected: 'ma chaîne de caractères'
})

Assert.equals({
    source: arrayToStringWithJoin(['06', '07', '08', '09', '10'], '-'),
    expected: '06-07-08-09-10'
})