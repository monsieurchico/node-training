import 'colors'
import Assert from '../../../lib/assert'
import fetch from 'node-fetch'

/**
 * API
 */

/*
 * Appeler une URL avec fetch et async / await
 */
const callUrlWithPromise = async (url, callback) => {

}

const test = async () => {
    const response = await callUrlWithPromise('https://jsonplaceholder.typicode.com/todos/1')
    Assert.equals(response.userId, 1)
}

test()