import 'colors'

const equals = ({ source, expected }) => {
    console.log('Compare source', source, 'with expectation', expected)

    if (typeof expected === 'object') {
        console.log(
            JSON.stringify(source) === JSON.stringify(expected)
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

export default { equals }