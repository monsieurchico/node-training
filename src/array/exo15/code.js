import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des tableaux
 */

/*
Filtrer un tableau

Compléter cette fonction pour qu'elle retourne un tableau contenant
uniquement les valeurs entieres.
Ces valeurs devront être triées

@see Array.filter
@see Array.sort
@see Number.isInteger
*/

const filter = (array, filteringFunction) => {
    const newArray = array.filter(filteringFunction)
    return newArray.sort()
}

const myFilteringFunction = (elem) => {
    return Number.isInteger(elem)
}

Assert.arrayEquals(
    filter(['10', 52, 12, 34, {}, []], myFilteringFunction),
    [12, 34, 52]
)