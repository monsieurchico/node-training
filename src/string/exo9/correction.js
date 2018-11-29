const strlen = (str) => {
    let len = 0, i = 0
    while (typeof str[i++] !== 'undefined') {
        len++
    }

    return len
}

export default strlen
