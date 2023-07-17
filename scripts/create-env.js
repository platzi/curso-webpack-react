const fs = require('fs')

if (!fs.existsSync('./.env')) {
    fs.writeFileSync('./.env', `API=${process.env.API}\n`)
}