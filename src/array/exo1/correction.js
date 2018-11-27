const copyWithFor = (source) => {
    const result = []
    for (let i = 0; i < source.length; i++) {
        result.push(source[i])
    }

    return result
}

const copyWithForEach = (source) => {
    const result = []
    source.forEach((element) => {
        result.push(element)
    })

    return result
}

const copyWithMap = (source) => {
    const result = []
    source.map((element) => {
        result.push(element)
    })

    return result
}

export { copyWithFor, copyWithForEach, copyWithMap }
