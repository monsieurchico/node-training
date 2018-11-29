import 'colors'
import Assert from '../../lib/assert'
import User from './correction'

console.log('Class > exo1'.blue)
console.log('Créer une classe User contenant un accesseur magique "fullname" :'.green)
console.log(`    > firstname: string (default => '')
    > lastname: string (default => '')

    @example
    const user = new User({ firstname: 'Romain', lastname: 'Derocle' })
    user.fullname => 'Romain Derocle'
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
    source: new User({ firstname: 'Romain', lastname: 'Derocle' }).fullname,
    expected: 'Romain DEROCLE'
})

Assert.equals({
    source: new User({ firstname: 'jean', lastname: 'dupont' }).fullname,
    expected: 'Jean DUPONT'
})