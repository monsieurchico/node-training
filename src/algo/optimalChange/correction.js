const getOptimalChange = (value) => {
    if (value < 2 || value === 3) {
        return null
    }

    const change = {
        coin2: 0,
        bill5: 0,
        bill10: 0
    }

    if (value % 10 === 0) {
        change.bill10 = value / 10
        return change
    }

    if ((value - 5) % 2 === 0) {
        change.bill5 = 1
        value -= 5
    }

    change.bill10 = Math.floor(value / 10)
    value -= change.bill10 * 10

    change.coin2 = value / 2

    return change
}

export default getOptimalChange
