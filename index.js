const express = require('express')

const app = express()
app.use(express.json())
const port = 3000

var seed = 0

app.get('/', (req, res) => {
  console.log(`Get seed. Seed is ${seed}. Host is ${req.headers.host}`)
  res.send(`${seed}`)
})

app.post('/', (req, res) => {
  seed = req.body.num
  console.log(`Set seed. Host is ${req.headers.host}`, req.body)
  res.send(`${seed}`)
  console.log(`  sent seed  ${seed}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
