const router = require('express').Router();
const {getAllUsers,createUser,getUserById,updateUser,deleteUser} = require('../controllers/users.controllers')


router.get('/',getAllUsers)
router.post('/',createUser)
router.get('/:id',getUserById)
router.post('/update/:id',updateUser)
router.delete('/:id',deleteUser)



module.exports = router