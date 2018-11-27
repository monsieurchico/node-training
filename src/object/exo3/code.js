import 'colors'
import Assert from '../../lib/assert'
import {
    getName,
    getAddress,
    getAddressCity,
    getHelmets,
    getSecondHelmet,
    getSecondMotoBrand
} from './correction'

console.log('Object > exo3'.blue)
console.log('Destructurer un objet pour en extraire des morceaux'.green)
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

const USER = {
    id: 12,
    name: 'Romain Derocle',
    address: {
        number: 138,
        street: 'quai des chartrons',
        zip: '33300',
        city: 'Bordeaux'
    },
    helmets: ['hedon', 'xlite', 'hedon'],
    motos: [
        {
            brand: 'Harley',
            year: 2014
        },
        {
            brand: 'Triumph',
            year: 2015
        },
        {
            brand: 'Harley',
            year: 2016
        }
    ]
}

Assert.equals({
    source: getName(USER),
    expected: 'Romain Derocle'
})

Assert.equals({
    source: getAddress(USER),
    expected: {
        number: 138,
        street: 'quai des chartrons',
        zip: '33300',
        city: 'Bordeaux'
    }
})

Assert.equals({
    source: getAddressCity(USER),
    expected: 'Bordeaux'
})

Assert.equals({
    source: getHelmets(USER),
    expected: ['hedon', 'xlite', 'hedon']
})

Assert.equals({
    source: getSecondHelmet(USER),
    expected: 'xlite'
})

Assert.equals({
    source: getSecondMotoBrand(USER),
    expected: 'Triumph'
})
