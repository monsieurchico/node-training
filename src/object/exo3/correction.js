
const getName = (user) => {
    const { name } = user
    return name
}

const getAddress = (user) => {
    const { address } = user
    return address
}

const getAddressCity = (user) => {
    const { address: { city } } = user
    return city
}

const getHelmets = (user) => {
    const { helmets } = user
    return helmets
}

const getSecondHelmet = (user) => {
    const { helmets: [, second] } = user
    return second
}

const getSecondMotoBrand = (user) => {
    const { motos: [, { brand }] } = user
    return brand
}

export {
    getName,
    getAddress,
    getAddressCity,
    getHelmets,
    getSecondHelmet,
    getSecondMotoBrand
}