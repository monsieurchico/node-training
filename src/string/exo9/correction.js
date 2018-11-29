const strlen = (str) => {
    let i = 0
    while (typeof str[i++] !== 'undefined') { }
    return i - 1
}

export default strlen
