const Tabs = require('../models/tabs.model')


exports.getAllTabs = async (req,res,next) =>{
    console.log('test')
    const tabs = await Tabs.find({}).exec()
    res.send(tabs)
}

exports.createTab = async (req,res,next) =>{
    const newTab = new Tabs(req.body)
    await newTab.save()
    res.end()
}

exports.getTabById = async (req,res,next) =>{
    const tabs = await Tabs.findById(req.params.id)
    res.send(tabs)
}

exports.addMasterToTab = async (req,res,next) =>{
    const tab = await Tabs.findById(req.params.id)
    tab.master = req.params.idMaster
    tab.save()
    res.send(tab)
}

exports.updateTab = async (req,res,next) =>{
    const tabsId = req.params.id
    const idList = req.params.idList
    const tab = await Tabs.findById(tabsId).exec()
    tab.lists.push(idList)
    tab.save()
    res.send(tab)
}

exports.deleteTab = async (req,res,next) =>{
    await Tabs.findByIdAndDelete(req.params.id).exec()
    res.send()
}

