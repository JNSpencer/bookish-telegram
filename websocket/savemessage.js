const https = require('http')

function saveData(msg) {

  const data = JSON.stringify({
    message: msg,
  })

  const options = {
    hostname: 'localhost',
    port: 8083,
    path: '/savedata',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  }

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
      process.stdout.write(d)
    })
  })

  req.on('error', (error) => {
    console.error(error)
  })

  req.write(data)
  req.end()
}

module.exports = {
  saveData
} 