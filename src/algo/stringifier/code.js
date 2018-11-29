import 'colors'
import Assert from '../../lib/assert'
import stringifier from './correction'

/**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */

console.log('Algo > stringifier'.blue)
console.log(`Vous devez créer une fonction qui transforme une valeur Javascript (object, array, string, etc...) en une châine de caractère JSON`)
console.log(`Attention, vous n'avez pas le droit d'utiliser la fonction JSON.stringify !
@example

stringifier({ lastname: 'Romain' })
    => {"lastname":"Romain"}

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
    source: stringifier({ firstname: 'Romain' }),
    expected: '{"firstname":"Romain"}'
})

Assert.equals({
    source: stringifier({ firstname: 'Romain', lastname: 'DEROCLE' }),
    expected: '{"firstname":"Romain","lastname":"DEROCLE"}'
})

Assert.equals({
    source: stringifier(['value', 10]),
    expected: '["value",10]'
})

Assert.equals({
    source: stringifier([{ firstname: 'Romain' }, { firstname: 'jean' }]),
    expected: '[{"firstname":"Romain"},{"firstname":"jean"}]'
})

Assert.equals({
    source: stringifier({
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
    }),
    expected: '{"id":12,"name":"Romain Derocle","address":{"number":138,"street":"quai des chartrons","zip":"33300","city":"Bordeaux"},"helmets":["hedon","xlite","hedon"],"motos":[{"brand":"Harley","year":2014},{"brand":"Triumph","year":2015},{"brand":"Harley","year":2016}]}'
})

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

Assert.equals({
    source: stringifier(new Person('Romain', 'DEROCLE')),
    expected: '{"firstname":"Romain","lastname":"DEROCLE"}'
})

Assert.equals({
    source: stringifier({ firstname: '"Romain"' }),
    expected: '{"firstname":"\\"Romain\\""}'
})