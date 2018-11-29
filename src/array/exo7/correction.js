const ucwords = (str) => {
    return str
        .split(' ')
        .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
        .join(' ')
}

export default ucwords
