import 'colors'
import Assert from '../../lib/assert'
import objectToString from './correction'

console.log('Object > exo2'.blue)
console.log(`Convertir le contenu d\'un objet en chaîne de caractères`.green)
console.log(`
Exemples :

const obj = { id: 12, username: 'Romain', city: 'Bordeaux' }

id => 12
username => Romain
city => Bordeaux
`)
console.log(`@see
Object.prototype.entries
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
    source: objectToString({ id: 12, username: 'Romain', city: 'Bordeaux' }),
    expected: `id => 12
username => Romain
city => Bordeaux`
})