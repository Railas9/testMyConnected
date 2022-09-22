const router = require('express').Router();
const cards = require('./cards')
const lists = require('./lists')

router.use('/cards',cards)

router.get('/',(req,res) =>{
    res.redirect('/cards')
})

router.use('/lists',lists)


module.exports = router