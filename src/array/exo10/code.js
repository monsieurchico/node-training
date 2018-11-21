import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des tableaux
 */

/*
Convertir un tableau en chaine de caractères
*/

/*
 * Utiliser une boucle for et la concatenation
 */
const convertWithFor = (array, glue) => {
    let str = ''
    for (let i = 0 ; i < array.length ; i++) {
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
    convertWithFor(['ma', 'chaine', 'de caractères'], ' '),
    'ma chaine de caractères'
)

Assert.equals(
    convertWithJoin(['ma', 'chaine', 'de caractères'], ' '),
    'ma chaine de caractères'
)