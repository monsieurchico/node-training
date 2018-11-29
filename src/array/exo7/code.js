import 'colors'
import Assert from '../../lib/assert'
import ucwords from './correction'

console.log('String > exo9'.blue)
console.log('Créer une fonction qui passe le première caractère de tous les mots d\'une chaîne en majuscule'.green)
console.log(`@example
ucfirst('Romain derocle') => Romain Derocle
ucfirst('romain Derocle') => Romain Derocle
ucfirst('roMain deRoClE') => RoMain DeRoClE

@see
String.prototype.charAt
String.prototype.toUpperCase
String.prototype.slice
String.prototype.split
Array.prototype.join
Array.prototype.map
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
    source: ucwords('Romain'),
    expected: 'Romain'
})

Assert.equals({
    source: ucwords('roMain'),
    expected: 'RoMain'
})

Assert.equals({
    source: ucwords('romain derocle'),
    expected: 'Romain Derocle'
})

Assert.equals({
    source: ucwords('r d'),
    expected: 'R D'
})