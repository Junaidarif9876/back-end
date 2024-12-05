import express from 'express'
import { albumData } from '../apis/albums.js';





export const albumsRoute = express.Router();

albumsRoute.get('/albums',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:albumData })

});