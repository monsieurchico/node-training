const stringifier = (data) => {
    if (typeof data === 'undefined') {
        return data
    }

    if (data === null) {
        return data
    }

    if (typeof data === 'string') {
        data = data.replace(new RegExp(/"/g), '\\"')
        return '"'.concat(data, '"')
    }

    if (typeof data === 'number') {
        return data
    }

    if (typeof data === 'object') {
        if (Array.isArray(data)) {
            const values = []
            Object.values(data).map((val) => {
                values.push(`${stringifier(val)}`)
            })

            return `[${values.join(',')}]`
        }

        const values = []
        Object.entries(data).map(([key, val]) => {
            values.push(`"${key}":${stringifier(val)}`)
        })

        return `{${values.join(',')}}`
    }
}

export default stringifier
