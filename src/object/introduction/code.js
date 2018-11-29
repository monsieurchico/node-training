import Assert from '../../lib/assert'
const { equals: assertEquals } = Assert

const USER = {
    id: 12,
    name: 'Romain Derocle',
    address: {
        number: 138,
        street: 'quai des chartrons',
        zip: '33300',
        city: 'Bordeaux'
    },
    helmets: ['hedon', 'xlite', 'hedon'],
    motos: [
        {
            brand: 'Harley',
            year: 2014
        },
        {
            brand: 'Triumph',
            year: 2015
        },
        {
            brand: 'Harley',
            year: 2016
        }
    ]
}

const nameOldFashioned = USER.name
const addressOldFashioned = USER.address
const zipCodeOldFashioned = USER.address.zip
const secondHelmetOldFashioned = USER.helmets[1]
const brandOfSecondMotoOldFashioned = USER.motos[1].brand

const {
    name,
    address,
    address: { zip },
    helmets: [, secondHelmet],
    motos: [, { brand: brandOfSecondMoto }]
} = USER

// console.log({ name })
assertEquals({ source: name, expected: nameOldFashioned })

// console.log({ address })
assertEquals({ source: address, expected: addressOldFashioned })

assertEquals({ source: zip, expected: zipCodeOldFashioned })

assertEquals({ source: secondHelmet, expected: secondHelmetOldFashioned })

assertEquals({ source: brandOfSecondMoto, expected: brandOfSecondMotoOldFashioned })
