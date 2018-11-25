import 'colors'

const equals = ({ source, expected }) => {
    console.log('Compare source', ''.concat(source).blue, 'with expectation', ''.concat(expected).green)
    if (source === expected) {
        console.log('OK'.green)
        return true
    }
    console.error(`Invalid equals assertion: Expected "${expected}" (given "${source}")`.red)
    return false
}

const arrayEquals = ({ source, expected }) => {
    source = source.join(', ')
    expected = expected.join(', ')

    console.log('Compare source', source.blue, 'with expectation', expected.green)

    if (JSON.stringify(source) === JSON.stringify(expected)) {
        console.log('OK'.green)
        return true
    }

    console.error(`Invalid equals assertion: Expected "${expected}" (given "${source}")`.red)
    return false
}

const objectEquals = ({ source, expected }) => {
    source = JSON.stringify(source)
    expected = JSON.stringify(expected)
    console.log('Compare source', source.blue, 'with expectation', expected.green)

    if (source === expected) {
        console.log('OK'.green)
        return true
    }

    console.error(`Invalid equals assertion: Expected "${expected}" (given "${source}")`.red)
    return false
}

export default { equals, arrayEquals, objectEquals }