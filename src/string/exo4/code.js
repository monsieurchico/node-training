import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// recherche une sous-chaine dans une chaine de caractère

const string = 'ma super Chaine de Caractère'

const find = (str, subString) => {
    return str.indexOf(subString)
}

console.log('Test: find sub string in main string'.blue)
Assert.equals(find(string, 'Chaine'), 9)