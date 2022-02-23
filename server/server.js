const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4005;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})