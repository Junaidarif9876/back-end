import express from 'express'
import { UserData } from '../apis/user.js';





export const UserRoute =express.Router();


UserRoute.get('/user',(req,res)=>{
    res.status(200).send({status:200,message:"success", data:UserData})
})