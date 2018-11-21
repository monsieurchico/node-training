import 'colors'
import Assert from '../../../lib/assert'
import fetch from 'node-fetch'

/**
 * API
 */

/*
 * Appeler une URL avec fetch et promises
 */
const callUrl = (url, callback) => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log('Receive json', json)
            callback(json)
        })
}

callUrl('https://jsonplaceholder.typicode.com/todos/1', (response) => {
    Assert.equals(response.userId, 1)
})