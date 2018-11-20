import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// supprimer les espaces en début et fin de chaine

const string = '  ma super Chaine de Caractère   '

const removeSpaces = (str) => {
    return str.trim();
}

console.log('Test: remove spaces'.blue)
Assert.equals(removeSpaces(string), 'ma super Chaine de Caractère')