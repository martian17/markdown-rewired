import express from "express";
import path from "path";


const app = express();

app.get("/test", (req, res)=>{
    res.send("123");
});

const PORT = 3000;

let config = {};
try{
    config = (await import(path.resolve("markdown-rewired.config.js")))?.default || {};
}catch(err){}
console.log(config);

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});

