const filterArray = (arr) => {
    const filterFunction = (element) => {
        return Number.isInteger(element)
    }

    return arr.filter(filterFunction).sort()
}

export default filterArray
