const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'/frontend/build')))
app.get('/',(req,res)=>{
    res.send('Hello Sadaf')
})
app.listen(5000,() => {
    console.log('====================================');
    console.log(`server is up on port 5000`);
    console.log('====== server up on localhost ===========');
    
    
})