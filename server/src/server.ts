import express from 'express'

const app = express()

app.get('/users', () => {
  console.log('olar')
})

app.listen(3333)