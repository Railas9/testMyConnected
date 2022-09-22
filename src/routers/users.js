const router = require('express').Router();
const {getAllUsers,createUser,getUserById,updateUser,deleteUser, addUserToTab} = require('../controllers/users.controllers')


router.get('/',getAllUsers)
router.post('/',createUser)
router.get('/:id',getUserById)
router.post('/update/:id',updateUser)
router.post('/addMembers',addUserToTab)
router.delete('/:id',deleteUser)



module.exports = router