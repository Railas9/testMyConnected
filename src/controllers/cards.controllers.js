const Card = require('../models/cards.model')
const List = require('../models/lists.model')

exports.getAllCards = async (req,res,next) =>{
    const cards = await Card.find({}).exec()
    console.log(cards)
    res.send(cards)
}

exports.createCard = async (req,res,next) =>{
    const newCards = new Card(req.body)
    await newCards.save()
    res.end()
}


exports.createCardInList = async (req,res,next) =>{
    const newCard = new Card(req.body)
    const savedCard = await newCard.save()
    const list = await List.findById(req.params.id).exec()
    list.cards.push(savedCard._id)
    list.save()
    res.end()
}

exports.getCardById = (req,res,next) =>{
    Card.findById(req.params.id).exec().then( card => {
        res.send(card)
    }).catch(e =>{
        console.log('erreur')
    })

}

exports.updateCard = async (req,res,next) =>{
    const cardId = req.params.id
    const body = req.body
    const card = await Card.findByIdAndUpdate(cardId, { $set: body }).exec()
    res.send(card)
}

exports.deleteCard = async (req,res,next) =>{
    await Card.findByIdAndDelete(req.params.id).exec()
    res.send()
}