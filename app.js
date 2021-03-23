const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.listen(process.env.PORT || 5000)
console.log('fire')

app.get("/priorities", (req, res) =>
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

