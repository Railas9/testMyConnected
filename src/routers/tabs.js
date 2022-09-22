const router = require('express').Router();
const {getAllTabs,createTab,getTabById,updateTab,deleteTab} = require('../controllers/tabs.controllers')


router.get('/',getAllTabs)
router.post('/',createTab)
router.get('/:id',getTabById)
router.post('/update/:id/:idList',updateTab)
router.delete('/:id',deleteTab)



module.exports = router