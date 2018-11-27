import 'colors'
import Assert from '../../lib/assert'
import getUrlContent from './correction'

console.log('Api > exo1'.blue)
console.log('Appeler une URL et afficher son contenu'.green)
console.log(`@see
node-fetch
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

const test = async () => {
    const source = await getUrlContent('https://jsonplaceholder.typicode.com/todos/1')
    Assert.equals({
        source,
        expected: {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        }
    })
}

test()
