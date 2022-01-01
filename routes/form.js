const express = require('express')
const path = require("path")
const router = express.Router();

//     })
router.post("/",(req,res,next)=>{
    res.send(req.body)
    })

    router.get("/",(req,res,next)=>{
       res.sendFile(path.join(__dirname, "../" ,"views", "form.html"))
       
       
       
        // res.send(`
        // <form action="/form" method="post">
        // <input name="data">
        // <button> submit </button>
        // </form>
        // `)
        })



module.exports = router;



