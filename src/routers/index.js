const router = require('express').Router();
const cards = require('./cards')
const lists = require('./lists')
const tabs = require('./tabs')

router.use('/cards',cards)

router.get('/',(req,res) =>{
    res.redirect('/cards')
})

router.use('/lists',lists)

router.use('/tabs',tabs)


module.exports = router