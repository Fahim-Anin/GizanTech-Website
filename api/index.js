const express = require('express')
const app =express();
const port = process.env.PORT || 3001;
const router = express.Router();

app.get('/',(req,res)=>{
    res.send("hey, Galib")
})
app.get('/login', (req, res) => {
    
})

app.listen(port,()=>{
    console.log(`Server side running on ${port}`)
})
