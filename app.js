const express = require('express')
const App = express()

App.listen(5000)
console.log('fire')

App.get("/", (req, res) =>
  res.json({
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
)

