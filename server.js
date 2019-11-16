let express = require('express')
let app = express()
let url = require('url')

let timesHelloed = 0;

// respond when a GET request is made to the homepage
// use a response to send things back
// GET method route

app.get('/', (req, res) => {
  res.send('welcome')
})

app.get('/hello', (req, res) => {
    timesHelloed = timesHelloed+1;
  res.send('timesHelloed incremented')
})

// GET method route
app.get('/timesHelloed', (req, res) => {
    res.send('timesHelloed: '+timesHelloed)
  })

// GET method route
app.get('/resetTimesHelloed', (req, res) => {
    timesHelloed = 0;
  res.send('timesHelloed resetted')
})

let port = process.env.PORT || 3000
app.listen(port, () => console.log('Example app listening on port 3000!'))