import express from 'express';
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from './Controllers/url.js'


const app = express();
app.use(express.urlencoded({extended:true}));

mongoose.connect(
    "mongodb+srv://danishnanjiani09:fysRY1kajzUejgo4@cluster0.gxyqxyx.mongodb.net/",
    {dbName: "NodeJs_Mastery_Course"}
).then(()=>console.log("MongoDb is Connected")).catch((err)=>console.log(err))


//rendering the home page
app.get('/', (req,res)=>{
    res.render("index.ejs", { shortUrl :null });
})

//Shorten Url Logic
app.post('/short', shortUrl)

// redirect to Original url using short code :- dynamic route
app.get('/:shortCode', getOriginalUrl )


const port = 1000;
app.listen(port, ()=>console.log(`server is started on Port = ${port}`));