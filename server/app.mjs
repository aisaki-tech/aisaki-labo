import express from 'express'
import routers from './routers/index.mjs'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/', routers)

app.get('/', (req, res) => {
  res.send('Hello World３２!')
})
