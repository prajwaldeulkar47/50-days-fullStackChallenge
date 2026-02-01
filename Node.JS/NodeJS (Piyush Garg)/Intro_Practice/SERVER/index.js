const expreess = require('express')

const app = expreess()

app.get('/', (req, res) => {
    return res.send('Hello From Home Page!')
})
app.get('/about', (req, res) => {
    const username = req.query.username
    return res.send(`Hello ${username} From About Page!`)
})


app.listen(1000, () => {
    console.log('Server is listening on port 1000.')
})




// const myServer = http.createServer((req, res) => {
//     if (req.url === '/favicon.ico' || req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
//         return res.end()
//     }

//     const log = `${Date.now()}: ${req.method} ${req.url} : New request received`
//     const myUrl = url.parse(req.url, true)


//     fs.appendFile('log.txt', log + '\n', () => {
//         switch (myUrl.pathname) {
//             case '/':
//                 res.end('Home Page!')
//                 break
//             case '/about':
//                 const username = myUrl.query.username
//                 res.end(`Welcome ${username} to the About Page!`)
//                 break
//             default:
//                 res.end('404 Page Not Found!')
//         }
//     })

// })