const List = require('../models/lists.model')


exports.getAllLists = async (req,res,next) =>{
    console.log('test')
    const lists = await List.find({}).exec()
    //console.log(lists)
    res.send(lists)
}

exports.createList = async (req,res,next) =>{
    const newList = new List(req.body)
    await newList.save()
    res.end()
}

exports.getListById = async (req,res,next) =>{
    const list = await List.findById(req.params.id)
    res.send(list)
}

exports.updateList = async (req,res,next) =>{
    const listId = req.params.id
    const body = req.body
    const list = await List.findByIdAndUpdate(listId, { $set: body }).exec()
    res.send(list)
}

exports.transferCardtoList = async (req,res,next)=>{
    const cardId = req.params.cardId
    const listId = req.params.listId
    const found = await List.findOne( { 'cards': cardId }).exec()
    const newArray = found.cards.filter( el => el != cardId)
    found.cards = newArray
    console.log(found)
    found.save()
    const newList = await List.findOne( { '_id': listId }).exec()
    newList.cards.push(cardId)
    newList.save()
    res.end()
}

exports.deleteList = async (req,res,next) =>{
    await List.findByIdAndDelete(req.params.id).exec()
    res.send()
}

