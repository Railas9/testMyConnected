const router = require('express').Router();
const {getAllLists,createList,getListById,updateList,deleteList, transferCardtoList} = require('../controllers/lists.controllers')


router.get('/',getAllLists)
router.get('/:cardId/:listId',transferCardtoList)
router.post('/',createList)
router.get('/:id',getListById)
router.post('/update/:id',updateList)
router.delete('/:id',deleteList)



module.exports = router