import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// supprimer les espaces en début et fin de chaine

const string = '  ma super Chaine de Caractère   '

const removeSpaces = (str) => {
    
}

Assert.equals(removeSpaces(string), 'ma super Chaine de Caractère')