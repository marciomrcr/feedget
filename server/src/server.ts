import express from 'express'

const app = express()

app.get('/users', (req, res) =>
{
 return res.send('Glory to God')
})

app.listen(3333, ()=> {
  console.log('Server is running. Glory to God!')
})
