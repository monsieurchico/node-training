const arrayToString = (arr) => {
    let str = ''
    arr.map((element, index) => {
        str += `${index} => ${element}`
        if (index < arr.length - 1) {
            str += "\n"
        }
    })

    return str
}

export default arrayToString
