import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des tableaux
 */

/*
Construire un tableau à partir des éléments d'un autre tableau
*/

/*
 * Utiliser l'ajout d'éléments avec []
 */
const buildArrayWithFor = (source) => {

}

/*
 * Utiliser Array.push
 */
const buildArrayWithPush = (source) => {

}

/*
 * Utiliser les spread
 */
const buildArrayWithSpread = (source) => {

}

Assert.arrayEquals(
    buildArrayWithFor(['10', '12', 'toto', 1]),
    ['10', '12', 'toto', 1]
)

Assert.arrayEquals(
    buildArrayWithPush(['DFG', '45', 'toto', 234]),
    ['DFG', '45', 'toto', 234]
)

Assert.arrayEquals(
    buildArrayWithSpread(['DFG', '45', 'toto', 234]),
    ['DFG', '45', 'toto', 234]
)
