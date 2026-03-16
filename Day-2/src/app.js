const express = require("express")
const app = express()

const notes = []

app.post("/notes", (req,res)=>{
    console.log(req.body)
})

module.exports = app