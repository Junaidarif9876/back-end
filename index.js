import express from 'express';
import dotenv from'dotenv';
import { postRoute } from './Routes/postRoute.js';
import { albumsRoute } from './Routes/albumsRoutes.js';
import { photosRoute } from './Routes/photosRoutes.js';
import { TodosRoute } from './Routes/TodosRoutes.js';
import { CommentsRoute } from './Routes/CommentsRoute.js';
import { UserRoute } from './Routes/UserRoute.js';


const app = express();
dotenv.config();

app.get('/' ,(req,res)=>{
  res.status(200).send ("welcome To Backend")
})

app.get('/comments' ,(req,res)=>{
    res.status(200).send ("welcome To Backend")
  })
  app.use('/posts',postRoute);
  
  app.use('/albums',albumsRoute);

  app.use('/photos',photosRoute);


  app.use ('/todos',TodosRoute);

  app.use('/comments',CommentsRoute);

  app.use('/user',UserRoute)










const PORT = process.env.PORT

app.listen(PORT, (req,res) => {
    console.log(`Server isrunning ${PORT}`);
})