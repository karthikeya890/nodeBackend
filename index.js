require('dotenv').config()
const express = require('express')


const app = express()



const port = process.env.PORT





app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/twitter', (req, res) => {
    res.send('twitter')
  })



  app.get('/youtube', (req, res) => {
    res.send('twitter')
  })

  
app.get('/login', (req, res) => {
    res.send('<a href="https://youtu.be/7fjOw8ApZ1I?si=iA2uTeKuOgHgecpR">chai aur code</a>')
  })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})