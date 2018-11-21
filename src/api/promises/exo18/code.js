import 'colors'
import Assert from '../../../lib/assert'
import fetch from 'node-fetch'

/**
 * API
 */

/*
 * Appeler une URL avec fetch et async / await
 */
const callUrl = async (url) => {
    const res = await fetch(url)
    return res.json()
}

const test = async () => {
    const response = await callUrl('https://jsonplaceholder.typicode.com/todos/1')
    Assert.equals(response.userId, 1)
}

test()