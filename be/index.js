const express = require("express");
const {Worker} = require('worker_threads')

const app = express();

const port = 3333;

app.get("/", (req, res) => {
    res.send('Run non-blocking!')
})

app.get("/blocking", async (req, res) => {
    // let counter = 0;
    // for (let i = 0; i < 20000000000; i++){
    //     counter += 1;
    // }

    const worker = new Worker("./worker.js");

    worker.on("message", (data) =>{
        res.status(200).send(`result: ${data}`)
    })

    worker.on("error", (error) =>{
        res.status(200).send(`An error: ${error}`)
    })

    //res.status(200).send(`result: ${counter}`)
})



app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})