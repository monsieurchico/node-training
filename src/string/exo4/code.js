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

Assert.equals(find(string, 'Chaine'), 9)