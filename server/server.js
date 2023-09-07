const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const mongoose = require('mongoose')
const videogameRoutes = require(' ./routes/videogames')

const app = express ()

// middleware
app.use (express. json ())

app.use((reg, res, next) => {
console. log(req.path, req.method)
next ()
})

// routes
app. use("/api/videogames", videogameRoutes)

// connect to db
mongoose.connect (process.env.MONGO_URI)
 then (() => {
// listen for requests
app.listen (process.env.PORT, () => {
console. log('listening on port', process.env.PORT)
 })
})
.catch((error) => {
console.log(error)
})