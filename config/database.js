const mongoose = require('mongoose')

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose
    .connect(process.env.MONGODB_URI, options)
    .then()
    .catch()