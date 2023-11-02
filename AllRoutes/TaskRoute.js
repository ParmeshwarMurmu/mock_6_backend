const express = require('express')
const { SubTaskModel } = require('../Model/SubTakSchema')
const { TaskModel } = require('../Model/TaskSchema')
const { BoardModel } = require('../Model/BoardSchema')

const taskRoute = express.Router()

taskRoute.post('/subtask', async(req, res)=>{

    try {

        const data = new SubTaskModel({...req.body})
        await data.save();
        res.status(200).send({"msg": "subTask Added"})
        
    } catch (error) {
        
    }
})


taskRoute.post('/newTask', async(req, res)=>{

    try {

        const data = new TaskModel({...req.body})
        await data.save();
        res.status(200).send({"msg": "New Task Added"})
        
    } catch (error) {
        res.status(200).send({"err": error})
    }
})

taskRoute.get('/allTask', async(req, res)=>{

    try {

        const data = await TaskModel.find()
        res.status(200).send({"data": data})
        
    } catch (error) {
        res.status(200).send({"err": error})
    }
})

module.exports = {
    taskRoute
}