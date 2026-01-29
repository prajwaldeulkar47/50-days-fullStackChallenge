const http = require('http')
const fs = require('fs')
const myUrl = require('url')

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico' || req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
        return res.end()
    }
    
    const log = `${Date.now()}: ${req.url} : New request received`

    fs.appendFile('log.txt', log + '\n', (err) => {
        switch (req.url) {
            case '/':
                res.end('Home Page!')
                break
            case '/about':
                res.end('About Page!')
                break
            default:
                res.end('404 Page Not Found!')
        }
    })

})

myServer.listen(1000, () => {
    console.log('Server is listening on port 1000.')
})