import 'colors'
import Assert from '../../lib/assert'
import convertToUpperCase from './correction'

console.log('Algo > Simple convertisseur en majuscule'.blue)
console.log(`Passer une chaîne de caractères en MAJUSCULE (sans utiliser toUpperCase)
Vous ne gèrerez que les lettres comprises entre a et z (donc pas les accents).`.green)
console.log('')

console.log('Help'.blue)
console.log(`String.fromCharCode(65) => A
String.fromCharCode(90) => Z
String.fromCharCode(97) => a
String.fromCharCode(122) => z
'A'.charCodeAt(0) => 65
'a'.charCodeAt(0) => 97
`)

/**
 * code
 * 
 * @todo
 * - Remove import of correction
 * - Write your own correction below to make the tests work
 */


/**
 * test
 */

console.log('Tests'.blue)
Assert.equals({
    source: convertToUpperCase('ma super Chaine de Caracteres'),
    expected: 'MA SUPER CHAINE DE CARACTERES'
})
