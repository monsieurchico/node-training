import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// concatener des chaines de caracteres

const addString = (str1, str2, str3) => {
    return str1.concat(' ', str2, ' ', str3)
}

Assert.equals(addString(
    'ma super',
    'Chaine',
    'de caractères'
), 'ma super Chaine de caractères')