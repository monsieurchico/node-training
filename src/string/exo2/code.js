import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// passer une chaine de caractère en majuscule

const string = 'ma super Chaine de Caractère'

const convertToUpperCase = (str) => {
    return str.toUpperCase()
}

console.log('Test: convert string to upper case'.blue)
Assert.equals(convertToUpperCase(string), 'MA SUPER CHAINE DE CARACTÈRE')