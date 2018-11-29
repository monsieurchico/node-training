class Person {
    constructor({ firstname = '', lastname = '', pets = [] }) {
        this.firstname = firstname
        this.lastname = lastname
        this.pets = []
        pets.map(pet => this.addPet(pet))
    }

    get fullname() {
        return this.firstname + ' ' + this.lastname
    }

    set fullname(value) {
        const [firstname, lastname] = value.split(' ')
        this.firstname = firstname
        this.lastname = lastname
    }

    addPet(pet) {
        if (!(typeof pet === 'object' && pet instanceof Pet)) {
            const type = typeof pet
            throw new Error(`Invalid pet (received type ${type}, expected Pet)`)
        }

        this.pets.push(pet)
    }

    getPetsByNumberOfLegs(num) {
        return this.pets.filter(elem => elem.numberOfLegs === num)
    }
}

class Pet {
    constructor({ race = '', nickname = '', color = '', numberOfLegs = 2 }) {
        this.race = race
        this.nickname = nickname
        this.color = color
        this.numberOfLegs = numberOfLegs
    }
}

const junior = new Pet({
    race: 'saint bernard',
    color: 'white & brown',
    numberOfLegs: 4,
    nickname: 'Junior'
})

const medor = new Pet({
    race: 'berger allemand',
    color: 'black',
    numberOfLegs: 4,
    nickname: 'medor'
})

const coco = new Pet({
    race: 'perroquet',
    color: 'green',
    numberOfLegs: 2,
    nickname: 'coco'
})

const anais = new Person({
    firstname: 'Anaïs',
    lastname: 'MILTENBERGER'
})

const romain = new Person({
    firstname: 'Romain',
    lastname: 'DEROCLE',
    pets: [
        coco, medor, junior
    ]
})

console.log(romain)
console.log('Les animaux qui ont 1 patte : ', romain.getPetsByNumberOfLegs(1))
console.log('Les animaux qui ont 2 pattes : ', romain.getPetsByNumberOfLegs(2))
console.log('Les animaux qui ont 4 pattes : ', romain.getPetsByNumberOfLegs(4))

class MyString {
    constructor(str) {
        this.str = str
    }

    get length() {
        return this.str.length
    }

    toUpperCase() {
        return this.str.toUpperCase()
    }

    toLowerCase() {
        return this.str.toUpperCase()
    }

    static fromCharCode(code) {
        return String.fromCharCode(code)
    }
}

const str = new MyString('pouet')
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(MyString.fromCharCode(65))