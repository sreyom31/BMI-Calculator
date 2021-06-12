const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post('/',function(req,res){
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var result=(weight)/(height*height);
    res.render("result",{bmiRes:result});
})
app.post("/again",function(req,res){
    res.redirect('/');
})

app.listen(80,function(){
    console.log("listening on port 80");
})