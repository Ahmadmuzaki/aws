const app = require('express')()
const port = 8000


app.get('/', (req, res)=>{
    res.send("welcome to the abyss")
})
app.listen(port, ()=>{
    console.log("Connected");
})
