const express = require('express')
const bodyParser = require("body-parser")
const path = require("path")


const app = express();
const formRoutes = require('./routes/form');


app.use(bodyParser.urlencoded({
    extended:false
}))


app.use(express.static(path.join(__dirname, "public")));



app.use((req,res,next)=>{
console.log(req.url)
next();
})


app.use("/form", formRoutes)

app.use("/", (req,res)=>{
    res.send("welcome to nodejs express App")
})
// app.use("/asd",(req,res,next)=>{
//     res.send(req.url + "check")
// //     })
// app.post("/form",(req,res,next)=>{
//     res.send(req.url + "check")
//     })

//     app.use("/",(req,res,next)=>{
//         res.send(`
//         <form action="/form" method="post">
//         <input name="data">
//         <button> submit </button>
//         </form>
//         `)
//         })

 app.listen(3000);
