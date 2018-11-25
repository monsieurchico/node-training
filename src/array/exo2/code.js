import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des tableaux
 */

/*
Convertir un tableau en chaîne de caractères
*/

/*
 * Utiliser une boucle for et la concatenation
 */
const convertWithFor = (array, glue) => {
    let str = ''
    for (let i = 0; i < array.length; i++) {
        str += array[i] + glue
    }
    return str.trim()
}

/*
 * Utiliser Array.join
 */
const convertWithJoin = (array, glue) => {
    return array.join(glue)
}

Assert.equals(
    convertWithFor(['ma', 'chaîne', 'de caractères'], ' '),
    'ma chaîne de caractères'
)

Assert.equals(
    convertWithJoin(['ma', 'chaîne', 'de caractères'], ' '),
    'ma chaîne de caractères'
)