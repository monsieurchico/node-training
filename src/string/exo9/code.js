import 'colors'
import Assert from '../../lib/assert'
import strlen from './correction'

console.log('String > exo8'.blue)
console.log('Créer une fonction qui retourne la longueur d\'une chaîne de caractères.'.green)
console.log(`@example
strlen('Romain') => 6
`)
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
    source: strlen('Romain'),
    expected: 6
})

Assert.equals({
    source: strlen('T'),
    expected: 1
})

Assert.equals({
    source: strlen(''),
    expected: 0
})