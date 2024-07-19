
import express from "express"
import bodyParser from "body-parser";
import prompt from "prompt-sync";
import readline from "readline-sync";

const app=express();
const port=3000;

var Post=[];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.render("index.ejs",{p:Post});
})

app.get("/newPost",(req,res)=>{
    res.render("newPost.ejs");
})

app.post("/newPost",(req,res)=>{
    const t=req.body["ttitle"];
    const c=req.body["ccontent"];
    const Newpost={
        tit:t,
        con:c,
    }
    Post.push(Newpost);
    res.redirect("/");
    
})

app.delete("/:i", function(req, res){
    const i = req.params.i;
    // console.log(i);
    Post.splice(i, 1);
    //using fetch window.location = res.url
    res.redirect("/");
})

app.post("/:i", function(req, res){
    const i = req.params.i;
    const {tit_edit,con_edit}=req.body;
    // console.log(tit_edit);
    // console.log(con_edit);
    Post[i].tit=tit_edit;
    Post[i].con=con_edit;
    res.redirect("/");
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

    


