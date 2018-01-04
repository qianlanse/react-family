import jsonp from 'jsonp'

export default (url, data, option) => {
    url += (url.indexOf('?') > 0 ? '&' : '?') + param(data)
    return new Promise((resolve, reject) => {
        jsonp(url, option, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

export const param = data => {
    let url = ''
    for (let k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
}