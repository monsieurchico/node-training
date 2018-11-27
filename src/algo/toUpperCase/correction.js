const convertToUpperCase = (str) => {
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        const letter = str[i]
        const code = letter.charCodeAt(0)
        let newLetter = letter
        if (code >= 97 && code <= 122) {
            newLetter = String.fromCharCode(code - 32)
        }
        newString = newString.concat(newLetter)
    }

    return newString
}

export default convertToUpperCase
