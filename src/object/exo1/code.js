import 'colors'
import Assert from '../../lib/assert'
import factory from './correction'

console.log('Object > exo1'.blue)
console.log('Créer un object User à partir de valeurs'.green)
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
    source: factory(1, 'Romain Derocle', '138 Quai des Chartrons', '33300', 'Bordeaux'),
    expected: {
        id: 1,
        name: 'Romain Derocle',
        address: '138 Quai des Chartrons',
        zipcode: '33300',
        city: 'Bordeaux'
    }
})