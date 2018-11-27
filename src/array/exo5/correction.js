const sum = (arr) => {
    const filterFunction = (element) => {
        return Number.isInteger(element)
    }

    const reducerFunction = (acc, val) => {
        return acc + val
    }

    return arr.filter(filterFunction).reduce(reducerFunction)
}

export default sum
