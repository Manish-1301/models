const express= require('express');
const fs =require('fs');
const modelstring=fs.readFileSync('models.json');
const models=JSON.parse(modelstring);
const cors= require('cors');

const app= express();
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send(models);
})

app.listen(3001, ()=>{
    console.log('port is running on 3001 ')
})