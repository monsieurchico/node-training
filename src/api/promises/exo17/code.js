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
    
}

callUrl('https://jsonplaceholder.typicode.com/todos/1', (response) => {
    Assert.equals(response.userId, 1)
})