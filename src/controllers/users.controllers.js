const User = require('../models/users.model')

exports.getAllUsers = async (req,res,next) =>{
    const users = await User.find({}).exec()
    console.log(users)
    res.send(users)
}

exports.createUser = async (req,res,next) =>{
    const newUser = new User(req.body)
    await newUser.save()
    res.end()
}

exports.getUserById = (req,res,next) =>{
    User.findById(req.params.id).exec().then( user => {
        res.send(user)
    }).catch(e =>{
        console.log('erreur')
    })

}

exports.updateUser = async (req,res,next) =>{
    const userId = req.params.id
    const body = req.body
    const user = await User.findByIdAndUpdate(userId, { $set: body }).exec()
    res.send(user)
}

exports.deleteUser = async (req,res,next) =>{
    await User.findByIdAndDelete(req.params.id).exec()
    res.send()
}