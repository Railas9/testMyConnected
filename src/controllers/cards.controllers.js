const Card = require('../models/cards.model')


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

exports.getCardById = async (req,res,next) =>{
    const card = await Card.findById(req.params.id)
    res.send(card)
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