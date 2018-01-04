const router = require('koa-router')()

router.get('/api/getDiscList', ctx => {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: ctx.query
    }).then((response) => {
        ctx.body = response.data
    }).catch((e) => {
        console.log(e)
    })
})

module.exports = router