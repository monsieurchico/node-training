import fetch from 'node-fetch'

const getUrlContent = async (url) => {
    const res = await fetch(url)
    return await res.json()
}

export default getUrlContent
