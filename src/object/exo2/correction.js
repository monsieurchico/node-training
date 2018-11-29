const objectToString = (obj) => {
    let str = ''
    const attributes = Object.entries(obj)

    attributes.map((element, index) => {
        const key = element[0]
        const value = element[1]
        str += `${key} => ${value}`
        if (index < attributes.length - 1) {
            str += "\n"
        }
    })

    return str
}

export default objectToString
