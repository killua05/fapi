const express = require('express')

const app = express()

app.get('/', (req,res,next)=>{
    res.send('Ok')
})


app.listen(3000, ()=>{
    console.log('Server has started!')
})