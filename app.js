const { router } = require('./routers/index')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, () => console.log(`ONEPIECE DB on port ${port}`))