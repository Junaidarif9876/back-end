import express from 'express'
import { commentsData } from '../apis/comments.js';
import { postsData } from '../apis/postsdata.js';




export const postRoute = express.Router();

postRoute.get('/post',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:postsData})

});