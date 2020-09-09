const express=require("express");
const app=express();
const fs=require("fs");
const { response } = require("express");
app.get("/",(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    fs.readFile('./help.html',null,function(error,data){
        if(error){
            res.writeHead(404);
            res.write("Oops! File not found.")
        }else{
            res.write(data);
        }
        res.end();
    });
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
