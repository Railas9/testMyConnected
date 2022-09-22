const router = require('express').Router();
const cards = require('./cards')
const lists = require('./lists')
const users = require('./users')
const tabs = require('./tabs')

router.use('/cards',cards)

router.get('/',(req,res) =>{
    res.redirect('/cards')
})

router.use('/lists',lists)

router.use('/tabs',tabs)

router.use('/users',users)


module.exports = router