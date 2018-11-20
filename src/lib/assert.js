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

export default { equals }