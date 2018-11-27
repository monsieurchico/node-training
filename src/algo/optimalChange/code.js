import 'colors'
import Assert from '../../lib/assert'
import getOptimalChange from './correction'

console.log('Algo > optimiseur de rendu de monnaie'.blue)
import 'colors'

console.log(`Les supermarchés s’équipent de plus en plus de caisses automatiques.La plupart de ces caisses n’acceptent que le paiement par carte bancaire bien qu’une part non négligeable de consommateurs paye encore en espèces(avec des billets et des pièces).

Une des problématiques rencontrées avec le paiement en espèces est le rendu de monnaie: comment rendre une somme donnée de façon optimale, c'est-à-dire avec le nombre minimal de pièces et billets ? C'est un problème qui se pose à chacun de nous quotidiennement, à fortiori aux caisses automatiques.

Dans cet exercice, on vous demande d’essayer de trouver une solution optimale pour rendre la monnaie dans un cas précis: quand une caisse automatique ne contient que des pièces de `, '2€'.green, ', des billets de', '5€'.green, 'et de', '10€'.green)

console.log(`Pour simplifier le problème, nous considérerons que toutes ces pièces et billets sont disponibles en`, 'quantité illimitée'.green, `.

Voici quelques exemples de rendu de monnaie:`)

const examples = [
    {
        'Monnaie à rendre': '1',
        'Solutions possibles': 'Impossible',
        'Solution optimale': 'Impossible'
    },
    {
        'Monnaie à rendre': '6',
        'Solutions possibles': '2 + 2 + 2',
        'Solution optimale': '2 + 2 + 2'
    },
    {
        'Monnaie à rendre': '10',
        'Solutions possibles': ['2 + 2 + 2 + 2 + 2', '5 + 5', '10'].join("\n"),
        'Solution optimale': '10'
    },
    {
        'Monnaie à rendre': '9223372036854775807',
        'Solutions possibles': '...',
        'Solution optimale': '(10 * 922337203685477580) + 5 + 2'
    }
]

console.table(examples)

console.log(`Le rendu de monnaie est exprimé par un objet`, 'Change'.green, `.Cet objet a 3 propriétés: `, 'coin2'.green, ', ', 'bill5'.green, 'et ', 'bill10'.green, ` qui, respectivement, stockent le nombre de pièces de 2€, de billets de 5€ et de billets de 10€.

Par exemple, si on reprend l’exemple n°2 du tableau(6€), on devrait obtenir un objet Change avec:
`, 'coin2'.green, ` vaut `, '3'.green, `(3 pièces de 2€)
`, 'bill5'.green, ` vaut `, '0'.green, `(pas de billet de 5€)
`, 'bill10'.green, ` vaut `, '0'.green, `(pas de billet de 10€)

Implémentez la fonction`, 'optimalChange(value)'.green, `qui retourne un objet`, 'Change'.green, `contenant les pièces et billets dont la somme vaut`, 'value'.green, `. S’il est impossible de rendre la monnaie (comme dans l’exemple n°1), retournez`, 'NULL'.green, `.

Votre solution devra toujours rendre la monnaie quand c’est possible et avec le nombre minimal de pièces et billets.`)

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

const computeChangeAmount = ({ coin2, bill5, bill10 }) => {
    return coin2 * 2 + bill5 * 5 + bill10 * 10
}

console.log("\n" + 'Test 1'.blue)
Assert.equals({
    source: computeChangeAmount(getOptimalChange(10)),
    expected: 10
})

Assert.equals({
    source: getOptimalChange(10),
    expected: { coin2: 0, bill5: 0, bill10: 1 }
})

console.log("\n" + 'Test 2'.blue)

Assert.equals({
    source: computeChangeAmount(getOptimalChange(10)),
    expected: 10
})

Assert.equals({
    source: getOptimalChange(10),
    expected: { coin2: 0, bill5: 0, bill10: 1 }
})

console.log("\n" + 'Test 3'.blue)

Assert.equals({
    source: getOptimalChange(1),
    expected: null
})

console.log("\n" + 'Test 4'.blue)

Assert.equals({
    source: computeChangeAmount(getOptimalChange(2147483642)),
    expected: 2147483642
})

Assert.equals({
    source: getOptimalChange(2147483642),
    expected: { coin2: 1, bill5: 0, bill10: 214748364 }
})

console.log("\n" + 'Test 5'.blue)

Assert.equals({
    source: computeChangeAmount(getOptimalChange(2147483643)),
    expected: 2147483643
})

Assert.equals({
    source: getOptimalChange(2147483643),
    expected: { coin2: 4, bill5: 1, bill10: 214748363 }
})

console.log("\n" + 'Test 6'.blue)

Assert.equals({
    source: computeChangeAmount(getOptimalChange(31)),
    expected: 31
})

Assert.equals({
    source: getOptimalChange(31),
    expected: { coin2: 3, bill5: 1, bill10: 2 }
})

console.log("\n" + 'Test 7'.blue)

Assert.equals({
    source: getOptimalChange(3),
    expected: null
})

console.log("\n" + 'Test 8'.blue)

Assert.equals({
    source: computeChangeAmount(getOptimalChange(16)),
    expected: 16
})

Assert.equals({
    source: getOptimalChange(16),
    expected: { coin2: 3, bill5: 0, bill10: 1 }
})