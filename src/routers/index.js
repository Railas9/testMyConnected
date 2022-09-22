const router = require('express').Router();
const {getAllCards,createCard,getCardById,updateCard,deleteCard} = require('../controllers/cards.controllers')


router.get('/',getAllCards)
router.post('/',createCard)
router.get('/:id',getCardById)
router.post('/update/:id',updateCard)
router.delete('/:id',deleteCard)


module.exports = router