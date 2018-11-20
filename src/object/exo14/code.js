import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des objets
 */

/*
 * Créer une fonction qui retourne un object 
 */

const factory = (id, name, address, zipcode, city) => {
    
}

Assert.objectEquals(
    factory(1, 'Romain Derocle', '138 Quai des Chartrons', '33300', 'Bordeaux'),
    { id: 1, name: 'Romain Derocle', address: '138 Quai des Chartrons', zipcode: '33300', city: 'Bordeaux' }
)