const User = require('../models/users.model')
const Tabs = require('../models/tabs.model')


exports.getAllUsers = async (req,res,next) =>{
    const users = await User.find({}).exec()
    console.log(users)
    res.send(users)
}

exports.createUser = async (req,res,next) =>{
    const passwordhash = await User.hashPassword(req.body.password)
    const newUser = new User({
        pseudo : req.body.pseudo,
        email : req.body.email,
        password : passwordhash
    })
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

exports.addUserToTab = (req,res,next) =>{
    Tabs.findById(req.body.id).exec().then( tab => {
        // Récupère le tableau puis verifie si l'id de l'utilisateur present dans le POST
        // correspond a celui du propriétaire, si oui il push dans le tableau member l'ensemble des 
        // membre du tableau, puis mets  à jour pour l'ensemble des membres, les tableaux où ils sont présent
        if(req.body.idUser == tab.master){
            tab.members.push(...req.body.members)
            User.find({
                '_id': { $in: tab.members}
            }).then( users =>{
                users.map(user => {
                    user.myTabs.push(tab._id)
                    user.save();
                })
            }
            )

            tab.save()
            res.send(tab)
        }else{
            res.send('not master')
        }
    }).catch(e =>{
        console.log('erreur')
    })

}