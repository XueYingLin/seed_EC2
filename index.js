const express = require('express')

const app = express()
app.use(express.json())
const port = 80

var seed = 0

app.get('/', (req, res) => {
  res.send(`${seed}`)
})

app.post('/', (req, res) => {
  seed = req.body.num
  res.send(`${seed}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
