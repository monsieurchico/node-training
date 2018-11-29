const concat3StringsVersion1 = (str1, str2, str3) => {
    return str1.concat(str2, str3)
}

const concat3StringsVersion2 = (str1, str2, str3) => {
    return str1 + str2 + str3
}

const concat3StringsVersion3 = (str1, str2, str3) => {
    return `${str1}${str2}${str3}`
}

export { concat3StringsVersion1, concat3StringsVersion2, concat3StringsVersion3 }
