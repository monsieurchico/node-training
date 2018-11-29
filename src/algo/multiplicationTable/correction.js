const getMultiplicationTable = (number) => {
    const maxNumber = number * number
    const charLength = ('' + maxNumber).length + 1

    let grid = ''
    for (let i = 1; i <= number; i++) {
        let line = '|'
        for (let j = 1; j <= number; j++) {
            let cellValue = ''.concat(i * j)
            let cell = ' '.concat(cellValue.padEnd(charLength, ' '), '|')
            line += cell
        }
        grid += line.trim()
        if (i < number) {
            grid += "\n"
        }
    }

    return grid
}

export default getMultiplicationTable
