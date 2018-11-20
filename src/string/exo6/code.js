import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

/*
convertir une chaine en majuscule sans utiliser String.toUpperCase()
@see String.fromCharCode(), 
@see String.fromCodePoint(), 
@help
String.fromCharCode(65) => A
String.fromCharCode(90) => Z
String.fromCharCode(97) => a
String.fromCharCode(122) => z
'A'.charCodeAt(0) => 65
'a'.charCodeAt(0) => 97
*/

const toUpperCase = (str) => {

}

console.log('Test: to upper case string'.blue)
Assert.equals(
    toUpperCase('ma super Chaine de caracteres 12'),
    'MA SUPER CHAINE DE CARACTERES 12'
)