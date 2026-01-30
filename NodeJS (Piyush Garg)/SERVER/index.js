const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico' || req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
        return res.end()
    }

    const log = `${Date.now()}: ${req.url} : New request received`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)

    fs.appendFile('log.txt', log + '\n', (err) => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Home Page!')
                break
            case '/about':
                const username = myUrl.query.username
                res.end(`Welcome ${username} to the About Page!`)
                break
            default:
                res.end('404 Page Not Found!')
        }
    })

})

myServer.listen(1000, () => {
    console.log('Server is listening on port 1000.')
})