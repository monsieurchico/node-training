import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des tableaux
 */

/*
 * Parcourir le tableau et afficher son contenu sous la forme :
 *
 * cle1 => value1
 * cle2 => value2
 * cle3 => value3
 * ...
 * 
 * @see Array.map(elem, index)
 * @see multi lines string
 */
const display = (array) => {
    array.map((elem, index) => {
        console.log(`${index} => ${elem}`)
    })
}

display(['12', 'toto', 'sdfg', 3456])