import express from 'express'
import { todosData } from '../apis/TodosData.js';




export const TodosRoute = express.Router();



TodosRoute.get('/todos',(req , res)=>{
    res.status(200).send({status:200,message:"success",data:todosData })

})