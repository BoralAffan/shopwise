const express = require('express')
const { sequelize } = require('./models/index')
const app = express()
const PORT = 3000;


// startServer =async()=>{} 
// or
async function startServer() {
    try {
        await sequelize.sync({
            alter: true,
            logging: false
        })
        app.listen(PORT, () => console.log(`server connected at ${PORT}`))
    } catch (e) {
        console.log(`unable to run server ${e}`)
    }
}

startServer()