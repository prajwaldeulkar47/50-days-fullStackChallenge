const express = require('express')
const fs = require('fs')
const users = require('./Mock_data.json')

const app = express()
const port = 8000

app.use(express.urlencoded({ extended: false }))
// app.use(express.json())


app.get('/users', (req, res) => {
    const html = `
    <html>
      <head>
        <title>Users List</title>
      </head>
      <body>
        <h1>Users</h1>
        <ul>
          ${users.map(user => `<li>${user.first_name} ${user.last_name} - ${user.email} - ${user.job_title}</li>`).join('')}
        </ul>
      </body>
    </html>
    `
    res.send(html)
})
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app
.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
    })  
.patch((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json({ message: `User with id ${id} updated successfully` })
    })
.delete((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json({ message: `User with id ${id} deleted successfully` })
    })

app.post('/api/users', (req, res) => {
    const body = req.body
    users.push({id: users.length + 1, ...body})
    fs.writeFile('Mock_data.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Error writing to file', err)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    })
    console.log('Body',body)
    return res.json({ message: `User created successfully with id ${users.length}` })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})