import fetch from 'node-fetch'

const callUrl = async (url) => {
    const res = await fetch(url)
    return res.json()
}