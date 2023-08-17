const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/clicked', (req, res) => {
  // Handle the click event here
  res.send('Button was clicked!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
