const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://riles:1234@cluster0.tdcl6bk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connexion ok')
})

module.exports = mongoose;