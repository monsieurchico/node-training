import 'colors'

const equals = ({ source, expected }) => {
    console.log('Compare source', source, 'with expectation', expected)

    if (typeof expected === 'object') {
        console.log(
            isObjectEqual(source, expected)
                ? ' => OK'.green
                : ' => ERROR'.red
        )
    } else {
        console.log(
            source === expected
                ? ' => OK'.green
                : ' => ERROR'.red
        )
    }
}

const isObjectEqual = (a, b) => {
    // Create arrays of property names
    var aProps = (a !== null && typeof a !== 'undefined')
        ? Object.getOwnPropertyNames(a)
        : []

    var bProps = (b !== null && typeof b !== 'undefined')
        ? Object.getOwnPropertyNames(b)
        : []

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

export default { equals }