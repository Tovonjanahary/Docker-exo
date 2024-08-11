const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Le nom du vent"
    },
    {
      "id":"2",
      "title":"L'aventure de Jonathan"
    },
    {
      "id":"3",
      "title":"Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('the server is running on port 4000')
})