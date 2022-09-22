const express = require('express')
require('dotenv').config({path: '.env'})
require('./database/index')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const logger = require('./utils/logger')

const app = express()
const port = process.env.HTTP_PORT

const cards = require('./routers/cards')
const lists = require('./routers/lists')



// Middleware
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));


// insert your router here
app.use('/lists',lists)
app.use(cards)


//other


app.listen(port, () => {
    logger.log(`API listening at http://localhost:${port}`)
})
  