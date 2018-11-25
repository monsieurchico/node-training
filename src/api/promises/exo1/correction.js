import fetch from 'node-fetch'

const callUrl = (url, callback) => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log('Receive json', json)
            callback(json)
        })
}

export default callUrl