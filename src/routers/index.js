const router = require('express').Router();
const {getAllCards} = require('../controllers/cards.controllers')


router.get('/',getAllCards)


module.exports = router