import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// remplacer une portion de chaine par une autre

const string = 'ma super Chaine de Caractère'

const replace = (str, search, replacement) => {

}

console.log('Test: replace string'.blue)
Assert.equals(replace(string, 'Chaine', 'liste'), 'ma super liste de Caractère')