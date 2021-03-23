const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
        0: {
            color: 'red',
            name: 'Urgent',
        },
        1: {
            color: 'yellow',
            name: 'Regular',
        },
        2: {
            color: 'blue',
            name: 'Trivial',
        },
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})