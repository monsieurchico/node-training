import 'colors'
import Assert from '../../../lib/assert'
import fetch from 'node-fetch'

/**
 * API
 */

/*
 * Décomposer la reponse de fetch pour extraire les headers et une partie du body
 */
const callUrl = async (url) => {
    const res = await fetch(url)
    const headers = res.headers
    const { userId } = await res.json()
    
    return {
        headers: {
            code: res.status,
            'content-type': headers.get('content-type')
        },
        body: {
            userId
        }
    }
}

const test = async () => {
    const response = await callUrl('https://jsonplaceholder.typicode.com/todos/1')
    Assert.objectEquals(response, {
        headers: { code: 200, 'content-type': 'application/json; charset=utf-8' },
        body: { userId: 1 }
    })
}

test()