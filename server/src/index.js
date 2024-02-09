require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;

app.use(express.json())

app.use('/', require('../routes'));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})