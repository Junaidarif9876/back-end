import express from 'express'
import { commentsData } from '../apis/comments.js';





export const CommentsRoute = express.Router();



CommentsRoute.get('/comments',(req,res)=>{
    res.status(200).send({status:200, message:"success",data:commentsData})
})