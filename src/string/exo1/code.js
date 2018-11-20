import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// passer une chaine de caractère en minuscule

const string = 'ma super Chaine de Caractère'

const convertToLowerCase = (str) => {
}

console.log('Test: convert to string to lower case'.blue)
Assert.equals(convertToLowerCase(string), 'ma super chaine de caractère')