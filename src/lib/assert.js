import 'colors'

const equals = (source, expected) => {
    console.log('Compare source', ''.concat(source).blue, 'with expectation', ''.concat(expected).green)
    if (source === expected) {
        console.log('OK'.green)
        return true
    }
    console.error(`Invalid equals assertion: Expected "${expected}" (given "${source}")`.red)
    return false
}

const arrayEquals = (array1, array2) => {
    const source = array1.join(', ')
    const expected = array2.join(', ')

    console.log('Compare source', source.blue, 'with expectation', expected.green)
    
    if (JSON.stringify(array1) === JSON.stringify(array2)) {
        console.log('OK'.green)
        return true
    }
    
    console.error(`Invalid equals assertion: Expected "${expected}" (given "${source}")`.red)
    return false
}

export default { equals, arrayEquals }