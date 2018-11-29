import 'colors'
import Assert from '../../lib/assert'
import User from './correction'

console.log('Class > exo1'.blue)
console.log('Créer une classe User contenant les propriétés suivantes :'.green)
console.log(`    > id: integer (default => 0)
    > username: string (default => '')
    > password: string (default => '')
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

const test1 = new User({ id: 12 })
Assert.equals({ source: test1.id, expected: 12 })
Assert.equals({ source: test1.username, expected: '' })
Assert.equals({ source: test1.password, expected: '' })

const test2 = new User({ id: 123, username: 'Romain' })
Assert.equals({ source: test2.id, expected: 123 })
Assert.equals({ source: test2.username, expected: 'Romain' })
Assert.equals({ source: test2.password, expected: '' })

const test3 = new User({ id: 1234, username: 'Romain', password: 'popopopo' })
Assert.equals({ source: test3.id, expected: 1234 })
Assert.equals({ source: test3.username, expected: 'Romain' })
Assert.equals({ source: test3.password, expected: 'popopopo' })