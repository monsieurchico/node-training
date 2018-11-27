const arrayToStringWithLoop = (arr, glue) => {
    let str = ''
    arr.map((element, index) => {
        str += element
        if (index < arr.length - 1) {
            str += glue
        }
    })

    return str
}
const arrayToStringWithJoin = (arr, glue) => {
    return arr.join(glue)
}

export { arrayToStringWithLoop, arrayToStringWithJoin }