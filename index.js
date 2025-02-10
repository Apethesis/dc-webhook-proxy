const express = require('express')
const fetch = require("node-fetch")
const app = express()
const port = 1280

app.use(express.json());

app.post("/", (req,res) => {
    fetch(req.body.target, { method: 'post', body: req.body.request, headers: { 'Content-Type': 'application/json' } })
})

app.listen(port, (err) => {
    if (err) console.log(err)
    console.log("now proxying on "+port)
})